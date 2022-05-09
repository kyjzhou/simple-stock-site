
const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("This is an Express server");
});

// app.post('/explore.html', function(req, res) {
//     res.send("Hello world\n");
// });

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});


/* Normal Node.js server HTML version
   ignore for now */

// const http = require("http");
// const host = 'localhost';
// const port = 8000;

// var request = require('request');
 

// TODO: Retrieve/process form submission
// Event handler for form data (symbol)
// const formDataHandler = function(symbol) {
//   console.log(`Received ${symbol}`);

    // TODO: Make API call
    // let api_url = `https://www.alphaavantage.co.query?function=GLOBAL_QUOTE&symbol=${symbol.toUpperCase()}&apikey=demo`;

    // request.get(
    //     api_url, 
    //     {json: true, 
    //     headers: {}}, 
    //     () => {

    // });

// };

