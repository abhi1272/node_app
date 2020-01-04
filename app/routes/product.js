const appConfig = require("./../../config/appConfig");
const common = require('../controllers/common')

module.exports.setRouter = (app) => { 

    let baseUrl = `${appConfig.apiVersion}/product`;

    app.post(baseUrl+'/add',common.addProduct);

    app.get(baseUrl,common.getAllProduct);

    app.get(baseUrl+'/:id',common.getSingleProduct);

    app.patch(baseUrl+'/:id',common.editProduct);

    app.delete(baseUrl+'/:id',common.deleteProduct);
    
};



