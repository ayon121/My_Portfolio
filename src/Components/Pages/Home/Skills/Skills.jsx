import Title from "../../Shared/Title";


const Skills = () => {
    return (
        <div>
            <Title title={'My Skills'}></Title>
            <div className="max-w-6xl mx-auto px-3">
                <div className="text-center flex items-center gap-2 justify-center">
                    <h1 className="text-2xl">HTML</h1>
                    <progress className="progress progress-error w-3/4" value={90} max="100"></progress>
                </div>
                <div className="text-center flex items-center gap-2 justify-center">
                    <h1 className="text-2xl">Css</h1>
                    <progress className="progress progress-error w-3/4 justify-center" value={80} max="100"></progress>
                </div>
                <div className="text-center flex items-center gap-2 justify-center">
                    <h1 className="text-2xl">Tailwind</h1>
                    <progress className="progress progress-error w-3/4 justify-center" value={80} max="100"></progress>
                </div>
                <div className="text-center flex items-center gap-2 justify-center">
                    <h1 className="text-2xl">React</h1>
                    <progress className="progress progress-error w-3/4 justify-center" value={60} max="100"></progress>
                </div>
                <div className="text-center flex items-center gap-2 justify-center">
                    <h1 className="text-2xl">Node</h1>
                    <progress className="progress progress-error w-3/4" value={40} max="100"></progress>
                </div>
            </div>   
        </div>
    );
};

export default Skills;