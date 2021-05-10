"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const querystring_1 = __importDefault(require("querystring"));
const PORT = 1337;
const server = http_1.default.createServer((req, res) => {
    console.log(req.headers);
    let post = '';
    req.on('data', d => {
        post += d;
    });
    req.on('end', () => {
        console.log(JSON.parse(querystring_1.default.parse(post).payload));
    });
    res.writeHead(200);
    res.end();
});
server.listen(PORT, () => console.log(`server started at port ${PORT}`));
//# sourceMappingURL=index.js.map