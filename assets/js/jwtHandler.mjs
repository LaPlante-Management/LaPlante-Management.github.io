/*import { JWT } from "jose";

export function createToken() {
    const payload = {
        name: 'John Smith',
        email: 'jsmith@gmail.com',
        external_id: 'jsmith@gmail.com'
    };
    const secretKey = 'D8ySer-Xf-M5QNPUlu9iXA-l6ikI20hc5MrCw5GFpSPQx2G64AQFQol7epuFjfaptSZ8clRkw6AeoB8PaN7YDg';
    const token = JWT.sign(payload, secretKey, { algorithm: 'HS256' });
    
    return token;
}*/
import jwt from 'jsonwebtoken';

const zendeskSigningKey = 'D8ySer-Xf-M5QNPUlu9iXA-l6ikI20hc5MrCw5GFpSPQx2G64AQFQol7epuFjfaptSZ8clRkw6AeoB8PaN7YDg';
const user = {
    name: 'John Smith',
    email: 'jsmith@gmail.com',
    external_id: 'jsmith@gmail.com'
};

const token = jwt.sign(user, zendeskSigningKey, { algorithm: 'HS256' });
console.log('JWT Token:', token);

// Login User ()
zE("messenger", "loginUser", function (callback) {
    callback(token);
});
console.log('User logged in.');