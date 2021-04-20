# Pi to Pi

install node version manager:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

Then you can run 

```
nvm install node
```

## Ngrok exposure to the WAN

```
curl -sSL https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm64.tgz -o /home/pi/ngrok.tgz && tar -xvzf /home/pi/ngrok.tgz && rm ngrok.tgz
```

```sh
PEER=node1 npm run create:peer // node1.json
```

## Bootstraping

```sh
dig -t TXT _dnsaddr.bootstrap.libp2p.io
```