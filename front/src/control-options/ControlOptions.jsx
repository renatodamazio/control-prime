import React, {useEffect, useState} from 'react';

export default function ControlOptions({ socket }) {
    const [navigations, setNavigations] = useState([]);
    const [subtitles, setSubtitles] = useState([]);
    const [audios, setAudio] = useState([]);

    useEffect(() => {
        const options = [{
            title: 'Back 10sec',
            id: 'seek-minus-10',
            active: true
        }, {
            title: 'Jump 10sec',
            id: 'seek-plus-10',
            active: true
        }, {
            title: 'Jump Intro',
            id: 'skip',
            active: true
        }, {
            title: 'Full Screen',
            id: 'full-screen',
            active: false
        }];

        setNavigations(options);
    }, []);

    useEffect(() => {
        setSubtitles([
            {
                type: 'subtitle',
                value: 'Português'
            },
            {
                type: 'subtitle',
                value: 'EnglishCC'
            },
            {
                type: 'subtitle',
                value: 'Desativadas'            
            }
        ])
    }, []);

    useEffect(() => {
        setAudio([
            {
                type: 'audio',
                value: 'Português'
            },
            
            {
                type: 'audio',
                value: 'English'
            }
        ])
    }, [])

    const sendCommand = (command, type) => {
        socket.emit('bus-event', {
            type: type,
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
                                onClick={() => { sendCommand(navigation.id, 'video-player-options') }}
                                id={navigation.id} 
                                key={navigation.id}>
                                    {navigation.title}
                                </button>
                            ): ''
                        )
                    }
                })
            }

            <select onChange={(e)=>{ sendCommand(e.target.value, 'subtitle') }}>
                {
                    subtitles.map((subtitle, key) => {
                        return (
                            <option 
                            key={key}
                            value={subtitle.value}>
                                {subtitle.value}
                            </option>
                        )
                    })
                }
            </select>

            <select onChange={(e)=>{ sendCommand(e.target.value, 'audio') }}>
                {
                    audios.map((audio, key) => {
                        return (
                            <option 
                            key={key}
                            value={audio.value}>
                                {audio.value}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}