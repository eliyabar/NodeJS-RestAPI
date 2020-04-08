const router = require('express').Router();
const UserController = require('../controllers/user-controller');

router.route('/users')
    .post(UserController.createUser) // to create new subordinate resources
    .get(UserController.get); // to retrieve resource representation/information only

router.route('/users/:userId')
    .get(UserController.getUsers) // to retrieve resource representation/information only
    .put(UserController.editUser) // to update existing resource
    .delete(UserController.deleteUser)  // to delete resources
    .patch(()=>{}); // to make partial update on a resource

module.exports = router;