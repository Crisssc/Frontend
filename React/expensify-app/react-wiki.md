# The Route Part has problem, switch to expensify-app-fromcli

# Budget App

[Tutorial source code](https://github.com/andrewjmead/react-course-2-expensify-app)

[Tutorial app](https://budget-app.mead.io/)

## React-Router

Server-side routing (traditional)

- request page -> server -> render server HTML

Client-side routing (modern)

- faster
- client watch for URL changes -> do something (1. Find matching component. 2. Render with JS function call)

## React-Router

install: npm add react-router-dom@4.2.2

{BrowserRouter}: for creating a new router. {Route}: for every single page.

Notice: if react is the server side loading, it will get 404 for nevigate to the other pages, because the server cannot find resource in '/create'. **So**, we need to send back to index.html for all routes and let react-router determines what could show in the screen. So we need to **add attribute in devServer in webpack.config.js: `historyApiFallback:true`**. It tell the server we gonna handle the routing in client side code.

Route:

- path
- component
- exact
- `<Link to="/">Go home</Link>` here could prevent the whole page's refresh

parse query strings and params with react-router
