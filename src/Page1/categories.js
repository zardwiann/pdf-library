import React, { useEffect, useState } from 'react';
import '../Page1/css/categories.css'
import ParticlesComponent from '../particles';
const categoriesData = [
    { title: 'Fiction', count: '2,847 books', icon: 'fa-magic', tags: ['popular'] },
    { title: 'Science', count: '1,523 books', icon: 'fa-flask', tags: ['academic'] },
    { title: 'Technology', count: '987 books', icon: 'fa-laptop-code', tags: ['popular', 'academic'],route:['library'] },
    { title: 'History', count: '1,234 books', icon: 'fa-landmark', tags: ['academic'] },
    { title: 'Romance', count: '1,876 books', icon: 'fa-heart', tags: ['popular', 'new'] },
    { title: 'Mystery', count: '943 books', icon: 'fa-search', tags: ['popular'] },
    { title: 'Biography', count: '672 books', icon: 'fa-user-circle', tags: ['academic'] },
    { title: 'Self Help', count: '1,445 books', icon: 'fa-lightbulb', tags: ['popular', 'new'] },
    { title: 'Children', count: '2,156 books', icon: 'fa-child', tags: ['popular'] },
    { title: 'Business', count: '834 books', icon: 'fa-briefcase', tags: ['academic', 'popular'] },
    { title: 'Health', count: '756 books', icon: 'fa-heartbeat', tags: ['new'] },
    { title: 'Arts', count: '623 books', icon: 'fa-palette', tags: ['academic'] },
];

const Categories = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredCategories = categoriesData.filter(category =>
        (filter === 'all' || category.tags.includes(filter)) &&
        category.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container py-4"id='category'>
              <ParticlesComponent id="particles" />
            <div className="header-section text-center">
                <h1 className="display-4 fw-bold mb-3 text-success">
                    <i className="fas fa-book-open me-3 text-success"></i> JENTRA E-Library Categories
                </h1>
              
            </div>
            <ul className="nav nav-pills justify-content-center flex-wrap filter-tabs">
                {['all', 'popular', 'new', 'academic'].map(tag => (
                    <li className="nav-item" key={tag}>
                        <button
                            className={`nav-link ${filter === tag ? 'active' : ''}`}
                            onClick={() => setFilter(tag)}
                        >
                            {tag === 'all' ? 'All Categories' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </button>
                    </li>
                ))}
            </ul>
 
            <div className="row g-4">
                {filteredCategories.map((cat, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div
                            className="card category-card text-center p-4 h-100 position-relative"
                            
                        >
                            {(cat.tags.includes('new') || cat.tags.includes('popular')) && (
                                <span className="badge badge-new">
                                    {cat.tags.includes('new') ? 'New' : 'Popular'}
                                </span>
                            )}
                            <div className="category-icon">
                                <i className={`fas ${cat.icon}`}></i>
                            </div>
                            <h5 className="category-title">{cat.title}</h5>
                            <p className="category-count">{cat.count}</p>
                          
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
