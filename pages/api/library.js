import { API_URL } from "@/config/index"
import { getToken } from "next-auth/jwt"


export default async (req, res) => {

    if (req.method === 'GET') {

        const bookRes = await fetch(`${API_URL}/library`, {
            credentials: 'include',
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept': '*/*'
            },
            redirect: 'follow'
        })

        console.log(bookRes)

    } else {
        res.setHeader('Allow', 'GET')
        res.status(401).json({message: `${res.message}`})
    }
}