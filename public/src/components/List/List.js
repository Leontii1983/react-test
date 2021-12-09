
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Searchbar from '../Searchbar/Index';


const List = ({data}) => {

  const history = useNavigate();

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    
    history(`?search=${query}`);
     
  }
  

  

     

    return (   
      <div>
        <Searchbar  handleChange = {handleChange} />
        {data.data.datas && data.data.datas.filter(record => {
                if (query === '') {
                        return record;
                } else if (record.name.toLowerCase().includes(query.toLowerCase())) {
                  return record;
                }
            }).map((record) => {
              return <div css = {
                css`
                text-align: left;
                border: black ridge 1px;
                border-radius: 10px;
                margin: 3px;
                width: 20rem;
                padding-left: 10px;
                `} 
                key={record.id}>{record.name}</div>
            })
        }
      </div>

    );

} 

export default List;