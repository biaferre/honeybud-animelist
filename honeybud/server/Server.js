const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/proxy', async (req, res) => {
  const targetUrl = 'https://myanimelist.net/v1/oauth2/token'; // Replace with the target API URL

  try {
    const response = await axios.post(targetUrl, req.body, {
      headers: {
        'Authorization': req.headers.authorization,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
