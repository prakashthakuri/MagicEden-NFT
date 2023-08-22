export interface NFTData {
title: string;
img: string;
price: number;
}

export interface NFTCardProps {
  imageSrc: string;
  name: string;
  price: number;
}


export interface SearchBarProps {
  onSearch: (searchText: string) => void;
}