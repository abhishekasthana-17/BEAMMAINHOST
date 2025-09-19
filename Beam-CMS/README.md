# Beam-CMS (Strapi)

## Requirements

- Node.js 18+

## Env

Copy `.env.example` to `.env` and replace placeholder secrets.

SQLite dev example (already in example):

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=...comma,separated,keys
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
ENCRYPTION_KEY=...
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=...
```

## Run (dev)

```
npm install
npm run develop
```
## CORS / Security

Ensure `config/middlewares.js` and `config/server.js` allow your frontend origin in production.
