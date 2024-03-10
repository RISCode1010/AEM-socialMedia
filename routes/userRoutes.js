const router = require('express').Router();
const userCtrl = require('../controllers/userController');
const auth = require('../middlewares/auth');


router.get('/search', auth, userCtrl.searchUser);
router.get('/user/:id', auth, userCtrl.getUser);
router.patch("/user", auth, userCtrl.updateUser);
router.patch("/user/:id/follow", auth, userCtrl.follow);
router.patch("/user/:id/unfollow", auth, userCtrl.unfollow);


module.exports = router;