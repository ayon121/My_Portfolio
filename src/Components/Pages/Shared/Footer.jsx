import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#231f20] border-t-4 border-double border-[#FF444A]  text-neutral-content font-poppins">
            <aside>
                <h1 className="text-white text-3xl md:text-5xl border-y-2 rounded-md py-1"><span className="text-4xl md:text-6xl text-[#FF444A]">A</span><span className="">S</span></h1>
                <p>BARSHON SAHA AYON<br />Reliable Web Developer</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4 items-center text-[#FF444A]">
                    <a className="text-4xl " href="https://www.linkedin.com/in/ayon-saha/" target="blank"><CiLinkedin /></a>
                    <a className="text-3xl" href="https://web.facebook.com/ayonsaha.ayon.794?_rdc=1&_rdr" target="blank"><FaFacebookSquare /></a>
                    <a className="text-3xl" href="https://github.com/ayon121" target="blank"><FaGithubSquare /></a>
                    
                </div>
            </nav>
        </footer>
    );
};

export default Footer;