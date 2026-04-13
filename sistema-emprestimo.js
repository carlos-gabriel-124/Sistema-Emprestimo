const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const FILE = 'emprestimos.json';
let limiteTotal = 15000;

function limparTela() {
  console.clear();
}

function boot() {
  console.log('Inicializando...');
  console.log('Carregando dados...');
  setTimeout(login, 1500);
}

function login() {
  limparTela();
  console.log('Sistema de Empréstimos\n');
  rl.question('Usuário: ', (user) => {
    rl.question('Senha: ', (senha) => {
      if (user && senha === '14101709696') {
        menu();
      } else {
        console.log('Login inválido');
        login();
      }
    });
  });
}

function carregarDados() {
  if (!fs.existsSync(FILE)) return [];
  return JSON.parse(fs.readFileSync(FILE));
}

function salvarDados(dados) {
  fs.writeFileSync(FILE, JSON.stringify(dados, null, 2));
}

function menu() {
  limparTela();
  console.log('------------------------------');
  console.log('[1] - Cadastrar Empréstimo');
  console.log('[2] - Ver Empréstimos');
  console.log('[3] - Verificar Limite');
  console.log('[4] - Configurações');
  console.log('[5] - Fechar sistema');
  console.log('------------------------------');

  rl.question('Escolha: ', (op) => {
    switch (op) {
      case '1': cadastrar(); break;
      case '2': listar(); break;
      case '3': limite(); break;
      case '4': configuracoes(); break;
      case '5': process.exit();
      default: menu();
    }
  });
}

function cadastrar() {
  limparTela();
  rl.question('Nome: ', (nome) => {
    rl.question('CPF: ', (cpf) => {
      rl.question('Juros (%): ', (juros) => {
        rl.question('Valor: ', (valor) => {
          limparTela();

          console.log(`Nome: ${nome}`);
          console.log(`CPF: ${cpf}`);
          console.log(`Juros: ${juros}%`);
          console.log(`Valor: ${valor}`);

          rl.question('Confirmar? [Y/n]: ', (resp) => {
            if (resp.toLowerCase() === 'y') {
              const dados = carregarDados();
              dados.push({ nome, cpf, juros, valor, status: 'pendente' });
              salvarDados(dados);
            }
            menu();
          });
        });
      });
    });
  });
}

function listar() {
  limparTela();
  const dados = carregarDados();

  console.log('EMPRÉSTIMOS ATIVOS');
  console.log('---------------------');

  dados.forEach((e) => {
    console.log(`${e.nome} - ${e.valor}`);
  });

  rl.question('0 para voltar: ', () => menu());
}

function limite() {
  limparTela();
  const dados = carregarDados();
  const usado = dados.reduce((acc, e) => acc + Number(e.valor), 0);

  console.log('LIMITE TOTAL:', limiteTotal);
  console.log('LIMITE USADO:', usado);
  console.log('DISPONÍVEL:', limiteTotal - usado);

  rl.question('0 para voltar: ', () => menu());
}

function configuracoes() {
  limparTela();
  console.log('[1] Editar limite');
  console.log('[2] Validar empréstimo');
  console.log('[0] Voltar');

  rl.question('Escolha: ', (op) => {
    if (op === '1') editarLimite();
    else if (op === '2') validar();
    else menu();
  });
}

function editarLimite() {
  limparTela();
  console.log('Limite atual:', limiteTotal);

  rl.question('Novo limite: ', (novo) => {
    limiteTotal = Number(novo);
    configuracoes();
  });
}

function validar() {
  limparTela();
  const dados = carregarDados();

  dados.forEach((e, i) => {
    console.log(`[${i}] ${e.nome} - ${e.valor} (${e.status})`);
  });

  rl.question('Escolha para validar: ', (id) => {
    if (dados[id]) {
      dados[id].status = 'aprovado';
      salvarDados(dados);
    }
    configuracoes();
  });
}

boot();
