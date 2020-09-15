import React, { useState } from 'react';
import Modal from '../../Modal';

const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
          name: 'Media Collector',
          category: 'projects',
          github: "https://www.github.com/masonmarinko/movie-collector",
          url: "https://media-collector-project.herokuapp.com/",
          description: 'In this project we created a way to easily store your movies and books. You also share and comment with others in the community!',
        },
        {
          name: 'Media 4U',
          category: 'projects',
          github: "https://www.github.com/zqwhiting/media4u",
          url: 'https://ZQWhiting.github.io/media4u',
          description: 'Want an easy way to search books and movies? Look no further Media 4U is here!',
        },
        {
          name: 'Run Buddy',
          category: 'projects',
          github: "https://www.github.com/masonmarinko/runbuddy",
          url: 'https://masonmarinko.github.io/runbuddy',
          description: 'Created a website for workout company "Run Buddy"',
        },
        {
          name: 'Scheduler',
          category: 'projects',
          github: "https://www.github.com/masonmarinko/scheduler",
          url: 'https://masonmarinko.github.io/scheduler',
          description: 'Create tasks based on time, this calendar will change color based on the time and whether it is on-time, past-time, or upcoming',
        },
        {
          name: 'Password Generator',
          category: 'projects',
          github: "https://www.github.com/masonmarinko/password-generator",
          url: 'https://masonmarinko.github.io/password-generator',
          description: 'After answering a few easy questions about the features of your password, this app will create a random and secure password for you!',
        },
        {
          name: 'Taskinator',
          category: 'projects',
          github: "https://www.github.com/masonmarinko/taskinator",
          url: 'https://masonmarinko.github.io/taskinator',
          description: 'Keep track of your daily tasks on this easy to use website that allows you to mark tasks as need to do, currently working on, or done!',
        },
      ]);

    
      const currentPhotos = photos.filter((photo) => photo.category === category);

      const [currentPhoto, setCurrentPhoto] = useState();

      const [isModalOpen, setIsModalOpen] = useState(false);

      const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index: i})
        setIsModalOpen(!isModalOpen);
      }

    return (
        <div>
          {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
            <div className="project-thumbnail flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                    src={require(`../../../assets/${category}/${i}.png`)}
                    alt={image.name}
                    className='img-thumbnail mx-1'
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;