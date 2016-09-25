/**
 * DO NOT ADD LOGIC
 * JUST USING NODE TO SERVE STATIC FILES
 */
var express = require('express');
var app = express();

app.use(express.static('./'));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});
