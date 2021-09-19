import React from 'react'
import PromotionCard from '../Card/Card';
import './List.css'

const PromotionsList = ({loading, promotions }) => {

    if(loading){
       return  <div>Carregando..</div>
    }

    return (
        
        <div className="promotion-list">


        {promotions.map( (promotion) =>  (
            
            
            <PromotionCard  promotion={promotion}/>
  
          ))}
        </div>

    );
}

export default PromotionsList