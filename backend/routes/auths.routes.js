import {Router} from 'express';

import {loginUser, registerUser} from '../controllers/authController.js';

const router = Router();

router.route('/user/register').post(registerUser);
router.route('/login').get(loginUser);
// router.route('/logout').get(logout);
// router.route('/password/forgot').post(forgotPassword);
// router.route('/password/reset/:token').put(resetPassword);
// router.route('/me').get(isAuthenticatedUser, getUserProfile);
// router.route('/me/update').put(isAuthenticatedUser, updateProfile);
// router.route('/password/update').put(isAuthenticatedUser, updatePassword);
// router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers);
// router.route('/admin/user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getUserDetails).put(isAuthenticatedUser, authorizeRoles('admin'), updateUser).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);

export default router;
