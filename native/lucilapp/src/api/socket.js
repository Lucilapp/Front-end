import { io } from "socket.io-client"
export const socket = io('http://localhost:5001', {
    withCredentials: true,
    mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5001',
            }
          })