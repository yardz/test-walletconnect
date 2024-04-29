export interface Token {
	symbol: string;
	name: string;
	tokenAddress: string;
	logo: string;
	balance: string;
}

export interface WalletOverview {
	balance: string;
	estimateGas: string;
	tokens: number;
}

export interface WalletTokens {
	tokens: Token[];
}

export interface NftImage {
	name: string;
	description: string;
	animation_url: string;
	image: string;
	compiler: string;
}

export interface NFT {
	amount: number;
	tokenId: number;
	tokenAddress: string;
	metadata: string;
	name: string;
	symbol: string;
	tokenHash: string;
	tokenUri: string;
	collectionLogo: string;
	collectionBannerImage: string;
}

export interface WalletNFTs {
	nfts: NFT[];
}

export interface Transaction {
	hash: string;
	summary: string;
	block: string;
	age: string;
	from: string;
	to: string;
	value: string;
	fee: string;
}
export interface TypedTransaction {
	from: string;
	to: string;
	value: string;
	direction: "in" | "out";
	tokenSymbol: string;
}
