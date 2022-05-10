   
import './search-box.styles.css'

const SearchBox = ({ onSearchChange }) => {
    return (
        <div>
        <input
            className='search-box'
            type='search'
            placeholder='Buscar...'
            onChange={onSearchChange} 
        />
        </div>
    )
}

export default SearchBox