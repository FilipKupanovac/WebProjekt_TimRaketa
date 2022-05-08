//Misc
import React from 'react';
//Components

//CSS

const MapArea = ({i, area}) => {
    //this notation for area["grid-template-columns"] is SAME as area.grid-template-columns? in Kotlin
    if(area["subareas"] !== undefined){
        console.log(area.name + "\n" + area["subareas"])
        return(
            <div key={i} id={`${area.name}`} className="map-area grid subarea-23"
                
            >
                {/* POSITION ALL DIVS WITH CORRECT GRID-AREA VALUES */}
                {area.subareas.map((area,i)=>{
                    return(
                        <div key={i} id={`${area.name}`} className="map-area"></div>
                    )
                })
                }
            </div>
        )
    }
    return(
        <div key={i} id={`${area.name}`} className="map-area"></div>
    )
}

export default MapArea;