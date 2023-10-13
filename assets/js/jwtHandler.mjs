import { JWT } from "jose";

export function createToken() {
    const payload = {
        name: 'John Smith',
        email: 'jsmith@gmail.com',
    };
    const secretKey = 'D8ySer-Xf-M5QNPUlu9iXA-l6ikI20hc5MrCw5GFpSPQx2G64AQFQol7epuFjfaptSZ8clRkw6AeoB8PaN7YDg';
    const token = JWT.sign(payload, secretKey);
    
    return token;
}