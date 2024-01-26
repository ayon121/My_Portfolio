
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Title from '../Shared/Title';
import Navbar from '../Shared/Navbar';

const ProjectDetails = () => {
    const projects = useLoaderData()

    const { id } = useParams()
    const idInt = parseInt(id)
    const currentProject = projects.find(project => project.id === idInt)
    console.log(projects);
    // console.log(currentProject);

    const { project_name,project_img2,project_img1,project_img3,project_img5, project_details, project_link, github_clientlink, github_serverlink, technology, completed_date, features } = currentProject
    return (
        <div className='font-poppins  '>
            <Navbar></Navbar>
            <Title title={project_name}></Title>
            <div className='max-w-5xl mx-auto px-3'>
                {/* slider */}
                <div className="carousel w-full border-4 h-screen mb-4 rounded-2xl border-[#FF444A] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={project_img5} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle bg-[#FF444A]">❮</a>
                            <a href="#slide2" className="btn btn-circle bg-[#FF444A]">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={project_img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle bg-[#FF444A]">❮</a>
                            <a href="#slide3" className="btn btn-circle bg-[#FF444A]">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={project_img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle bg-[#FF444A]">❮</a>
                            <a href="#slide4" className="btn btn-circle bg-[#FF444A]">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={project_img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle bg-[#FF444A]">❮</a>
                            <a href="#slide1" className="btn btn-circle bg-[#FF444A]">❯</a>
                        </div>
                    </div>

                </div>
                <div className='mb-5 mt-2'>
                    <h1 className='text-3xl pb-2 pt-2'>Project Details</h1>
                    <p>{project_details}.</p>
                </div>
                <div className='mb-5 mt-2 '>
                    <h1><b>Technologies Used :</b> {technology}</h1>
                    <h1><b>Features:</b> {features}</h1>
                    <h1><b>Completed:</b> {completed_date}</h1>
                </div>
                <div className='mb-5 mt-2 flex gap-3'>
                    {
                       project_link && <a href={project_link}><div className="badge badge-secondary badge-outline">Live Link</div></a>
                    }
                    {
                       github_clientlink && <a href={github_clientlink}><div className="badge badge-secondary badge-outline">GitHub ClientSide</div></a>
                    }
                    {
                        github_serverlink && <a href={ github_serverlink}><div className="badge badge-secondary badge-outline">GitHub ServerSide</div></a>
                    }
                </div>
                <Link to="/contact"><a className="btn btn-sm sm:btn-sm md:btn-md mb-5">Contact Me To Know More</a></Link>        
            </div>

        </div>
    );
};

export default ProjectDetails;