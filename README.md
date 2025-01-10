# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel.

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

### Create a docker image
Add the .env file with the next variables:
- NODE_ENV
- DATABASE_CLIENT
- DATABASE_CLIENT
- DATABASE_PORT
- DATABASE_NAME
- DATABASE_USERNAME
- DATABASE_PASSWORD
- JWT_SECRET
- ADMIN_JWT_SECRET
- APP_KEYS
---
docker build -t strapi_minciencias:latest .
---