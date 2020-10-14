# Tourino

## About this project

A Single Page Application Front-end using `Vue.js`, `Vuex`, `Vuetify`, `Axios` for the Tourino Project

### Live Demo : https://tourino.netlify.app/

### Account Demo:

Email

```
alicebui@mailinator.com
nicolehuynh@mailinator.com
mariedang@mailinator.com
```

pass: ![](https://i.imgur.com/RYL5fc9.png)

## Features

- Unique UI that I designed and coded from scratch, not using any pre-made template on the internet.
- Responsive UI (Desktop and Mobile).
- Fetch and show tours with paginations from Tourino Backend API.
- Filter tours by
  - Destinations, (multi-choice)
  - Travel Style, (multi-choice)
  - Price, (range)
  - Rating,
  - Duration
- Sort tours by
  - Price (ascending and descending order)
  - Rating
  - Reviews
  - New on Tourino
  - Duration (ascending and descending order)
- Sync the Sort and filter selections with URL
  - User can copy the URL and send to people, and they can visit that link to get the same result as User
  - User can click the back/forward button on the browser and the selections will be sync with the URL.
- Authentication & Authorization
  - Log in, sign up, reset the password.
  - If an anonymous visit the authorized link, they will be redirected to the Authentication page
- Error handling
  - When Backend API are not response
  - Display Error messages from API

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
