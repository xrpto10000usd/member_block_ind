import dgiLogo from '../dgi_logo.png';
import Image from 'react-bootstrap/Image';
import { Outlet } from "react-router-dom";
import '../footer.css';

export default function Layout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <main style={{ flex: 1 }}>
            {/* Child routes render here */}
            <Outlet />
        </main>
        <div className="footer-Image">
          <Image src={dgiLogo} size='mini' /> 
        </div>
    </div>
  );
}