# About
[Rocket.Chat](https://rocket.chat/) integrate notifications via an [Incoming Webhook](https://docs.rocket.chat/guides/administrator-guides/integrations) in [Gitea](https://gitea.io/)

# Watchtower

use go template make json payload to rocket.chat

```
version: '3'

services:
  watchtower:
    container_name: watchtower
    image: containrrr/watchtower
    restart: unless-stopped
    environment:
      - 'WATCHTOWER_NOTIFICATION_TEMPLATE={{if .}}{"message":"{{range .}}{{.Message}}\n{{end}}","level":"{{ (index . 0).Level }}"}{{end}}'
      - WATCHTOWER_NOTIFICATIONS=shoutrrr
      - WATCHTOWER_NOTIFICATION_URL=generic://<webhook_url>
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

If you rocket chat server host on `http` not `https`, add `?disableTLS=yes` in template like below
```
      - WATCHTOWER_NOTIFICATION_URL=generic://<webhook_url>?disableTLS=yes
```
# Rocket.Chat integration webhook
1. Login Rocket.Chat with Administrator
2. Go to Adminisration -> Integrations -> Create a new Incoming webhook
3. Set "**Enabled**" option to **True**
4. Select **Channel/User** that you want to post notification
5. Select an **Account** to post message.
6. Copy/Paste [wachtower-rocketchat.js](https://raw.githubusercontent.com/austinsuyoyo/rocketchat-watchtower-hook/master/wachtower-rocketchat.js) to rocketchat-gitea-hook/master/gitea-rocketchat.hooks.js) to Scripts Block in Rocket.Chat.
7. Set "**Script Enabled**" Option to **True**
8. Save the integration first, then you can copy "**Webhook URL**" replate <webhook_url>.


# Demo
<img width="476" alt="image" src="https://user-images.githubusercontent.com/15572804/161377364-e73be846-84ba-40ad-ba49-6a813589e960.png">
