import express from 'express'
//import * as randomRouter from "./routes/random.mjs"

const server = express();
const port = (process.env.PORT || 8080);


server.set('port', port);
server.use(express.static('public'));
server.get("/", (req,res,next)=>{

res.status(200).send('Hello World').end();

});

//server.use("/api/random", randomRouter);

server.listen(server.get('port'), function () {
console.log('server running', server.get('port'));
});
