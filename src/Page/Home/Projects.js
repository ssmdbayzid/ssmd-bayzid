import React, { useEffect, useState } from 'react';
import enfluencer from '../../Image/Project/enfluencer.png'
import marriage from '../../Image/Project/marriage.png'
import photography from '../../Image/Project/photography.png'

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('https://bayzid-developer.herokuapp.com/protfolio')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    console.log(projects[0]?.img)
    // const [ name, img, description, technology, live, client, server, codeLink ] = project;


    return (
        <div className='mt-36'>
            <h1 className='text-5xl text-white text-center mb-6'>Projects</h1>

            <div className='grid grid-cols-1 my-12 w-3/4 mx-auto gap-16 lg:grid-cols-2'>
                {
                    projects && projects.map(project =>
                        <div className="card  p-3 w-full bg-[#212129] shadow-xl">
                            <img src={project.img} className='w-full h-[500px] round' alt='' />

                            <div className="card-body text-white text-center">
                                <h2 className="text-2xl font-bold">{project.name}</h2>
                                <p className='text-xl'><strong>Technology :</strong> {project.technology}</p>
                                <a href={project.live} target='_blank'><button className=" w-full btn glass text-white">Live</button></a>
                                <div>
                                    
                                    {project.client?
                                    <button className="btn btn-sm m-3 btn-outline btn-primary"><a className='w-full' href={project.client} target='_blank'>Client Side Code</a></button>
                                    :
                                    <button className="btn btn-sm m-3 btn-outline btn-primary"><a className='w-full' href={project.codeLink} target='_blank'>Git Code</a></button>
                                    
                                }
                                   { project?.client && <button className="btn btn-sm m-3 btn-outline btn-secondary"><a className='w-full' href={project.server} target='_blank'>Server Side Code</a></button>}
                                </div>
                                <a href={`/project/${project?._id}`} ><button className=" w-full btn bg-pink-500 hover:bg-pink-700 text-white">Details</button></a>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Projects;