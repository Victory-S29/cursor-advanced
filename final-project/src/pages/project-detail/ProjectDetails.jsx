import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import "./ProjectDetails.css"
import text from '../../text';
const ProjectDetails = () => {
    const { projectId } = useParams();
    const language = useSelector((state) => state.lang.lang);
    const project = useSelector((state) => state.projects.projects[language][projectId - 1]);

    return (
        <div className='project-page'>
            <h1 className='project-title'>
                {project.name}
            </h1>
            <p className='project-description'>
                {project.projectDescription}
            </p>
            <table>

                {project.technologies.map(technology => {
                    const parts = technology.split(":");
                    const name = parts[0].trim();
                    const description = parts[1].trim();
                    return (
                        <tr>
                            <td className='project-description--title'>{name}</td>
                            <td className='project-technologies'>{description}</td>
                        </tr>
                    );
                })}
            </table>
            <div className='gallery-section'>
                {project.gallery.map(image => {
                    console.log("image", image)
                    return (
                        <img className="project-image" src={image} alt="project screenshot" />
                    );
                })}
            </div>
            <div className='link-section'>
                <Link to='/' className="GoBack">{text[language].btnText}</Link>
            </div>
        </div>
    );
};

export default ProjectDetails;