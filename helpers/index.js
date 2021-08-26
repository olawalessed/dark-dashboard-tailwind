import cookie from 'cookie'

export function ParseCookie(req){
    return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}
