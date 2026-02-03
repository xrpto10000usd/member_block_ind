import { BrowserRouter , Routes, Route , Navigate } from 'react-router-dom';
import  LoginFront from './component/comm/loginFront.js';
import  LoginLayout from './component/comm/loginLayout.js';
import  MainFront from './component/main/mainFront.js';
import  MainMemberShipDetail from './component/main/mainMemberShipDetail.js';
import  MainLayout from './component/comm/mainLayout.js';
import  MainSearchResult from './component/main/mainMemberShipSearchResult.js';
import * as auth from './js/util/auth.js';

function memberBlockRouter() {
  return (
          <BrowserRouter>
            <Routes>
              <Route element={<LoginLayout />} >
              {/* Matches /comm/anything, /comm/a/b/c, etc. */}
                <Route path="/member_block_ind/comm/loginFront" element={<LoginFront />} action={auth.loginAction} />
                <Route path="/member_block_ind" element={<Navigate to="/member_block_ind/comm/loginFront" replace />} />
              </Route>
              <Route element={<MainLayout />}>
                <Route path="/member_block_ind/main/mainFront" element={<MainFront />} />
                <Route path="/member_block_ind/main/mainSearchResult" element={<MainSearchResult />} />
                <Route path="/member_block_ind/main/mainMemberShipDetail" element={<MainMemberShipDetail />} />
              </Route>
            </Routes>
          </BrowserRouter>
  );
}

export default memberBlockRouter;