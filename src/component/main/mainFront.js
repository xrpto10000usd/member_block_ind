import { useDispatch, useSelector } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MemberShipStockList from './mainMemberShipStockList';
import MemberShipPurchaseRequestList from './mainMemberShipPurchaseRequestList';
import MemberShipSellRequestList from './mainMemberShipSellRequestList';
import '../../css/main.css';

export default function MainFront() {
    const dispatch = useDispatch();
    const key = useSelector(state => state.mainTabKey);
    return (
        <div>
            <Tabs id="main_tab_control"
                  activeKey={key}
                  onSelect={(k) => dispatch({ type: 'SET_MAINTAB_KEY', payload: k })}
                  className="mb-3"
                  style={{ marginLeft : "0px" }}>
                  <Tab eventKey="memstocks" title="I HAVE" className="main-tab-header-contents">
                        <MemberShipStockList />
                  </Tab>
                  <Tab eventKey="memRequests" title="I WANT" className="main-tab-header-contents">
                        <MemberShipPurchaseRequestList />
                  </Tab>
                  <Tab eventKey="memSellRequests" title="I SELL" className="main-tab-header-contents">
                        <MemberShipSellRequestList />
                  </Tab>
            </Tabs>
        </div>
    );
}