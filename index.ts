import http from 'http';
import qs from 'querystring';
const PORT = 1337;
const server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) => {
    console.log(req.headers);
    let post = '';
    req.on('data', d => {
        post += d;
    });
    req.on('end',()=>{
        console.log(JSON.parse(qs.parse(post).payload as string));
    });
    res.writeHead(200);
    res.end();
});
server.listen(PORT, () => console.log(`server started at port ${PORT}`));
