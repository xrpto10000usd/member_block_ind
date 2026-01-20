import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import  LoginFront from './comm/loginFront.js';
import  LoginLayout from './comm/loginLayout.js';
import  MainFront from './main/mainFront.js';
import  MainLayout from './comm/mainLayout.js';
import * as auth from './util/auth.js';

function memberBlockRouter() {
  return (
          <BrowserRouter>
            <Routes>
              <Route element={<LoginLayout />} >
              {/* Matches /comm/anything, /comm/a/b/c, etc. */}
                <Route path="/comm/loginFront" element={<LoginFront />} action={auth.loginAction} />
                <Route path="/" element={<Navigate to="/comm/loginFront" replace />} />
              </Route>
              <Route element={<MainLayout />}>
                <Route path="/main/mainFront" element={<MainFront />} />
              </Route>
            </Routes>
          </BrowserRouter>
  );
}

export default memberBlockRouter;
