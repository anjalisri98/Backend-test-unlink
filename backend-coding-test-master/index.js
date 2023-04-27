'use strict';

const dotenv = require('dotenv');

if (['local', 'nodemon-local'].includes(process.env.NODE_ENV?.trim())) {
  let path = `${__dirname}/../../.env.local`;
  if (process.env.NODE_ENV === 'nodemon-local') path = `${__dirname}/../.env.local`;
  dotenv.config({ path: path });
}

const express = require('express');
const app = express();
const port = 8010;

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const route = require('./routes/route');

// const buildSchemas = require('./src/schemas');

// db.serialize(() => {
//     buildSchemas(db);

//     const app = require('./src/app')(db);

//     app.listen(port, () => console.log(`App started and listening on port ${port}`));
// });

mongoose.connect("mongodb+srv://anjalisriv023:WUEoRO1A1dpc9oQI@backend.twc2czd.mongodb.net/test", {
        useNewUrlParser: true
    })
    .then((result) => console.log("MongoDb is connected"))
    .catch((err) => console.log(err))


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});