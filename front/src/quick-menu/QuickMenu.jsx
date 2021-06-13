import React, {useEffect, useState} from 'react';

export default function QuickMenu({ socket }) {
    const [navigations, setNavigations] = useState([]);

    useEffect(() => {
        const options = [{
            title: 'Home',
            id: 'home',
            active: true,
        }, {
            title: 'Back',
            id: 'back',
            active: true
        }, {
            title: 'Prev',
            id: 'prev',
            active: true
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
        }, {
            title: 'Fullscreen',
            id: 'full',
            active: true
        }, {
            title: 'begin',
            id: 'Watch from begin',
            active: true
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