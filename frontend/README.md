# Frontend (Vite + React)

## Env

Create `.env` (or `.env.production` for prod builds):

```
VITE_STRAPI_URL=https://your-strapi.example.com
VITE_API_URL=https://sitebackend.example.com
```

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
# Deploy the contents of dist/
```

## Notes

- Images and content are loaded from Strapi using `VITE_STRAPI_URL`.
- Footer content comes from the Strapi Single Type `Footer`.
