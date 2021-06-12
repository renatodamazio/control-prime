import React, {useEffect, useState} from 'react';
import { MainControl } from './ControlNaviationStyles';

export default function ControlNaviation({ socket }) {
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

    const sendCommand = (command) => {
        socket.emit('bus-event', {
            type: 'direction',
            value: command
        })
    };

    return (
        <MainControl>
            <button className="select-option" onClick={() => { sendCommand('select')}}>Select</button>
           {
               directions.map((direction) => {
                    return (
                        <button
                            onClick={() => { sendCommand(direction.id)}}
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