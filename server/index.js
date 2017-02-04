const express = require('express')

const app = express()

const port = process.env.PORT || 8000

app.use(express.static('app'));

app.listen(port, function () {
  console.log('Server listening on port ' + port)
});
