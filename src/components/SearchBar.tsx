import React from 'react';
import { SearchBarProps } from '../interfaces/GlobalInterface';


const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchText = event.target.value;
    onSearch(newSearchText);
  };

  return (
  <div className="search-bar-container flex justify-center items-center my-4">
      <input
        type="text"
        placeholder= "Search NFT Name"
        className="search-input py-2 px-3 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
