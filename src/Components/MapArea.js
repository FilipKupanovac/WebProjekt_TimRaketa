//Misc
import React from 'react';
//Components

//CSS

const MapArea = ({ i, area, setLocationOnHover, getAreaInfo }) => {
    //this notation for area["subareas"] checks if there is key "subareas" in area (line 21)
    return (
        <div key={i} id={`${area.name}`} className="map-area"
            onMouseEnter={() => {
                setLocationOnHover(area.location);
            }
            }
            onMouseLeave={() => {
                setLocationOnHover(undefined);
            }
            }
            onClick={() => {
                getAreaInfo()
            }}
        >
            {
                area["subareas"] !== undefined //LINE 21

                    ? <>
                        {area.subareas.map((subarea, i) => {
                            return (
                                <div key={i} id={`${subarea.name}`} className="map-area"
                                    onMouseEnter={() => {
                                        setLocationOnHover(subarea.location);
                                    }
                                    }
                                    onMouseLeave={() => {
                                        setLocationOnHover(area.location);
                                    }
                                    }
                                    onClick={() => {
                                        getAreaInfo()
                                    }}
                                >
                                    {subarea["in-town"] !== undefined
                                        ? <div className="in-town"></div>
                                        : <></>}
                                </div>
                            )
                        })
                        }
                    </>

                    : <></>
            }
        </div>
    )
}

export default MapArea;