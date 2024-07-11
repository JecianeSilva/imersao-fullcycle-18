# Imersão Full Stack & FullCycle - Sistema de Venda de Ingressos

## Descrição do Projeto e Tecnologia usadas

Sistema de Venda de Ingressos, um projeto desenvolvido na Imersão Fullstack Fullcycle 18 da @fullcycle

- API de Parceiros (Reservas) desenvolvido com Nest(Node)
- Using Prisma(ORM)
- e MySQL(Database)

## Executar a aplicação

Subir os containers:

```
docker compose up
```

executar a aplicação:

```
docker compose exec app bash
```

instalar as dependências:

```
npm install
```

executar os bancos de dados:

```
npm run migrate:partner1
npm run migrate:partner2
```

Rodar a API 'partner1' na porta 3000 ou 'partner2' na porta 3001

```
npm run start:dev

npm run start:dev -- partner2

```
