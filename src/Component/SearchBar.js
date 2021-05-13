import './SearchBar.css';

function SearchBar() {
    return (
        <div className="searchbar-box">
            <input
                type='text'
                className="search-input"
                placeholder="Enter City" />
            <input
                type='text'
                className="search-input"
                placeholder="Enter Board" />
            <input
                type='text'
                className="search-input"
                style={{ width: "36%" }}
                placeholder="Enter School Name" />
                <button className="searchbar-button">Search</button>
                        </div>
    )
}

export default SearchBar;