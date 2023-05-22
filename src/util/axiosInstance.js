import axios from "axios";

const BASE_URL = "http://localhost:3000/data/synthetic-data.json"

const instance = axios.create({
  baseURL: BASE_URL,
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
    'X-Atlassian-Token': 'nocheck',
  }
});


export default instance