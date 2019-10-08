const appConfig = require("./../../config/appConfig");
const productController = require('../controllers/product');


module.exports.setRouter = (app) => { 

    let baseUrl = `${appConfig.apiVersion}/products`;

    app.post(baseUrl+'/add',productController.addProduct);

    app.get(baseUrl,productController.getAllProduct);

    app.get(baseUrl+'/:id',[productController.getSingleProduct]);

    app.patch(baseUrl+'/:id',productController.editProduct);

    app.delete(baseUrl+'/:id',productController.deleteProduct);
    
};



