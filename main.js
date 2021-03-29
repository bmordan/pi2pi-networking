const Libp2p = require('libp2p')
const TCP = require('libp2p-tcp')
const { NOISE } = require('libp2p-noise')
const MPLEX = require('libp2p-mplex')

async function main () {
    const node = await Libp2p.create({
        addresses: {
            listen: ['/ip4/127.0.0.1/tcp/0']
        },  
        modules: {
            transport: [TCP],
            connEncryption: [NOISE],
            streamMuxer: [MPLEX]
        }
    })

    await node.start()
    
    console.log('listening on addresses:')
    node.multiaddrs.forEach(addr => {
        console.log(`${addr.toString()}/p2p/${node.peerId.toB58String()}`)
    })
    
    await node.stop()
}

main()