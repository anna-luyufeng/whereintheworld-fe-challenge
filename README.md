# Where in the world? - Cabital Front End Challenge

Online demo: https://cabital-fe-challenge.vercel.app/

## About the challenge 

Read more details in [challenge description](./challenge-doc/README.md).

## Project setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Add `.nvmrc` to specify the Node version. (ref: https://github.com/nvm-sh/nvm#nvmrc)
- Use components and icons from [Material-UI](https://next--material-ui-docs.netlify.app/zh/).
- Use [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to lint code before commit.
- Use [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) to write Redux and RTK Query for data fetching.
- Deploy by [Vercel](https://vercel.com/dashboard).

### Run project on local

```bash
# install dependencies
npm install

# runs the app in development mode. open http://localhost:3000 to view it in the browser.
npm start

# build for development
npm run build
```

## Project structure

- `components`: shared components, basic layout component
- `constants`: values not from API, like region list for filter options
- `hooks`: custom hooks which can be used in different components
- `pages`: the "views" users can access, in this project we have homepage, country detail page and not found page
- `reduxModules`: redux store and RTK query configuration
- `styles`: split style configurations in different stylesheet like colors, fonts, breakpoints, etc.

## Feature checklist

- [x] See all countries from the API on the homepage
- [x] Search for a country using an `input` field
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page
- [x] Click through to the border countries on the detail page
- [x] Toggle the color scheme between light and dark mode *(optional, but nice to have)*
- [x] Use React Hook

### More than checklist...

- Display **skeleton** during the data fetching for a better user expierence.
- **Inifinte scrolling** to load countries.
- Display **not found message** when there's no match in the search name and region. 
- Display the **back to top button** for user can scroll back up quicky both on laptop and mobile devices.
- Display **not found page** if users enter the invalid URLs.
- **Save users color schema preference** prevent resetting after refreshing the page.
- Display `-` for empty field instead of leaving it the blank.
- Display the error message for invalid country code.

### 
