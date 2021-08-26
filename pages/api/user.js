import { useState } from "react";
import { API_URL } from "@/config/index";
import cookie from "cookie";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "GET") {
   
      if (!req.headers.cookie) {
          res.status(403).json({ message: 'Not authorized' })
          return
      }


    const { token } = cookie.parse(req.headers.cookie)
      
    const serverRes = await axios(`${API_URL}/login`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    
    const user = await serverRes.json()

    if (serverRes.ok) {
      res.status(200).json({ user })
    } else {
      res.status(403).json({message: 'USer forbiden'})
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};
