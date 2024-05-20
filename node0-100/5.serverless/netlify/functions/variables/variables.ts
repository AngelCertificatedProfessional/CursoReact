import type { Context } from "@netlify/functions"
//http://localhost:8888/.netlify/functions/hello
export default async (req: Request, context: Context) => {

    const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

    if (!myImportantVariable) {
        throw new Error('Missing My important variable')
    }

    return new Response(
        JSON.stringify({ message: myImportantVariable }),
        { status: 401 }
    )
}