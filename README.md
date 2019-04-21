## :pencil: log it!

> An online logging app bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Built with [styled-components](https://www.styled-components.com) and utilizes CSS grid. Deployed with Heroku.

Check it out [here](https://log-it-react.herokuapp.com/, 'log it!')!

#### :computer: Installation

1. Clone the repository

   ```bash
    git clone https://github.com/mariebawanan/log-it.git
   ```

1. Obtain your own Firebase config object and edit **config.js**

   ```javascript
   export const API_KEY = '';
   export const AUTH_DOMAIN = '';
   export const DATABASE_URL = '';
   export const PROJECT_ID = '';
   export const STORAGE_BUCKET = '';
   export const MESSAGING_SENDER_ID = '';
   ```

1. Install the dependencies

   ```bash
    npm install
   ```

1. Launch the app

   ```bash
    npm run start
   ```

1. Enjoy!
   ```bash
    http://localhost:3000/
   ```

---

#### :globe_with_meridians: Deploying to [Heroku](https://www.heroku.com/)

This is a [comprehensive tutorial](https://medium.com/jeremy-gottfrieds-tech-blog/tutorial-how-to-deploy-a-production-react-app-to-heroku-c4831dfcfa08) that I followed in deploying this web app to Heroku. But instead of `yarn`, I used `npm` for consistency.
