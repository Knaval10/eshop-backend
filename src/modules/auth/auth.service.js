const userRepository = require('../user/user.repository');
const { hashPassword, comparePassword, generateToken } = require('./auth.utils');

class AuthService {
  async register({ name, email, password }) {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already in use');
    }

    const hashedPassword = await hashPassword(password);
    const user = await userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }

  async login({ email, password }) {
    const user = await userRepository.findByEmail(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = generateToken(user);
    return { user, token };
  }
}

module.exports = new AuthService();
