const Controller = require('../../lib/controller')
const userFacade = require('./facade')

class UserController extends Controller {
    get (){
        return 'Welcome to user controller!';
    };

}

module.exports = new UserController(userFacade)
