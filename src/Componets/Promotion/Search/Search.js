import React, {useState, useEffect} from "react"
import PromotionsList from '../List/List';

import axios from 'axios'
import {Link} from 'react-router-dom'

import './Search.css'



const PromotionSearch = () => {

    const [promotions, setPromotions] = useState([])
    const [Search, setSearch] = useState('')
  
    useEffect( () => {
  
      const params = {};

      if(Search){

        params.title_like = Search
      }
      axios.get('http://localhost:4000/promotions?_embed=comments', {params})
      .then((response) => {
          setPromotions(response.data)
  
      })
    }, [Search]
      
      )
      return (
  
          <div className="promotion-search">


            <header className="promotion_search_header">

                <h1> Promo show </h1>
                <Link to="/create">Nova Promoçao</Link>

            </header>

          
            <input 
            type="search" 
            className="promotion_search_input"
             placeholder="Buscar"
             onChange={(ev) => setSearch(ev.target.value)} />
            
            
            <PromotionsList promotions={promotions} loading={!promotions.length} />
  
        
          </div>
      )
  }
  
  
  export default PromotionSearch