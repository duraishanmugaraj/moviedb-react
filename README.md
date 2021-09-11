# MobieDB-ReactJS

MovieDB-ReactJS is a movie database and search engine made with ReactJS and powered by OMDB API

Checkout -> https://duraishanmugaraj.github.io/MobieDB-ReactJS/

## Features

- Discover the currently popular movies.
- Search movies using movie name in homepage.
- View movie storyline, release date , watch time , information etc. from movie pages.

## Tools Used

- [Create React App](https://create-react-app.dev/) to bootstrap the application
- [OMDB](http://www.omdbapi.com/) to fetch data from
- [React Router](https://reactrouter.com/web/guides/quick-start) to make the application routes
- [Bootstrap](https://react-icons.netlify.com/#/) for Designing the webpage

## Developer Instruction

After a fresh `git clone`, to install all node dependencies, use

```shell
npm install
```

If you do not have any key for TMDB API, get an API key and update the `API_Key` value in `src/config.js` file.

To start the development server, use

```shell
npm run start
```

To create a production build, use

```shell
npm run build
```

To deploy at `github-pages` environmet, use

```shell
npm run deploy
```
