const authService = require('./auth.service');

async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    const user = await authService.register({ name, email, password });

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (error.message === 'Email already in use') {
      return res.status(400).json({ success: false, message: error.message });
    }
    next(error);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const { user, token } = await authService.login({ email, password });

    res.json({
      success: true,
      token,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    if (error.message === 'Invalid credentials') {
      return res.status(400).json({ success: false, message: error.message });
    }
    next(error);
  }
}

module.exports = {
  register,
  login,
};
