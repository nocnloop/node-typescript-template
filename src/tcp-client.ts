import net from 'net'
@log
class TcpClient {
  start() {
    const client = new net.Socket()

    client.connect(8888, '127.0.0.1', () => {
      console.log('client connect server')
      client.write('message from client...', (err) => {
        if (err) {
          return console.log(err)
        }
      })
    })

    client.on('data', (data) => {
      console.log(data.toString())
    })
  }
}

function log(target:any) {
  console.log(target)
}

const tcpClient = new TcpClient()

tcpClient.start()
