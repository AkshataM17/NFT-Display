// Go to www.alchemy.com and create an account to grab your own api key!
const apiKey = "WITwEClGwyZodoqiYYhN1-FPVIKcgc1x";
const endpoint = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

export const fetchNFTs = async (owner, contractAddress, setNFTs) => {
    if (owner) {
        let data;
        try {
            data = await fetch(`${endpoint}/getNFTs?owner=${owner}`).then(data => data.json())
        } catch (e) {
            fetchNFTs(endpoint, owner, contractAddress, setNFTs)
        }

        setNFTs(data.ownedNfts)
        return data
    }
}

