import jwt from 'jsonwebtoken';
import { env } from '$env/dynamic/private';

export async function handle({ event, resolve }) {
    const path = event.url.pathname;
    console.log(path)
    const cookie = event.cookies.get('token');
    console.log(cookie)
    if (['/', '/login', '/api/login'].includes(path)) {
        return await resolve(event);
    } else {
        if (cookie) {
            try {
                const decoded = jwt.verify(cookie, env.JWT_SECRET);
                event.request.user = decoded;
                return await resolve(event);
            } catch (e) {
                return new Response('Unauthorized: ' + e, 
{ status: 401 });
            }
        }
    }
    return new Response('Unauthorized', { status: 401 });
}
