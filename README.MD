# 🏁 Formula One API

Uma API simples desenvolvida com [Fastify](https://fastify.dev/) e escrita em TypeScript que fornece informações sobre as equipes e os principais pilotos da temporada 2025 da Fórmula 1.

## 📦 Tecnologias Utilizadas

- [Fastify](https://fastify.dev/) — Framework web leve e rápido
- [TypeScript](https://www.typescriptlang.org/) — Superset do JavaScript com tipagem estática
- [tsup](https://tsup.egoist.dev/) — Empacotador de TypeScript
- [tsx](https://github.com/esbuild-kit/tsx) — Execução de arquivos TypeScript sem build prévio

## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/geovanegirard/minimal-api-formula-1.git
````

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em modo desenvolvimento

```bash
npm run start:dev
```

### 4. Ou execute com hot-reload (modo watch)

```bash
npm run start:watch
```

### 5. Ou execute a versão empacotada

```bash
npm run start:dist
```

## 📚 Endpoints Disponíveis

### `GET /teams`

Retorna a lista de todas as equipes de Fórmula 1.

#### Resposta

```json
{
  "teams": [
    { "id": 1, "name": "McLaren", "base": "Woking, Reino Unido" },
    { "id": 2, "name": "Mercedes", "base": "Brackley, Reino Unido" },
    ...
  ]
}
```

---

### `GET /drivers`

Retorna todos os pilotos principais de cada equipe.

#### Resposta

```json
{
  "drivers": [
    { "id": 1, "name": "Max Verstappen", "team": "Red Bull Racing" },
    { "id": 2, "name": "Charles Leclerc", "team": "Ferrari" },
    ...
  ]
}
```

---

### `GET /drivers/:id`

Retorna um piloto específico com base no ID.

#### Exemplo

`GET /drivers/1`

#### Resposta

```json
{
  "driver": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

#### Caso não encontrado

```json
{
  "message": "Driver Not Found"
}
```

## 🧾 Scripts

| Comando               | Descrição                                 |
| --------------------- | ----------------------------------------- |
| `npm run start:dev`   | Inicia o servidor em modo desenvolvimento |
| `npm run start:watch` | Inicia com hot-reload                     |
| `npm run dist`        | Compila o projeto com `tsup`              |
| `npm run start:dist`  | Compila e executa a versão empacotada     |