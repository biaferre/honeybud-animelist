const express = require('express');
const axios = require('axios');
const qs = require('querystring');
const app = express();
const PORT = 3002;
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
    credentials: true, // Allow cookies, headers, and exposes headers
    optionsSuccessStatus: 204, // status for options requests
  };
  
  app.use(cors(corsOptions));

  
app.use(express.json());

app.post('/exchangeToken', async (req, res) => {
  try {
    const auth = 'Basic ' + Buffer.from(req.body.client_id + ':' + req.body.client_secret).toString('base64');

    const postData = qs.stringify({
      client_id: req.body.client_id,
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: req.body.redirect_uri,
      code_verifier: req.body.code_verifier,
    });

    const response = await axios.post('https://myanimelist.net/v1/oauth2/token', postData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': auth
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : 'Server error');
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
