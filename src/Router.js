import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import  LoginFront from './component/comm/loginFront.js';
import  LoginLayout from './component/comm/loginLayout.js';
import  MainFront from './component/main/mainFront.js';
import  MainLayout from './component/comm/mainLayout.js';
import * as auth from './js/util/auth.js';

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
                <Route path="/main/marketFront" element={<MainFront />} />
              </Route>
            </Routes>
          </BrowserRouter>
  );
}

export default memberBlockRouter;
