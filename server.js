const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

// Use the 'cors' middleware to enable CORS headers
app.use(cors());

// Define your proxy route
app.get('/getNews', (req, res) => {
    const targetUrl = 'http://dev-sw6-uapi.ecm.in.th/uapi/drt-ElectronicsDocument/ED-GetNews';

    // Forward the request to the target server
    req.pipe(request(targetUrl)).pipe(res);
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}`);
});