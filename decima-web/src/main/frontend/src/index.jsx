import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Register from "./routes/registration";
import NotFound from "./routes/notfound";
import Login from "./routes/login";
import Greeting from "./routes/greeting";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<App />}>
                <Route path={"/register"} element={<Register />}/>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/greeting"} element={<Greeting />}/>
                <Route path={"*"} element={<NotFound />}/>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
