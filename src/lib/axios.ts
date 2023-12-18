import axios from 'axios'
const https = require('https');

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_BASE_URL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

api.interceptors.request.use((config) => {
  config.timeout = 30000;

  return config;
})

export default api;
