# 💰 Sistema de Empréstimos Pro

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Sistema web simples e eficiente para controle de empréstimos, com cálculo automático de juros, parcelamento, validação de pagamentos e controle de limite financeiro.

Projeto desenvolvido com foco em prática, organização financeira e evolução para aplicações mais robustas.

---

## 🚀 Funcionalidades

### 🔐 Autenticação
- Login administrativo simples
- Usuário: **admin**
- Senha: **admin10**
- ⚠️ Sistema sem CPF (modo simplificado para uso local e testes)

---

### 💸 Cadastro de Empréstimos
- Cadastro de cliente
- Definição de valor base
- Aplicação de juros personalizados (%)
- Opção de pagamento:
  - À vista
  - Parcelado

---

### 🧮 Cálculo Automático
- Total com juros calculado em tempo real
- Exibição formatada em reais (R$)
- Cálculo automático de parcelas

---

### 📋 Listagem de Empréstimos
- Visualização de todos os empréstimos cadastrados
- Informações exibidas:
  - Nome do cliente
  - Valor total
  - Tipo de pagamento
  - Status (pendente/aprovado)

---

### ✅ Validação de Empréstimos
- Listagem de empréstimos pendentes
- Aprovação manual
- Atualização de status

---

### 📊 Controle de Limite
- Definição de limite total disponível
- Cálculo automático do valor usado
- Exibição do saldo disponível

---

### ⚙️ Configurações
- Alteração do limite total
- Acesso à validação de empréstimos

---

## 🧠 Tecnologias Utilizadas

### 💻 Frontend
- HTML5
- CSS3 (tema escuro)
- JavaScript puro (Vanilla JS)
- LocalStorage (armazenamento local)

---

### 🖥️ Backend (caso exista versão Node no repositório)
- Node.js
- Manipulação de dados em JSON
- Possível base para API REST

> 💡 Essa versão permite evolução para banco de dados real como MongoDB ou MySQL.

---

## 📂 Estrutura do Projeto
📁 projeto
├── index.html # Sistema principal (frontend)
├── server.js # Backend Node (opcional)
├── data.json # Base de dados (opcional)
└── README.md


---

## ▶️ Como Executar

### 🔹 Versão Frontend (Simples)

1. Baixe o projeto
2. Abra o arquivo `index.html` no navegador
3. Faça login com:

Usuário: admin  
Senha: admin10  

---

### 🔹 Versão Node (se existir)

1. Instale as dependências: npm install
2. Execute o servidor: node server.js
3. Acesse no navegador: (http://localhost:3000)


---

## ⚠️ Observações

- Os dados são armazenados no **LocalStorage**
- Não há criptografia de dados (versão inicial)
- Sistema feito para estudo e evolução
- Não recomendado para produção sem backend seguro

---

## 💡 Melhorias Futuras

- 🔐 Autenticação segura (JWT)
- 🗄️ Banco de dados real (MongoDB)
- 📱 Melhor responsividade
- 📊 Dashboard com gráficos
- 📤 Exportação de relatórios
- 🔔 Sistema de notificações

---

## 📜 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

**Carlos Gabriel Abrantes De Oliveira (Sr. Abrantes)**

Projeto desenvolvido para aprendizado, prática e evolução profissional.
