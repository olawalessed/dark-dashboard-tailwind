import { useState } from "react";
import { API_URL } from "@/config/index";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const raw = JSON.stringify({ email, password })
    //console.log(req.body);
    const serverRes = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: raw
    })
    
    const data = await serverRes.json()
    //console.log(data.status)

    if (serverRes.status === 200) {
      //@Todo - Set Cookie her
      res.status(200).json({data})
    } else {
      console.log('error')
    }
      
  
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}