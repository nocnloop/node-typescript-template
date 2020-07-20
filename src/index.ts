import http from 'http'

// const server = new http.Server()

// server.listen(3000, () => {
//   console.log('client is comming...')
// })

// server.on('request', (req, res) => {
//   console.log(req)
//   res.writeHead(200, {
//     'Content-type': 'text/plain'
//   })
//   res.end('Hello World')
// })

// server.on('listening', () => {
//   console.log('listening')
// })


const server = http.createServer((req, res) => {
  req.on('data', (chunk) => {
    console.log(chunk)
  })
  req.on('end', () => {
    console.log('end')
  })
  res.writeHead(200, {
    'Content-type': 'text/html'
  })
  res.end('Hello World')
})

server.listen(3000, () => {
  'port is 3000'
})




