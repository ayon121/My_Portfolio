import Title from "../../Shared/Title";
import MyService from "./MyService";


const MyServices = () => {
    return (
        <div>
            <Title title={'My Services'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-3 gap-5 mb-6">
                <MyService service={'Personal Website'} details={'I will make awesome personal website for you.'}></MyService>
                <MyService service={'Bussiness Website'} details={'I will make professional bussiness website for you.'}></MyService>
                <MyService service={'Sass Website'} details={'I will make online tools & service website for you.'}></MyService>
            </div>
        </div>
    );
};

export default MyServices;