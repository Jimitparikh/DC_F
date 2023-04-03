import React from 'react';
import { Link } from 'react-router-dom';
const Breadcrums = (props)=>{
  return (
    <>
    <div className='breadcum container'>
        <ul className='d-flex'>
            <li>
                <Link to="/">Home<span className='line'>/</span></Link>
            </li>
            <li className='active'>
              <a>{props.path}</a>
            </li>
        </ul>
    </div>
    </>
  );
}
export default Breadcrums;