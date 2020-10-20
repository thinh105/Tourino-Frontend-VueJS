![](Tourino-banner-front-end.png)

# About this project

A Single Page Application Front-end using `Vue.js`, `Vuex`, `Vuetify`, `Axios` for the Tourino Project - A Travel Agency Website

## Live Demo

## https://tourino.netlify.app/

> **Notice:**

**It will take a while ( around 10-15s) to wait and fetch data when you visit my Tourino website the first time.**

Because I run the Tourino's backend under the free package on Heroku, my API server will sleep after 30m of inactivity.

It's kind of a feature, not a bug! 😅 😆

I want to play fair and will not use some tricks to abuse their server every 30 minutes just to keep my small project from sleeping. That's not my style!

Hope you understand and continue to support me!

**Thank you for your patience!**

## Account Demo:

Email

```
alicebui@mailinator.com
nicolehuynh@mailinator.com
mariedang@mailinator.com
```

pass: ![](https://i.imgur.com/RYL5fc9.png)

# Tech Stacks:

- Vue 2
- Vue Router
- Vuex
- Vuetify
- Axios
- Material Design Icons

# Features

- Unique Responsive UI that was designed and coded from scratch, not using any pre-made template on the internet.
- Fetch and show tours with paginations from Tourino Backend API.
- Fetch and show detail tour page from Tourino Backend API.
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
  - If an anonymous visit the authorized link, they will be redirected to the `Authentication` page
- Error handling
  - When Backend API are not response
  - Display Error messages from API

# To do list

- [ ] Show list of reviews with filter/sort/pagination on the detail tour page
- [ ] Alow Users to create/edit/delete their review
- [ ] Wishlist feature - allow Users add any tour to thier wishlist by click Heart.
- [ ] User's detail page
  - [ ] show list of wishlist feature
  - [ ] show list of reviews and their corresponding tours that Users had made
- [ ] Booking Feature
