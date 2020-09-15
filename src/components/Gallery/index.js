import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from './PhotoList';

function Gallery({ currentCategory }) {
    const {name, description } = currentCategory;
    return(
        <section>
            <h1 className = "project-title" data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p className= "project-description-text">{description}</p>
            <PhotoList category={currentCategory.name}></PhotoList>
        </section>
    );
}

export default Gallery;