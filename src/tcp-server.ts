import net from 'net'

class TcpServer {
  start() {
    const server = net.createServer((socket) => {
      /** 远程客户端地址和端口号 */
      console.log(`client is connecting...address is ${socket.remoteAddress}...port is ${socket.remotePort}...`)

      /** 获取链接数量 */
      server.getConnections((error, count) => {
        if (error) {
          return console.log(error)
        }
        console.log(`现有连接的客服端数量${count}`)
      })

      socket.write('message from server...', (err) => {
        if (err) {
          return console.log(err)
        }
        console.log(`发送字节数量：${socket.bytesWritten}`)
      })

      /** 监听客户端发送的数据 */
      socket.on('data', (data) => {
        console.log(data.toString())
        console.log(`收到字节数量：${socket.bytesRead}`)
      })

      /** 连接断开 */
      socket.on('end', () => {
        console.log('end')
      })
    })

    /** 设置连接最大数量 */
    server.maxConnections = 2

    server.listen(8888, () => {
      console.log('server port is 8000')
    })
  }
}

const tcpServer = new TcpServer()

tcpServer.start()

