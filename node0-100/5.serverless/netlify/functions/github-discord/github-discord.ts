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


const onStart = (payload: any): string => {
    let message: string = '';
    const { action, sender, repository, starred_at } = payload;
    return `User ${sender.login} ${action} star on ${repository}`
}

const onIssue = (payload: any) => {
    const { action, issue } = payload;
    if (action === 'opened') {
        return `An issue was opened with this title ${issue.title}`
    }
    if (action === 'closed') {
        return `An issue was closed by ${issue.user.login}`
    }
    if (action === 'reopened') {
        return `An issue was closed by ${issue.user.login}`
    }
    return `Unhandle action for the issue event ${action}`

}

export default async (req: Request, context: Context) => {

    const githubEvent = req.headers.get('x-github-event') ?? 'unknown';
    const payload = req.body;
    let message: string;
    switch (githubEvent) {
        case 'start':
            message = onStart(payload)
            break;
        case 'issues':
            message = onIssue(payload)
        default:
            message = `Unknown event ${githubEvent}`
    }

    await notify(message)
    return new Response(
        JSON.stringify({ message: 'hola mundo 3' }),
        { status: 401 }
    )
}