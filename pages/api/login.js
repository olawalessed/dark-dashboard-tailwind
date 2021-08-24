import { useState } from "react"
import {API_URL} from '@/config/index'

export default async (req, res)  =>    {
    if (req.method === 'POST') {
        const {email, password} = req.body
        
        console.log(req.body)

        res.status(200).json({})
        //Get user details from server
    }
    else {
        res.setHeader('Allow', ['POST'])
        res.status(405).json({message: `Method ${req.method} is not allowed`})
    }
} 