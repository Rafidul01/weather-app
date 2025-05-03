import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import bgImage from "../../public/bgImg.jpg";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm scale-110 
                   brightness-100 dark:brightness-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      
      <div className="relative z-10">
        <NavBar />
        <div className="min-h-[calc(100vh-250px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
