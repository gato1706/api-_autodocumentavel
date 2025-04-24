<p align="center">
  <img src="https://raw.githubusercontent.com/colinhacks/zod/master/logo.svg" alt="Zod" height="50" style="margin: 0 20px;"/>
  <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" alt="TypeScript"  style="margin: 0 20px;" width="50" style="margin: 0 10px"/>
  <img src="https://w7.pngwing.com/pngs/324/102/png-transparent-fastify-hd-logo.png" alt="Fastify" height="50"  style="margin: 0 20px;"/>
  
</p>

# 📘 API Autodocumentável com Fastify, Zod e Swagger

Este projeto é uma API REST simples, autodocumentável, desenvolvida com **Fastify** e **TypeScript**. Utilizamos **Zod** para validação de esquemas e o pacote **swagger-type-provider** para geração automática da documentação com **Swagger UI**. Projeto baseado na aula do Diego Fernandes da Rocketseat: [Link para a aula](https://youtu.be/mULWHLquYP0?si=2kmJfEFkQaZM_zs4)

---

## 🚀 Tecnologias Utilizadas

- **[Fastify](https://www.fastify.io/)** – Framework web leve e rápido para Node.js
- **[TypeScript](https://www.typescriptlang.org/)** – Tipagem estática moderna para JavaScript
- **[Zod](https://zod.dev/)** – Validação e tipagem de esquemas de forma declarativa
- **[@fastify/swagger](https://github.com/fastify/fastify-swagger)** – Integração do Swagger com Fastify
- **[swagger-type-provider](https://github.com/ronradtke/swagger-type-provider)** – Geração de tipos baseados no schema Zod para Swagger

- ⚠️ Este projeto possui **poucas rotas**, pois o objetivo principal foi **praticar a validação com Zod** e a **documentação automática com Swagger** — com foco total no aprendizado e na construção de uma base bem estruturada.
---

## 🧠 O que você vai ver aqui

- Validação de inputs com **Zod**
- Criação de rotas com **Fastify**
- Geração de documentação Swagger automática com base nos schemas
- API REST com boas práticas e tipagem forte

---

## 🛠️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repo.git
   cd nome-do-repo
2. npm (ou yarn) intall para instalar as dependências necessárias

3. npm run dev para rodar o projeto
   
4. Acesse a documentação do swagger em sua máquina local no endereço: http://localhost:7676/ **docs**
