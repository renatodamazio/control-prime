import React, {useEffect, useState} from 'react';
import { MainControl } from './ControlNaviationStyles';

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
        <MainControl>
            <button className="select-option">Select</button>
           {
               directions.map((direction) => {
                    return (
                        <button
                            className={direction.id} 
                            name={direction.name} 
                            id={direction.id} 
                            key={direction.id}>
                            {direction.title}
                        </button>
                    )  
               })
           }
        </MainControl>
    )
}