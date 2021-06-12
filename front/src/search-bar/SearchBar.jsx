import { Wrapper } from './SearchBarStyle';

export default function SearchBar({ socket }) {
    const searchTerm = (el) => {
        socket.emit('bus-event', {
            type: 'search_term',
            value: el.value
        })
    };

    const searchSubmit = () => {
        socket.emit('bus-event', {
            type: 'search_submit',
            value: 'search_submit'
        })
    }

    return (
        <Wrapper>
            <input 
                type="search" 
                id="search" 
                autofocus="true"
                name="search"
                onInput={(el) => { searchTerm(el.target)}}
                placeholder="Search by ..."/>
                <button
                    onClick={ ()=> { searchSubmit() }}
                >Search</button>
        </Wrapper>
    )
}