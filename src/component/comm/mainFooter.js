import '../../css/footer.css';
import * as render from '../../js/util/render';
import 'semantic-ui-css/semantic.min.css'; 
import { Icon } from 'semantic-ui-react'; // Import Icon component
import { useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

const renderIcons = () => {
    return {
        "/member_block_ind/main/mainFront": [ 
            { iconName : 'shopping cart' ,  text : 'Market' , href: '#Market' } ,
            { iconName : 'inbox' ,  text : 'inbox' , href: '#inbox'} ,
            { iconName : 'user' ,  text : 'My Info' , href: '#profile'}
         ] ,
        "/member_block_ind/main/mainMemberShipDetail": [
            { iconName : 'shopping cart' ,  text : 'Market' , href: '#Market'} ,
            { iconName : 'inbox' ,  text : 'inbox' , href: '#inbox'} ,
            { iconName : 'backward' ,  text : 'back', href: '/member_block_ind/main/mainFront' }
        ]
    }
}

export default function MainBottomNavBar() {
    
    const location = useLocation();
    const currRenderIcon = renderIcons()[location.pathname];
    const isInBoxRender = currRenderIcon[1].text === 'inbox';

    return (
        <div id="bottom-nav-div">
            <nav className="bottom-nav">
                <a href={currRenderIcon[0].href} className="nav-item" onClick={render.bottomBarNavigation}>
                        <span className="icon"><Icon name={currRenderIcon[0].iconName} size='large' /></span>
                        <span className="label">{currRenderIcon[0].text}</span>
                </a>
                <a href={currRenderIcon[1].href} className="nav-item">
                        <span className="icon"><Icon name={currRenderIcon[1].iconName} size='large' /></span>
                        <span className="label">{currRenderIcon[1].text} 
                            { isInBoxRender && ( <h3><Badge bg="danger" className='newCount'>2</Badge></h3> )  }
                        </span>
                </a>
                <a href={currRenderIcon[2].href} className="nav-item" onClick={render.bottomBarNavigation}>
                        <span className="icon"><Icon name={currRenderIcon[2].iconName} size='large' /></span>
                        <span className="label">{currRenderIcon[2].text}</span>
                </a>
            </nav>
        </div>
    )
}