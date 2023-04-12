const express = require('express');
const app = express();
const port = 9000;

app.use(express.json());

app.get('/testGet', (req, res) => {
  res.send('GET request received');
});

app.post('/testPost', (req, res) => {
  const body = req.body;
  res.send(`POST request received with body: ${JSON.stringify(body)}`);
});

app.put('/testPut', (req, res) => {
  const body = req.body;
  res.send(`PUT request received with body: ${JSON.stringify(body)}`);
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});

