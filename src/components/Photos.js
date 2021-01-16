import React from "react";
import Photo from "./Photo";
import roads from "../assets/photos/roads.jpg"
import house from "../assets/photos/house.jpg"
import forest from "../assets/photos/forest.jpg"

function Photos(){
    return <div className="photos">
        <Photo image={roads} />
        <Photo image={house} />
        <Photo image={forest} />
    </div>
}

export default Photos;