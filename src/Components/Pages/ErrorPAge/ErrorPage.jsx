
import { GiTechnoHeart } from "react-icons/gi";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
const ErrorPage = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="h-screen flex justify-center items-center font-inter text-[#FF444A] px-4">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl flex justify-center mb-2"><GiTechnoHeart></GiTechnoHeart></h1>
                    <h1 className="text-4xl md:text-5xl font-bold">404</h1>
                    <p className="text-2xl md:text-3xl">Sorry! Somethings is Wrong</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;