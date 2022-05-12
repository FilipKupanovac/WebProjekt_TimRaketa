//Misc
import React from 'react';
//Components
import InTownArea from './InTownArea';

//CSS

const MapArea = ({i, area}) => {
    //this notation for area["grid-template-columns"] is SAME as area.grid-template-columns? in Kotlin
    if(area["subareas"] !== undefined){
        return(
            <div key={i} id={`${area.name}`} className="map-area"
                
            >
                {area.subareas.map((area,i)=>{
                    return(
                        <div key={i} id={`${area.name}`} className="map-area">
                            {area["in-town"] !== undefined
                            ? <InTownArea/> : <></>}
                        </div>
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