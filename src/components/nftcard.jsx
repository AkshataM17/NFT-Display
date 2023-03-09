import { useState } from "react";

const NftCard = ({ image, id, title, address, description, attributes, }) => {
    let field = title.split('#');
    var NFTName = field[0];
    var NFTId = field[1];

    const [moreDetails, showMoreDetails] = useState(false)
    
    return (
        <div className="w-1/5 mr-3 mb-4 bg-slate-100 rounded-md hover:bg-slate-300 border border-slate-400 hover:border-blue-600 hover:scale-105 cursor-pointer">
            <img className='w-full rounded-t-md' key={id} src={image} onClick={() => showMoreDetails(!moreDetails)}></img>
            <div className="p-3" onClick={() => showMoreDetails(!moreDetails)}>
                <div className="flex ">
                    <div className="flex-grow">
                        <h3 className="text-xl">{title}</h3>
                        <p>Contract Address: <a target="_blank" className="text-blue-700" href={`https://etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a></p>
                        {/* <a><button class="py-1 px-2 rounded text-blue-500" >Click for More Details
                       </button></a> */}
                       {moreDetails ? (<p>{description? description.slice(0, 50) : ""}</p>) : (<a><button class="py-1 px-2 rounded text-blue-500" >Click for More Details
                       </button></a>)}
                    </div>
                    {moreDetails ? (<div className="flex mr-4">
                        <a target="_blank" className="text-blue-700" href={`https://opensea.io/assets/ethereum/${address}/${NFTId}`}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">BUY
                       </button></a>
                    </div>) : ("")}

                    
                </div>
                
            </div>
            
        </div>
    )
}


export default NftCard