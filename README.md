# Nuxt frontend for socialPlants

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install
```

## Postgres DB

### Windows Setup

Download the windows postgres installer at https://www.postgresql.org/download/windows/ and foollow the steps

Edit the .env file to match your db connection

```bash
npx prisma init
npx prisma push
```

Check your db with

```bash
npx prisma studio
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn run dev
```

## Production

Build the application for production:

```bash
yarn run build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
