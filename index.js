// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from App Engine Flex using Docker!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
