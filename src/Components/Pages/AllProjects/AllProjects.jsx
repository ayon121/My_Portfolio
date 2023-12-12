import { useState } from "react";
import Title from "../Shared/Title";
import AllProject from "./AllProject";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const AllProjects = () => {
    const [projects , SetProjects] = useState([])
    fetch('/public/projects.json')
    .then(res => res.json())
    .then(data => SetProjects(data))
    return (
        <div>
            <Navbar></Navbar>
            <Title title={"Latest Projects"}></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-3 gap-5 mb-6">
                {
                    projects.map(project => <AllProject key={project.id} project={project}></AllProject>)
                }
            </div>
            <Footer></Footer>

        </div>
    );
};

export default AllProjects;