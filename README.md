# Port App (1-port-app)

Port App Descr

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Deploy with gh-pages

### Git setup for deploy on github-pages.

#### Add Windows environment variables in "Path"

```bash
C:\Program Files\Git\bin\git.exe
C:\Program Files\Git\cmd
```

#### Add the following to your package.json, also install gh-pages npm module

```bash
...
"homepage": "https://<GitNickname>.github.io/RepoName",
...
"scripts": {
    ...
    "deploy": "quasar build && gh-pages -d dist/spa",
```

### Add this to quasar.config to fix path to assets and css.

```bash
...
build: {
    ...
    extendViteConf(viteConf, { isClient, isServer }) {
        viteConf.base = "./"; // <=== add this line
    },
    vueRouterMode: "hash",
    ...
```
