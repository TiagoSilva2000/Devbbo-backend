const axios = require('axios');

const GitHub = axios.create({
  baseURL: "https://api.github.com"
})

const Readme = axios.create({
  baseURL: "https://api.github.com/repos"
})

module.exports = {GitHub, Readme};