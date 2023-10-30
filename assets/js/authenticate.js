console.log('Parsing authenticate.js file)')
/*import { JsonWebTokenError } from "jsonwebtoken";
import jwt from 'jsonwebtoken';

const zendeskSigningKey = 'D8ySer-Xf-M5QNPUlu9iXA-l6ikI20hc5MrCw5GFpSPQx2G64AQFQol7epuFjfaptSZ8clRkw6AeoB8PaN7YDg';
const user = {
    name: 'John Smith',
    email: 'jsmith@gmail.com',
    external_id: 'jsmith@gmail.com'
};

const token = jwt.sign(user, zendeskSigningKey, { algorithm: 'HS256' });
console.log('JWT Token:', token);

token = 'D8ySer-Xf-M5QNPUlu9iXA-l6ikI20hc5MrCw5GFpSPQx2G64AQFQol7epuFjfaptSZ8clRkw6AeoB8PaN7YDg'

Login User ()
zE("messenger", "loginUser", function (callback) {
    callback(token);
});
console.log('User logged in.');*/

var jwt = require('jsonwebtoken');
const SECRET = 'D8ySer-Xf-M5QNPUlu9iXA-l6ikI20hc5MrCw5GFpSPQx2G64AQFQol7epuFjfaptSZ8clRkw6AeoB8PaN7YDg';
const KEY_ID = 'app_65285e7edb23fcdd066d96bc'
var token = jwt.sign({ scope: 'user', external_id: 'jsmith@gmail.com' }, SECRET, { header: { kid: KEY_ID } });
console.log('Token: ' + String(token))