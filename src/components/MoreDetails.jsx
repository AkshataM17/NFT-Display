import React from 'react'

const MoreDetails = (props) => {
  return (
    <div className="flex flex-wrap justify-center items-center p-3 ">
                {props?.length > 0 && props.map(attribute => {
                    return (
                        <div className="w-1/2 flex justify-start flex-col">
                            <p className="mr-2 font-bold">{attribute.trait_type}:</p> 
                             <p className="text-sm">{attribute.value}</p>
                            <p className="text-sm">{attribute.title}</p> 
                        </div>
                    )
                })}
            </div>
  )
}

export default MoreDetails
