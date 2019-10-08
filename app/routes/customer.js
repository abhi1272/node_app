const customer = require("./../../app/controllers/customer");
const appConfig = require("../../config/appConfig");
const auth = require("../middlewares/auth");


module.exports.setRouter = (app) => { 

    let baseUrl = `${appConfig.apiVersion}/customers`;

    app.post(`${baseUrl}/create`,customer.create);

    app.get(`${baseUrl}`,customer.getAllCustomers);

    app.get(`${baseUrl}/:id`,customer.getCustomer);

    app.patch(`${baseUrl}/:id`,customer.updateCustomer);

    app.delete(`${baseUrl}/:id`,customer.deleteCustomer);
    
};
