import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MemberShipStockList from './mainMemberShipStockList';
import MemberShipPurchaseRequestList from './mainMemberShipPurchaseRequestList';
import '../../css/main.css';

export default function MainFront() {

    const [key, setKey] = useState('memstocks');
    
    return (
        <div>
            <Tabs id="controlled-tab-example"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  className="mb-3" 
                  style={{ marginLeft : "0px" }}>
                  <Tab eventKey="memstocks" title="Your Memberships" className="main-tab-header-contents">
                        <MemberShipStockList />
                  </Tab>
                  <Tab eventKey="memRequests" title="Purchase Request" className="main-tab-header-contents">
                        <MemberShipPurchaseRequestList />
                  </Tab>
                  <Tab eventKey="memSellRequests" title="Selling" className="main-tab-header-contents">
                  </Tab>
            </Tabs>
        </div>
    )
}