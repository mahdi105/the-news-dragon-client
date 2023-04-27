import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error.message))
    }, []);
    return (
        <div>
            <h1 className='mb-3' style={{ color: '#403F3F', fontSize: '20px', fontWeight: '600' }}>All Categories</h1>
            <div>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link className='text-decoration-none text-black' to={`/category/${category.id}`} >{category.name}</Link>
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftSidebar;