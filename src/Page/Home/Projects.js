import React, { useEffect, useState } from 'react';
import enfluencer from '../../Image/Project/enfluencer.png'
import marriage from '../../Image/Project/marriage.png'
import photography from '../../Image/Project/photography.png'

const Projects = () => {
    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])

    console.log(project)
    const { name, img, description, technology, live, client, server, codeLink }


    return (
        <div className='mt-36'>
            <h1 className='text-5xl text-white text-center mb-6'>Project</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div className="card p-3 w-96 bg-base-100 shadow-xl">
                    <div class="h-96 scroll-smooth hover:scroll-auto carousel carousel-vertical rounded-box">
                        <div class="carousel-item">
                            <img src={img} className='w-full round' />
                        </div>
                    </div>

                    <div className="card-body text-center">
                        <h2 className="text-2xl font-bold">Dastiny Photo Graphy</h2>
                        <p>This is a photographer protfolio. </p>
                        <p className='text-xl'><strong>Technology :</strong> React, Firebase, Bootstrap, Javascript</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;