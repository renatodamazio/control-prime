import React, {useEffect, useState} from 'react';

export default function ControlNaviation() {
    const [directions, setDirections] = useState([]);

    useEffect(() => {
        const __directions = [{
            title: 'Up',
            id: 'up'
        }, {
            title: 'Left',
            id: 'left'
        }, {
            title: 'Down',
            id: 'down'
        }, {
            title: 'Right',
            id: 'right'
        }];

        setDirections(__directions);

    }, []);

    return (
        <div>
           {
               directions.map((direction) => {
                    return (
                        <button 
                            name={direction.name} 
                            id={direction.id} 
                            key={direction.id}>
                            {direction.title}
                        </button>
                    )  
               })
           }
        </div>
    )
}