import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rosa',
      sobrenome: 'Pontes',
      email: 'teste@teste.com',
      idade: 52,
      altura: 1.50,
      peso: 65.5,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
