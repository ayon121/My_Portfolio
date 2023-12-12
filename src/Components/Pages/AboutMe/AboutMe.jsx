
import Title from '../Shared/Title';
import Navbar from '../Shared/Navbar';
import mpic from '../../../assets/images/mypic.jpg'
const AboutMe = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Title title={'About Me'}></Title>
            <div className='flex flex-col justify-center items-center font-poppins max-w-5xl mx-auto'>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={mpic} />
                    </div>
                </div>
                <h1 className='text-3xl md:text-4xl mt-2'>Ayon Saha</h1>
                <p className='w-3/4 text-center mt-2'>I am a web developer. I always try to turn creative ideas into responsive and user-friendly websites. My goal is to be an expert developer.</p>
                <p className='w-3/4 text-center mt-2'>Education : Bsc in Psychology(2021-present)</p>
                <div className='flex gap-2 mt-2 mb-2'>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60" />
                    <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="60" height="60" />
                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="60" height="60" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="60" height="60" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="60" height="60" />
                </div>
                <a href="https://drive.google.com/file/d/1C-vJosdSAjaC8i-u_GbmEY0mrgTmZ6WA/view?usp=drivesdk" target="blank"><button className="btn">Download CV</button></a>
            </div>


        </div>
    );
};

export default AboutMe;