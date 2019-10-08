let appConfig = {};

appConfig.port = process.env.PORT || 5000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb+srv://node-shop:node-user123@node-rest-shp-ift2f.mongodb.net/pharmaApp?retryWrites=true&w=majority'
};
appConfig.apiVersion = '/api/v1';
  

module.exports = mongodb+srv://node-shop:node-user123@node-rest-mongodb+srv://node-shop:node-user123@node-rest-shp-ift2f.mongodb.net/pharmaApp?retryWrites=true&w=majorityshp-ift2f.mongodb.net/pharmaApp?retryWrites=true&w=majority{
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion
};