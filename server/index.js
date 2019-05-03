const http = require('http');
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;

http.createServer((req,res) => {
  if(req.url === '/') {
    fs.readFile('/home/ec2-user/public/index.html', (err, page) => {
      if(err) {
        console.log(err);
      } else {
        res.writeHead(200,{
          'Access-Control-Allow-Origin': '*',
	  'Content-Type': 'text/html'
        });
        res.end(page);
      }
    })
  }
}).listen(PORT, () => console.log(`LISTENING ON ${PORT}`));
