
import Title from "../Shared/Title";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

import AllProject from "./AllProject";

const AllProjects = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title={"All Projects"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-3 gap-5 mb-6">
                <AllProject project_name={"Tech Vibe"} project_details={"This latest tech product promoting website. In this website users can post new tech products and affiliate link. Modaretor can review post , admin can see site statisitics. Anyone can buy productsand give review of them."} project_img={"../../../../public/tech-product.png"}></AllProject>
                <AllProject project_name={"Hotel Management"} project_details={"This a hotel management website. This website is for hotel owners. Here hotel owners can show what type of rooms are available and how many rooms are available. User can see room details and can book room of their choice on the available date."} project_img={"../../../../public/hotel-management.png"}></AllProject>
                <AllProject project_name={"Glamgy"} project_details={"It a webisite for brands. Here famous brands can post there porducts and users can buy them.It also has a dark mood version.There is also an advertisement section for brands"} project_img={"../../../../public/brand-shop.png"}></AllProject>
                <AllProject project_name={"Donation Campaign Website"} project_details={"This a simple donation campaign responsive website for collecting donation for different purpose. Visitor can search for donation sectors and donate on them. There is a statistic chart where visitor can see how much they have donated"} project_img={"../../../../public/donationcampaign.png"} livelink={'https://ugly-straw.surge.sh'} project_git={'https://github.com/ayon121/Donation_Campaign_Website_React.git'}></AllProject>
                <AllProject project_name={"Event Management Website"} project_details={"This a social event management website. I made this for any event management agency. There are many kinds of event. Only logged in user can see event details. There is also offers for VIP user. There is also a contact form. This website has animation and fantastic UI"} project_img={"../../../../public/eventmakers.png"} livelink={'https://social-event-manager.web.app'} project_git={'https://github.com/ayon121/Event_management_Website_React.git'}></AllProject>
                <AllProject project_name={"Gamer Zone"} project_details={"This is gamer zone landing page. It is specially made for gamers. This website has fantastic UI. This is made with html & css"} project_img={"../../../../public/Gamer-Zone.png"} livelink={'https://ayon121.github.io/B8A2-Gamer-Zone'} project_git={'https://github.com/ayon121/B8A2-Gamer-Zone.git'}></AllProject>
                <AllProject project_name={"Fruit Burst with Tailwind"} project_details={"This is fruits selling landing page website. This is a responsive design. It is made with only html & tailwindcss. There is 5 sections in the landing page."} project_img={"../../../../public/fruit-brust.png"} livelink={'https://ayon121.github.io/B8A3-fruit-brust'} project_git={'https://github.com/ayon121/B8A3-fruit-brust.git'}></AllProject>
                <AllProject project_name={"Tea House With Tailwind"} project_details={"This is tea house landing page website. This is a responsive design. It is made with only html & tailwindcss. There is 6 sections in the landing page."} project_img={"../../../../public/tea-house-website-with-tailwind.png"} livelink={'https://ayon121.github.io/tea-house-website-with-tailwind'} project_git={'https://github.com/ayon121/tea-house-website-with-tailwind.git'}></AllProject>
                <AllProject project_name={"Biker Zone"} project_details={"This is bike purcasing  website. This is a responsive design. It is made with only html & tailwindcss. There is 6 sections in the landing page."} project_img={"../../../../public/bikerzone.png"} livelink={'https://ayon121.github.io/biker-zone-website'} project_git={'https://github.com/ayon121/biker-zone-website.git'}></AllProject>
                <AllProject project_name={"Geomatry Project Website"} project_details={"It is simple html , css & javascript project. Here you can do simple geomatry calculations. Most beautifull thing is that this website is fully responsive"} project_img={"../../../../public/geomatry.png"} livelink={'https://ayon121.github.io/geomatry_project'} project_git={'https://github.com/ayon121/geomatry_project.git'}></AllProject>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AllProjects;