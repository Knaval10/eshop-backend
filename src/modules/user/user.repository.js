const User = require('./user.model');

class UserRepository {
  async findByEmail(email) {
    return User.findOne({ email });
  }

  async findById(id) {
    return User.findById(id);
  }

  async create(userData) {
    return User.create(userData);
  }

  async findAll() {
    return User.find();
  }

  async update(id, updateData) {
    return User.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return User.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
