const userService = require('./user.service');

// GET /api/users/profile
async function getProfile(req, res, next) {
  try {
    const user = await userService.getUserProfile(req.user.id);
    res.json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
}

// GET /api/users
async function getAllUsers(req, res, next) {
  try {
    const users = await userService.getAllUsers();
    res.json({
      success: true,
      data: users.map(user => ({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      })),
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProfile,
  getAllUsers,
};
