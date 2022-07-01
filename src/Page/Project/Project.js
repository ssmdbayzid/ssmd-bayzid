import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'tw-elements';

const Project = () => {

  const { id } = useParams()
  const [project, setProject] = useState([])


  useEffect(() => {
    fetch(`https://bayzid-developer.herokuapp.com/protfolio/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => setProject(data))
  }, [])

  console.log(id)


  return (<div className='grid  h-screen justify-center items-center gap-6 grid-cols-1 lg:grid-cols-2'>

    <div className=''>

      <div id="carouselExampleControls" className="carousel ml-5 slide relative" data-bs-ride="carousel">
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={project.slide1}
              className="block w-full h-[385px]"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={project.slide2}
              className="block w-full h-[385px]"
              alt="Camera"
            />
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={project.slide3}
              className="block w-full h-[385px]"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


    {/* <div className='grid grid-cols-1 my-12 mx-auto gap-16 lg:grid-cols-2'> */}
    <div className=''>
      {/* <img src={project.img} className='w-full round' alt='' /> */}

      <div className="card  p-3 w-[500px]  bg-[#212129] shadow-xl">
        {/* <div className="h-96 scroll-smooth hover:scroll-auto carousel carousel-vertical rounded-box">
            <div className="carousel-item">
              <img src={project.img} className='w-full round' alt='' />
            </div>
          </div> */}

        <div className="card-body text-white text-center">
          <h2 className="text-2xl font-bold">{project.name}</h2>
          <p>{project.description}</p>
          <p className='text-xl'><strong>Technology :</strong> {project.technology}</p>
          <a href={project.live} target='_blank'><button className=" w-full btn glass text-white">Live</button></a>
          <div>

            {project.client ?
              <button className="btn btn-sm m-3 btn-outline btn-primary"><a className='w-full' href={project.client} target='_blank'>Client Side Code</a></button>
              :
              <button className="btn btn-sm m-3 btn-outline btn-primary"><a className='w-full' href={project.codeLink} target='_blank'>Git Code</a></button>

            }
            {project?.client && <button className="btn btn-sm m-3 btn-outline btn-secondary"><a className='w-full' href={project.server} target='_blank'>Server Side Code</a></button>}
          </div>

        </div>
      </div>
    </div>

  </div >

  );
};

export default Project;

