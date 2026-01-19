import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  LoginFront from './comm/loginFront.js';
import  Layout from './comm/layout.js';
import  MainFront from './main/mainFront.js';
import  MainFooterLayout from './comm/mainFooter.js';
import * as auth from './util/auth';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


function App() {
  return (
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />} >
              {/* Matches /comm/anything, /comm/a/b/c, etc. */}
                <Route path="/comm/loginFront" element={<LoginFront />} action={auth.loginAction} />
                <Route path="/" element={<LoginFront />} action={auth.loginAction} />
              </Route>
              <Route element={<MainFooterLayout />}>
                <Route path="/main/mainFront" element={<MainFront />} />
              </Route>
            </Routes>
          </BrowserRouter>
  );
}


export default App;
