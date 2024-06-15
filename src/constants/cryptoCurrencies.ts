export interface ICryptoCurrencies {
  id: string;
  name: string;
  symbol: string;
  iconCode: number;
  price: number;
  prevPrice: number;
  highPrice: number;
  lowPrice: number;
  weightedAvgPrice: number;
  priceChangePercent: number;
  explorer: string;
}

const CryptoCurrencies: Array<ICryptoCurrencies> = [
  {
    id: "BTC",
    name: "Bitcoin",
    symbol: "BTCBUSD",
    iconCode: 1,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://blockchair.com/bitcoin",
  },
  {
    id: "ETH",
    name: "Etherium",
    symbol: "ETHBUSD",
    iconCode: 1027,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://etherscan.io",
  },
  {
    id: "BNB",
    name: "BNB",
    symbol: "BNBBUSD",
    iconCode: 1839,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://bscscan.com",
  },
  {
    id: "XRP",
    name: "XRP",
    symbol: "XRPBUSD",
    iconCode: 52,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://xrpscan.com",
  },
  {
    id: "DOGE",
    name: "Dogecoin",
    symbol: "DOGEBUSD",
    iconCode: 74,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://blockchair.com/dogecoin",
  },
  {
    id: "MATIC",
    name: "Polygon",
    symbol: "MATICBUSD",
    iconCode: 3890,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://polygonscan.com",
  },
  {
    id: "SOL",
    name: "Solana",
    symbol: "SOLBUSD",
    iconCode: 5426,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://explorer.solana.com",
  },
  {
    id: "SHIB",
    name: "Shiba Inu",
    symbol: "SHIBBUSD",
    iconCode: 5994,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer:
      "https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
  },
  {
    id: "APE",
    name: "ApeCoin",
    symbol: "APEBUSD",
    iconCode: 18876,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer:
      "https://etherscan.io/token/0x4d224452801aced8b2f0aebe155379bb5d594381",
  },
  {
    id: "NEAR",
    name: "NEAR Protocol",
    symbol: "NEARBUSD",
    iconCode: 6535,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://explorer.near.org",
  },
  {
    id: "LUNC",
    name: "Terra Classic",
    symbol: "LUNCBUSD",
    iconCode: 4172,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://finder.terra.money/classic",
  },
  {
    id: "LUNA",
    name: "Terra",
    symbol: "LUNABUSD",
    iconCode: 20314,
    price: 0,
    prevPrice: 0,
    highPrice: 0,
    lowPrice: 0,
    weightedAvgPrice: 0,
    priceChangePercent: 0,
    explorer: "https://finder.terra.money",
  },
];
export { CryptoCurrencies };
