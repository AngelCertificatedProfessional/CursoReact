import type { Context } from "@netlify/functions"
//http://localhost:8888/.netlify/functions/hello
export default async (req: Request, context: Context) => {
    return new Response(
        JSON.stringify({ message: 'hola mundo 3' }),
        { status: 401 }
    )
}