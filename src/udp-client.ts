import dgram from 'dgram'

class UdpClient {
  start() {
    const socket = dgram.createSocket('udp4')

    socket.send('Hello', 9999, '127.0.0.1', (err, bytes) => {
      if (err) {
        return console.log(err)
      }
      console.log(`client has send ${bytes} bytes length message`)
    })

    socket.on('message', (msg, rinfo) => {
      console.log(msg.toString())
      console.log(rinfo)
    })
  }
}

const udpClient = new UdpClient()

udpClient.start()

// export default UdpClient
