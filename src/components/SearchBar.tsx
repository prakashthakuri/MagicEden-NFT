// SearchBar.tsx
import React, { useState } from 'react';

interface SearchBarProps {
  placeholder: string;
  onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchText = event.target.value;
    setSearchText(newSearchText);
    onSearch(newSearchText);
  };

  return (
  <div className="search-bar-container flex justify-center items-center my-4">
      <input
        type="text"
        placeholder={placeholder}
        className="search-input py-2 px-3 rounded-md border focus:outline-none focus:ring focus:border-blue-300"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
