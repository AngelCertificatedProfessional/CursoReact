import express from 'express'

interface Options {
    port: number;
    public_path: string;
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly publicPath: string;

    constructor(options: Options) {
        const { port, public_path } = options;
        this.port = port;
        this.publicPath = public_path;
    }

    async start() {

        //* Middlewares
        this.app.use(express.static(this.publicPath))

        //*Routes
        this.app.get('/api/todos', (req, res) => {
            res.json([{
                id: 1,
                text: 'Biy Milk',
                createdAt: new Date()
            }, {
                id: 1,
                text: 'Biy Milk',
                createdAt: new Date()
            }, {
                id: 1,
                text: 'Biy Milk',
                createdAt: new Date()
            }])
        })

        //* Public Folder
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })
    }
}