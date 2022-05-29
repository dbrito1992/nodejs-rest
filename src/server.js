import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`Servidor ligado na porta ${port}`);
  console.log(`Clique http://localhost:${port}`);
});
