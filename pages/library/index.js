import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { ParseCookie } from "helpers";

export default function BookLibrary({ bookList, req }) {
  const { token } = useContext(AuthContext);
  
  return (
    <div>
      <p>Hello: {req}</p>
    </div>
  );
}

export async function getSerVerSideProps(context) {
  
  const {req, res} = context
  const data = ParseCookie(req);

  if (res) {
    if (Object.keys(data).length === 0 && data.constructor === Object) {
      res.writeHead(301, { location: "/" })
      res.send()
    }
  }

  console.log('Hey')
  const bookRes = await fetch(`${API_URL}/library`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      // 'Authorization': `Bearer ${}`
    },
  });

  const ref = await bookRes.json()
  const bookList = await bookRes.json()

  return {
    props: {
      data: data && data
    },
  };
}
