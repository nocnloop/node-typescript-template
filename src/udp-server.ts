import dgram, { Socket } from 'dgram'

class UdpServer {
  start() {
    const socket = dgram.createSocket('udp4')

    socket.bind(9999, '127.0.0.1', () => {
      console.log('server is binded to 9999')
    })

    socket.on('message', (msg, rinfo) => {
      console.log(msg.toString())
      console.log(rinfo)
      this.toMessage(socket, rinfo)
    })
  }

  toMessage(socket:dgram.Socket, rinfo:dgram.RemoteInfo) {
    setTimeout(() => {
      socket.send('Hello Client...', rinfo.port, rinfo.address, (err, bytes) => {
        if (err) {
          return console.log(err)
        }
        console.log(`server send to clent ${bytes} bytes length message`)
      })
    }, 1000)
  }
}

export default UdpServer
