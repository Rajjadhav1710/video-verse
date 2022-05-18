import React, { useState } from 'react';
import "./_categoriesBar.scss";

const keywords = [
  'All',
  'React js',
  'Angular js',
  'react native',
  'use of api',
  'redux',
  'Music',
  'Algorithm Art',
  'Guitar',
  'Songs',
  'Coding',
  'Cricket',
  'Fotball',
  'Real Madrid',
  'Gastby',
  'Poor Coder'
]

const CategoriesBar = () => {

  const [activeElement,setActiveElement] = useState('All');

  const handleClick = (value)=>{
    setActiveElement(value);
  }

  return (
    <div className="categoriesBar">
      {
        keywords.map((value,i)=>(
        <span
        onClick={()=>handleClick(value)}
        key={i}
        className={activeElement===value?"active":""}
        >
          {value}
        </span>
        ))
      }
    </div>
  )
}

export default CategoriesBar;