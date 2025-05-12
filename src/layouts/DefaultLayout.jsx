//Importazioni
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
