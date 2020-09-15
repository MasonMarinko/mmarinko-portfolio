import React from 'react';

function Modal({onClose, currentPhoto}) {
    const {name, url, github, category, description, index} = currentPhoto;
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">Project Name: {name}</h3>
          <img className="modal-image" src={require(`../../assets/${category}/${index}.png`)} alt="current category" />
          <p className="description-header">Description:</p>
          <p className='description-text'>{description}</p>
          <div className='website-button flex-row'>
          <button className=" close-button" href={url} target="_blank">View Website</button>
          <button className="close-button" href={github} target="_blank">View Github</button>
          </div>
          <br/>
          <div className='close-button flex-row'>
                <button onClick={onClose} type="button">
                    Close
                </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;