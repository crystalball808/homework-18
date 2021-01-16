import React from 'react';

function Photo({image}){
    return <div className="photo-wrapper" >
        <img className="photo" src={image} alt="photo"/>
    </div>
}
export default Photo;