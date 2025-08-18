

import { Link, Outlet } from 'react-router-dom'
import '../Page2/css/librarycategory.css'
import '../Page1/css/categories.css'
import { useState } from 'react';

 

const LibraryCategory = () => {

 
    return (
        <div className="container-fluid  " id='category'>
           
           

            <Outlet />
        </div>

    )
}

export default LibraryCategory;