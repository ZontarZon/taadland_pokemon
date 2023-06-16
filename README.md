<p align="center">
  <img src="https://user-images.githubusercontent.com/26466516/169722691-77a6ca86-df54-4a0e-b952-48c3f3ed7526.png" alt="Gatsby TypeScript Starter">
</p>

<br />

<div align="center"><strong>Toto's PokeDex</strong></div>
<div align="center">A TypeScript/Gatsby PWA for looking up pokemon info.</div>

<br />

<div align="center">
  <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&style=flat-square&color=5e17eb&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/github/license/jpedroschmitz/gatsby-starter-ts?style=flat-square&color=5e17eb&labelColor=000000">

  <a href="https://twitter.com/intent/follow?screen_name=jpedroschmitz">
    <img src="https://img.shields.io/twitter/follow/jpedroschmitz?style=flat-square&color=5e17eb&labelColor=000000" alt="Follow @jpedroschmitz" />
  </a>
</div>

<div align="center">
  <sub>The base starter kit was created by <a href="https://twitter.com/jpedroschmitz">João Pedro</a> with the help of many <a href="https://github.com/jpedroschmitz/gatsby-starter-ts/graphs/contributors">wonderful contributors</a>.</sub>
</div>

<br />

## Features

- ⚡️ Gatsby 5
- ⚛️ React 18
- ⛑ TypeScript
- 🐐 Tests — Vitest and Testing Library out of the box
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix

### Requirements

- Node.js >= 18
- npm 7

### Running the app

To start the project locally, cd into the directory and run:

```bash
npm start
```

Open `http://localhost:8000` with your browser to see the result.

To view this project on your mobile device, run this while the project is
running locally:

```bash
ifconfig
```

In the list, find your network's public broadcast (192.168.1.xxx) and visit
192.168.1.xxx:8000 on your mobile device.

### Directory Structure

- [`__helpers__`](./__helpers__/) — Helpers files for testing configuration.<br>
- [`__mocks__`](./__mocks__/) — Mocks for testing.<br>
- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `npm start` — Starts the application in development mode at `http://localhost:8000`.
- `npm build` — Compile your application and make it ready for deployment.
- `npm serve` — Serve the production build of your site
- `npm clean` — Wipe out the cache (`.cache` folder).
- `npm type-check` — Validate code using TypeScript compiler.
- `npm lint` — Runs ESLint for all files in the `src` directory.
- `npm format` — Runs Prettier for all files in the `src` directory.
- `npm test` — Run tests with Vitest.
- `npm run test:watch` — Run tests on watch mode.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
