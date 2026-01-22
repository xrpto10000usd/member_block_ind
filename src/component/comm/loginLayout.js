import Image from 'react-bootstrap/Image';
import { Outlet } from "react-router-dom";
import '../../css/footer.css';

export default function LoginLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <main style={{ flex: 1 }}>
            {/* Child routes render here */}
            <Outlet />
        </main>
        <div className="footer-Image">
          <Image src='/images/dgi_logo.png' size='mini' /> 
        </div>
    </div>
  );
}