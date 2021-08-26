import { useState } from "react";
import { API_URL } from "@/config/index";
import cookie from "cookie";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const raw = JSON.stringify({ email, password });
    //console.log(req.body);
    const serverRes = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: raw,
    });

    const data = await serverRes.json();

    if (serverRes.ok) {
      //Set Cookie here

      //With Iron Session
      
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("user", data.Token, {
          httpOnly: true,
          //secure: processs.env.NODE_ENV !== "development",
          maxAge: 60 * 60 * 24 * 7,
          sameSite: "strict",
          //path: '/'
        })
      )

      //Return 200 OK Response
      res.status(200).json(data);
    } else {
      res.status(401).json(data.message);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
