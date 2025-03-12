import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function MainLayout() {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "white" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
