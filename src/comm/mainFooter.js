import { Outlet } from "react-router-dom";
import '../footer.css';

export default function MainFooterLayout() {
  return (
    <div>
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
        </div>
        <div>
            <nav class="bottom-nav">
                <a href="#home" class="nav-item">
                    <span class="icon">🏠</span>
                    <span class="label">Market</span>
                </a>
                <a href="#search" class="nav-item">
                    <span class="icon">🔍</span>
                    <span class="label">Search</span>
                </a>
                <a href="#profile" class="nav-item">
                    <span class="icon">👤</span>
                    <span class="label">Profile</span>
                </a>
            </nav>
        </div>
    </div>
        
  );
}
