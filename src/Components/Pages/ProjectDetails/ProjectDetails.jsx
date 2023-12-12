
import { useLoaderData, useParams } from 'react-router-dom';
import Title from '../Shared/Title';

const ProjectDetails = () => {
    const projects = useLoaderData()

    const { id } = useParams()
    const idInt = parseInt(id)
    const currentProject = projects.find(project => project.id === idInt)
    console.log(projects);
    // console.log(currentProject);

    const {project_name , project_details , project_link , github_clientlink , github_serverlink , technology , completed_date , features} = currentProject
    return (
        <div className='font-poppins'>
            <Title title={project_name}></Title>
            <div>
                <h1 className='py-2 text-3xl '>Project Details</h1>
                <hr />
                <p>
                    {project_details}
                </p>
            </div>
            
        </div>
    );
};

export default ProjectDetails;