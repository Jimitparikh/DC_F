import React from 'react';
const Breadcrums = ()=>{
  return (
    <>
    <div className='breadcum container'>
        <ul className='d-flex'>
            <li>
                <a href='#'>Home<span className='line'>/</span></a>
            </li>
            <li className='active'>
              <a href='#'>All Books</a>
            </li>
        </ul>
    </div>
    </>
  );
}
export default Breadcrums;