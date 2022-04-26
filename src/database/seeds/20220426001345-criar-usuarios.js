const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'John Doe',
        email: 'teste4@es.com',
        password_hash: await bcrypt.hash('123456', 8),
        updated_at: new Date(),
        created_at: new Date(),
      }],
      {},
    );
  },

  down() {},
};
