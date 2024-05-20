import { Request, Response } from "express";
import { GitHubService } from "../services/github.services";
import { DiscordService } from "../services/discord.services";

export class GithubController {
    constructor(
        private readonly githubService = new GitHubService(),
        private readonly discordService = new DiscordService()
    ) {
    }

    webhookHandler = (req: Request, res: Response) => {
        const githubEvent = req.header('x-github-event') ?? 'unknown';
        const payload = req.body;
        let message: string;
        switch (githubEvent) {
            case 'start':
                message = this.githubService.onStart(payload)
                break;
            case 'issues':
                message = this.githubService.onIssue(payload)
            default:
                message = `Unknown event ${githubEvent}`
        }
        this.discordService.notify(message)
            .then(() => res.status(202).send('Accepted'))
            .catch(() => res.status(500).json({ error: 'Internar server error' }))
    }

}