const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { env } = require('../../config');

async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

async function comparePassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

function generateToken(user) {
  return jwt.sign(
    { id: user._id || user.id, role: user.role },
    env.jwtSecret,
    { expiresIn: '7d' }
  );
}

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
};
