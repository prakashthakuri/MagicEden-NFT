import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import NFTCard from './NFTCard';
import axios from 'axios';
import { NFTData } from '../interfaces/GlobalInterface';

const Home: React.FC = () => {
  const [nftData, setNFTData] = useState<NFTData[]>([]);
  const [filteredNFTs, setFilteredNFTs] = useState<NFTData[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  const [apiError, setApiError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ results: NFTData[] }>(
          'https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=0'
        );
        setNFTData(response.data.results);
        setFilteredNFTs(response.data.results);
      } catch (error) {
        setApiError(error as Error);
      }
    };

    fetchData();
  }, []);


    useEffect(() => {
    const filtered = nftData.filter((nft) =>
      nft.title.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredNFTs(filtered);
  }, [searchString, nftData]);

  const handleSearch = (searchText: string) => {
    setSearchString(searchText);

  };

  if (apiError) {
    return <div>Error fetching data. Please try again later.</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="nft-card-container grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        { filteredNFTs && filteredNFTs.map((nft, index) => (
          <NFTCard
            key={index}
            imageSrc={nft?.img}
            name={nft?.title}
            price={nft.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
