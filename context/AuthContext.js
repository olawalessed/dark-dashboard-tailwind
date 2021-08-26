import { createContext, useEffect, useState } from "react";
import { NEXT_URL, API_URL } from "@/config/index";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import jwt_decode from "jwt-decode";
import cookie from "cookie";
import { request } from "http";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "",
    id: "",
    account_type: "",
  });
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => checkUserLoggedIn(), []);
  //Methods
  //Register
  const register = async (user) => {
    const res = await axios.post("http://localhost:3000/api/register", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();

    console.log("This is the response:" + data);
    if (res.status === 200) {
      // const token = data.Token
      // console.log(token)
      //Parse Cookie to Extract Details
      // const userDecoded = jwt_decode(token)
      // console.log(userDecoded)
      // setToken(data.Token)
      // setUser(userDecoded);
      // localStorage.setItem('user', userDecoded)
      // router.push('/dashboard')
    }
  };
  //Login
  const login = async ({ email, password }) => {
    //console.log({ email, password });

    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();

    console.log("This is the response:" + data.Token);
    if (res.status === 200) {
      const token = data.Token;
      console.log(token);

      //Parse Cookie to Extract Details
      const conv = jwt_decode(token);
      const userDecoded = JSON.parse(conv);

      for (const [key, value] in conv) {
        setUser({ ...user, [key]: value });
      }

      setToken(data.Token);
      setUser({
        ...user,
        name: userDecoded.name,
        id: userDecoded.dobook_id,
        account_type: userDecoded.account_type,
      });
      localStorage.setItem("user", userDecoded);

      router.push("/dashboard");
    } else {
      setError(data.message);
      setError(null);
    }
  };

  //Logout
  const logout = async () => {
    console.log("Logout");
    setUser({});
    localStorage.clear();
    router.push("/");
  };

  //Check user logged in
  const checkUserLoggedIn = async () => {
    const userDecoded = localStorage.getItem("user");
    // console.log("User detail found: " + userDecoded);
    const test = JSON.parse(userDecoded);

    if (userDecoded) {
      setUser({
        ...user,
        name: test.name,
        id: test.dobook_id,
        account_type: test.account_type,
      });
    } else {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider
      value={{ token, user, error, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
