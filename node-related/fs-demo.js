const fs = require('fs')
const path = require('path')
const http = require('http')
// 文件定义
const filelocation = path.resolve(__dirname, './csv/mail.csv')
// const targetFile = path.resolve(__dirname, './target.txt')
// 读取

// copy文件


// const writeStream = fs.createWriteStream(targetFile)
// readStream.pipe(writeStream)

// readStream.on('data', (chunk) => {
// 	console.log(chunk)
// })
// readStream.on('end', () => {
//   console.log('end')
// })
http.createServer( (req, res) => {
	if( req.method==='GET'){
    const readStream = fs.createReadStream(filelocation)
    res.setHeader('Content-Type', 'application/csv')
    res.setHeader('Content-Disposition','inline;filename=hello.csv')
		readStream.pipe(res)
	}
	
}).listen('8004', ()=> {
	console.log('start at 8004')
})

