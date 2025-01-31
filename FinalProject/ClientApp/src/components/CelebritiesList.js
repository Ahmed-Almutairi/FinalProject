import React from 'react'
import CelebrityCard from './CelebrityCard'

export default function CelebritiesList(props) {
    return (
        <div className="d-flex flex-row flex-wrap">
           
        {
           props.Celebrities.map((Celebrity,i)=>{
                return <CelebrityCard key={Celebrity.id} info={Celebrity}/>
            })
        }
  
        </div>
    )
}
