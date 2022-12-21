#!/bin/bash
npm run build
git add .

echo 'Mensagem do commit: '
read message
git commit -am "$message"
git push
ssh ivan@35.247.251.98 \
  'git -C /home/ivan/api/' \
  'pull api main &&' \
  'pm2 restart api && sudo systemctl restart nginx'
