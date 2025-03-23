import React, { useState } from 'react'

export default function Ind(props) {
    const [list, setList]=useState(["apple", "kivi", "orange"]);
    const [searchText, setSearchText]=useState('');
  let searchResult=list.filter((item)=>{
    return item.toLowerCase().includes(searchText.toLowerCase());
  })
  return (
    <div>
      <input type="search" placeholder='Enter the item' onChange={(e)=>setSearchText(e.target.value)}></input>
      <ul>
      {
        searchResult.map((item, i)=>{
         return <li key={i}>{item}</li>
        })
      }</ul>
    </div>
  )
}
