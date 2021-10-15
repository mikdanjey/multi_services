
yarn install
yarn build

pm2 start server.js --name "Analytics UI p=5000"

http://ec2-18-232-169-254.compute-1.amazonaws.com:5000
http://ec2-18-232-169-254.compute-1.amazonaws.com:8888