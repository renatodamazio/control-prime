import React, {useEffect, useState} from 'react';

export default function ControlOptions() {
    const [navigations, setNavigations] = useState([]);

    useEffect(() => {
        const options = [{
            title: 'Back 10sec',
            id: 'back-10sec',
            active: true
        }, {
            title: 'Jump 10sec',
            id: 'jump-10sec',
            active: true
        }, {
            title: 'Jump Intro',
            id: 'Jump Intro',
            active: true
        }, {
            title: 'Full Screen',
            id: 'full-screen',
            active: false
        }];

        setNavigations(options);
    }, []);

    return (
        <div>
            {
                navigations.map((navigation) => {
                    {
                        return (
                            navigation.active ? 
                            (
                                <button 
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