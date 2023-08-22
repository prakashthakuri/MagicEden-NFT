import React from 'react';
import { NFTCardProps } from '../interfaces/GlobalInterface';

const NFTCard: React.FC<NFTCardProps> = ({ imageSrc, name, price }) => {
  return (
   <div className="nft-card border p-4 rounded-md shadow-md">
      <img src={imageSrc} alt={name} className="w-full h-auto rounded-md mb-2" />
      <div className="card-details flex justify-between items-center bg-skyblue p-2 rounded-md">
        <div>
          <span className="card-name text-white font-semibold">{name}</span>
        </div>
        <div>
          <span className="card-price text-white font-semibold">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
