//Importazioni
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Loader from "../components/Loader";

function DefaultLayout() {
  const { isLoading } = useContext(GlobalContext);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-6">
          <Outlet />
        </main>
        {isLoading && <Loader />}
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
