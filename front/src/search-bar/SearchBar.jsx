import { Wrapper } from './SearchBarStyle';

export default function SearchBar() {
    return (
        <Wrapper>
            <input 
                type="search" 
                id="search" 
                autofocus="true"
                name="search" 
                placeholder="Search by ..."/>
                <button>Search</button>
        </Wrapper>
    )
}