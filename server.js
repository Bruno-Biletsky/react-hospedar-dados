// JSON Server module
const jsonServer = require("json-server"); //importar json server
const server = jsonServer.create(); // criar json server automatico na web
const router = jsonServer.router("dados.json"); // nome do servidor

// Certifique-se de usar o middleware padrão 
//são ferramentas poderosas para moldar o fluxo de requisição-resposta, 
//melhorar a modularidade do código e adicionar funcionalidades específicas de forma organizada.
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Adicione isso antes de server.use(router)
server.use(
 // Adicione uma rota personalizada aqui, se necessário
 jsonServer.rewriter({
  "/*": "/$1", //rotas personalizadas ou sub-rotas
 })
);
//Usando a rota 
server.use(router);
// Escutando a porta do servidor rodando
server.listen(3000, () => {
 console.log("Servidor rodando");
});

// Exportar a API do servidor
module.exports = server;