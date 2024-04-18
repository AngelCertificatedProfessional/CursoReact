import type { Context } from "@netlify/functions"
//http://localhost:8888/.netlify/functions/hello

const notify = async (message: string) => {
    const body = {
        content: message,
        embeds: [
            {
                image: { url: 'urlimage' }
            }
        ]
    }

    const resp = await fetch(process.env.DISCORD_WEBHOOK_URL ?? '', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    if (!resp.ok) {
        return false;
    }
    return true
}

export default async (req: Request, context: Context) => {
    await notify('hola mundo desde netlify dev')
    return new Response(
        JSON.stringify({ message: 'hola mundo 3' }),
        { status: 401 }
    )
}