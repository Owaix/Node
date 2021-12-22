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
app.use('/api/bannervehicle', BannerVehincle)

const FeatureCategory = require('./src/routes/FeatureCategory.routes')
app.use('/api/featurecategory', FeatureCategory)

const FeatureVehicle = require('./src/routes/FeatureVehicle.routes')
app.use('/api/featurevehicle', FeatureVehicle)

const LatestModel = require('./src/routes/LatestModel.routes')
app.use('/api/latestmodel', LatestModel)

const Make = require('./src/routes/Make.routes')
app.use('/api/make', Make)

const Model = require('./src/routes/Model.routes')
app.use('/api/model', Model)

const VehicleType = require('./src/routes/VehicleType.routes')
app.use('/api/vehicletype', VehicleType)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});