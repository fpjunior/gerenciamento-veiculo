# Gerenciamento de Veículo

Este projeto é uma aplicação completa para gerenciamento de utilização e abastecimento de veículos, composta por frontend (Angular) e backend (Node.js + Express + PostgreSQL).

## Estrutura
- **gerenciamento-combustivel/**: Frontend Angular
- **gerenciamento-combustivel-backend/**: Backend Node.js/Express

## Funcionalidades
- Cadastro, listagem e consulta de veículos
- Cadastro e listagem de motoristas
- Cadastro e listagem de viagens/abastecimentos
- Integração total entre frontend e backend
- Persistência dos dados em banco PostgreSQL (rodando em Docker)

## Como rodar
### Backend
1. Instale as dependências:
   ```bash
   cd gerenciamento-combustivel-backend
   npm install
   ```
2. Configure o banco PostgreSQL (Docker recomendado)
3. Inicie o servidor:
   ```bash
   node server.js
   ```

### Frontend
1. Instale as dependências:
   ```bash
   cd gerenciamento-combustivel
   npm install
   ```
2. Inicie o servidor Angular:
   ```bash
   ng serve
   ```
3. Acesse `http://localhost:4200`

## Banco de Dados
- PostgreSQL 16
- Porta padrão: 5433
- Usuário: `user`
- Senha: `password`
- Banco: `gerenciamento_combustivel`

## Docker
Exemplo de uso do Docker para o banco:
```yaml
docker-compose.yml
```

## Autor
- [fpjunior](https://github.com/fpjunior)
