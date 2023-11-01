import '../styles/SearchBox.css'

const SearchBox = (props) => {
    return(
        <div className='search-navbar'>
            <input 
            className='search-navbar form-control'  
            placeholder='Search...'
            onChange={(event) => props.setSearchValue(event.target.value)}
            >
            </input>
        </div>
    )
}

export default SearchBox