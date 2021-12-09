/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Searchbar = ({handleChange}) => {
    return(
       <>
       <input css = {
   css`
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   box-sizing: border-box;
    
    `} 
    placeholder="Enter search query"  onChange={handleChange}/>
       </>
    );
}

export default Searchbar;