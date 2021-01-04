import * as CryptoJS from "crypto-js";

class Block{
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index:number, 
    previousHash:string, 
    timestamp:number, 
    data:string
    ) :string => 
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
   
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}


  const genesisBlock: Block = new Block(0, "20210104020345", "", "Hello", 4585696);

  let blockchain: Block[] = [genesisBlock];
  //블록체인이 얼마나 긴지 파악하기. 그래야 내 블록체인에 블록을 추가할 수 있음
  const getBlockchain = () : Block[] => blockchain;

  const getLatestBlock = () : Block => blockchain[blockchain.length -1];

  const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);
  
  export {};