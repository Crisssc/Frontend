# Frontend
Frontend project (test)

Indecision App

By these two scripts:     
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
You could creat your own small React app

Babel - a JavaScript compiler can be used to compile JSX to older version of javascript the browsers could understand.
Install it in the app so that I could write the JSX instead of tedious React.createElement() call

After install babel plugin in the app by command below👇.
(base) Zhichengde-MacBook-Pro:indecision-app zhichengchen$ npm install -g babel-cli

Type the command below👇 to all it automatically compile the JSX to corresponding file that browser could understand.
(base) Zhichengde-MacBook-Pro:indecision-app zhichengchen$ babel src/app.js --out-file=public/script/app.js --presets=env,react --watch