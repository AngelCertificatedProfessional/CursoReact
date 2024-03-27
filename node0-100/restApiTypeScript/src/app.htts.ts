import fs from 'fs'
import http from 'http'

const server = http.createServer((req, res) => {
    const htmlFile = fs.readFileSync('./public/index.html', 'utf-8')
    res.writeHead(200, { 'Content-type': 'text/html' })
    if (req.url?.endsWith('.js')) {
        res.writeHead(200, { 'Content-type': 'application/javascript' })
    } else if (req.url?.endsWith('.css')) {
        res.writeHead(200, { 'Content-type': 'text/css' })
    }
    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8')
    res.end(responseContent)
})

server.listen(8090, () => {
    console.log("Server running on")
})