import Title from "../../Shared/Title";
import htmlpic from "../../../../assets/images/logo/html.png"
import csspic from "../../../../assets/images/logo/css.png"
import tailwindpic from "../../../../assets/images/logo/tailwind.png"
import jspic from "../../../../assets/images/logo/js.png"
import reactpic from "../../../../assets/images/logo/react.png"
import nodepic from "../../../../assets/images/logo/node.png"
import nextpic from "../../../../assets/images/logo/next.png"
import mongopic from "../../../../assets/images/logo/mongodb.png"

const TeachIKnow = () => {
    return (
        <div> 
            <Title title={'Technology I Use'}></Title>
            <div className="border-4 border-black gap-5 px-4 py-3 grid grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
                <div className=" border-4 border-black w-auto flex justify-center" >
                    <img className="h-28"  src={htmlpic} alt="" />
                </div>
                <div className="border-4 border-black w-auto flex justify-center">
                    <img className="h-24" src={csspic} alt="" />
                </div>
                <div className="border-4 border-black w-auto flex justify-center">
                    <img className="h-24" src={tailwindpic} alt="" />
                </div>
                <div className="border-4 border-black w-auto flex justify-center">
                    <img className="h-24" src={jspic} alt="" />
                </div>
                <div className="border-4 border-black w-auto flex justify-center">
                    <img className="h-24" src={reactpic} alt="" />
                </div>
                <div className="border-4 border-black w-auto flex justify-center">
                    <img className="h-24" src={nodepic} alt="" />
                </div>
                <div className="border-4 border-black w-auto flex justify-center" >
                    <img className="h-24" src={nextpic} alt="" />
                </div>
                <div className="border-4 border-black w-auto flex justify-center">
                    <img className="h-24" src={mongopic} alt="" />
                </div>
            </div>

        </div>
    );
};

export default TeachIKnow;