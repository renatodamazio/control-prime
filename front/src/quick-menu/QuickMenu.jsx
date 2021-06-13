import React, {useEffect, useState} from 'react';

export default function QuickMenu({ socket }) {
    const [navigations, setNavigations] = useState([]);

    useEffect(() => {
        const options = [{
            title: 'Home',
            id: 'home',
            active: true,
        }, {
            title: 'Close',
            id: 'close',
            active: true
        }, {
            title: 'Play',
            id: 'play',
            active: true,
        }, {
            title: 'Pause',
            id: 'pause',
            active: true
        }, {
            title: 'Pause',
            id: 'pause',
            active: false
        }];

        setNavigations(options);
    }, []);

    const sendCommand = (command) => {
        socket.emit('bus-event', {
            type: 'video-control',
            value: command
        })
    };

    return (
        <div>
            {
                navigations.map((navigation) => {
                    {
                        return (
                            navigation.active ? 
                            (
                                <button 
                                    onClick={() => sendCommand(navigation.id)}
                                    id={navigation.id} 
                                    key={navigation.id}>
                                    {navigation.title}
                                </button>
                            ): ''
                        )
                    }
                })
            }
        </div>
    )
}