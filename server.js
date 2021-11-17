const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();

app.use(cors({
  origin: '*'
}));

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require employee routes
const BannerVehincle = require('./src/routes/BannerVehincle.routes')
app.use('/api/BannerVehincle', BannerVehincle)

const FeatureCategory = require('./src/routes/FeatureCategory.routes')
app.use('/api/FeatureCategory', FeatureCategory)

const FeatureVehicle = require('./src/routes/FeatureVehicle.routes')
app.use('/api/FeatureVehicle', FeatureVehicle)


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});