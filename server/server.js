const http=require('http')
const fs=require('fs')
const port=process.env.PORT || 3000;
const server= http.createServer((req,res)=>{
	
	res.setHeader('content-Type','text/html')
	console.log(req.url)
	if(req.url== '/'){
		res.statusCode=200;
		res.end('<h1>This is VibhuPandey </h1> <p> Hey this is way we rock the world <p>')
	}else if(req.url == '/about'){
		res.statusCode=200;
		res.end('<h1> About Vibhu Padney <h1>')
	}
	else if(req.url == '/asm'){
		res.statusCode=200;
		const data=fs.readFileSync('index.html')
		res.end(data.toString());
	}else{
		res.statusCode=404
		res.end('<h1> The page was not found in the server <h1>')
	}
})
server.listen(port,()=>{
	console.log(`Server is Listing on port${port}`)
})