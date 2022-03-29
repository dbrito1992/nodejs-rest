import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O nome tem que haver entre 5 e 255 caracteres!',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Error, e-mail já existe!',
          },
          validate: {
            isEmail: {
              msg: 'Email inválido!',
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha tem que haver entre 6 e 50 caracteres!',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }
}
