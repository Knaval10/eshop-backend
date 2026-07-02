const userRepository = require('./user.repository');

class UserService {
  async getUserProfile(userId) {
    const user = await userRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async getAllUsers() {
    return userRepository.findAll();
  }

  async updateUser(userId, updateData) {
    return userRepository.update(userId, updateData);
  }

  async deleteUser(userId) {
    return userRepository.delete(userId);
  }
}

module.exports = new UserService();
