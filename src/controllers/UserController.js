import User from '../models/User';

class UserController {
  // CREATE
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, email, nome } = novoUser;
      return res.json({ id, email, nome });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // INDEX
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'email', 'nome'] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, email, nome } = user;
      return res.json({ id, email, nome });
    } catch (e) {
      return res.json(null);
    }
  }

  // UPDATE
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe!'],
        });
      }
      const novoDados = await user.update(req.body);
      const { id, email, nome } = novoDados;
      return res.json({ id, email, nome });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não existe!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe!'],
        });
      }
      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
