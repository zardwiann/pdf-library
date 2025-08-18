import React, { useEffect, useState } from 'react';
import '../Page1/css/categories.css'
import ParticlesComponent from '../particles';
import categoriesData from '../data/catergoriesdata';

const Categories = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const filteredCategories = categoriesData.filter(category =>
        (filter === 'all' || category.tags.includes(filter)) &&
        category.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="container py-4" id='category'>
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
