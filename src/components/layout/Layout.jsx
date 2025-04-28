import { Link, Outlet } from "react-router-dom";
import { Footer, Header, Nav, Wrapper } from "./Layout_styled";

export default function Layout() {
  return (
    <Wrapper>
      <Header>
        <h1>Helpers Project</h1>
        <Nav>
          <Link to="/">Головна</Link>
          <Link to="/about">Про нас</Link>
          <Link to="/contact">Контакти</Link>
        </Nav>
      </Header>

      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>

      <Footer>© {new Date().getFullYear()} Helpers Project</Footer>
    </Wrapper>
  );
}
