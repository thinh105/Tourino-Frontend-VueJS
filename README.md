![](Tourino-banner-front-end.png)

# 🎉 About this project

A Single Page Application Front-end using `Vue.js`, `Vuex`, `Vuetify`, `Axios` for the Tourino Project - A Travel Agency Website

## ⚡ Live Demo : https://tourino.netlify.app/

<br />

> **Notice:**<br /> It will take a while ( around 10-15s) to wait and fetch data when you visit my Tourino website the first time.<br />

Because I run the Tourino's backend under the free package on Heroku, my API server will sleep after 30m of inactivity.

I want to play fair and will not use some tricks to abuse their server every 29 minutes just to keep my small project from sleeping.

It's kind of a feature, not a bug! 😅 😆

## Account Demo:

Email

```
alicebui@mailinator.com
nicolehuynh@mailinator.com
mariedang@mailinator.com
```

pass: ![](https://i.imgur.com/RYL5fc9.png)

<br />

# 📚 Tech Stacks:

- Vue 2
- Vue Router
- Vuex
- Vuetify
- Axios
- Material Design Icons

<br />

# ⚡ Features

- [x] Unique Responsive UI that was designed and coded from scratch, not using any pre-made template on the internet.
- [x] Fetch and show tours with paginations from Tourino Backend API.
- [x] Fetch and show detail tour page from Tourino Backend API.
- [x] Filter tours by
  - Destinations, (multi-choice)
  - Travel Style, (multi-choice)
  - Price, (range)
  - Rating,
  - Duration
- [x] Sort tours by
  - Price (ascending and descending order)
  - Rating
  - Reviews
  - New on Tourino
  - Duration (ascending and descending order)
- [x] Sync the Sort and filter selections with URL
  - User can copy the URL and send to people, and they can visit that link to get the same result as User
  - User can click the back/forward button on the browser and the selections will be sync with the URL.
- [x] Authentication & Authorization
  - Log in, sign up, reset the password.
  - If an anonymous visit the authorized link, they will be redirected to the `Authentication` page
- [x] Error handling
  - When Backend API are not response, Display Error messages from API

<br />

## 📝 To do list

- [ ] Show list of reviews with filter/sort/pagination on the detail tour page
- [ ] Alow Users to create/edit/delete their review
- [ ] Wishlist feature - allow Users add any tour to thier wishlist by click Heart.
- [ ] User's detail page
  - [ ] show list of wishlist feature
  - [ ] show list of reviews and their corresponding tours that Users had made
- [ ] Booking Feature

<br />

# 🔃 Routing

- Home Page:

  - URL: https://tourino.netlify.app/ ✅
  - List of tours

- List of tours:

  - URL: https://tourino.netlify.app/tours ✅
  - List of tours pulled from backend with filter, sort, pagination. ✅

- Tour page:

  - URL: https://tourino.netlify.app/tour/tour-slug-here ✅
  - E.g. https://tourino.netlify.app/tour/vietnam-express-southbound-2gkam

- Authentication page: ✅

  - URL: https://tourino.netlify.app/authentication
  - Sign in / Sign up / Forget Password ✅

- User profile: 🚧
  - URL: https://tourino.netlify.app/User/Profile
  - Show basic user info ✅

<br />

# 🤝 Contributing

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

<br />

# 💓 Show your support

This is just a personal project created for study/demonstration purpose, it may or may not be a good fit for your project(s).

Please ⭐ this repository if you like it or this project helped you!\

Feel free to open issues or submit pull-requests to help me improving my work.
