

import { Link, Outlet } from 'react-router-dom'
import '../Page2/css/librarycategory.css'
import '../Page1/css/categories.css'
import { useState } from 'react';


const categoriesData = [
    { title: 'Fiction', count: '2,847 books', icon: 'fa-magic', tags: ['popular'] },
    { title: 'Science', count: '1,523 books', icon: 'fa-flask', tags: ['academic'] },
    { title: 'Technology', count: '987 books', icon: 'fa-laptop-code', tags: ['popular', 'academic'], route: ['technology'] },
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

const LibraryCategory = () => {

    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const filteredCategories = categoriesData.filter(category =>
        (filter === 'all' || category.tags.includes(filter)) &&
        category.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="container-fluid " id='category'>
            <div class="breadcrumb-container card border-0 shadow-lg">
                <div aria-label="Category selection breadcrumb ">

                    <ol class="breadcrumb breadcrumb-category d-flex flex-nowrap p-2">
                        {filteredCategories.map((cat, index) => (
                            <li key={index} class="breadcrumb-item">
                                <Link  to={`/library/${cat.route}`} class="category-breadcrumb-card" data-category="science" data-step="3">
                                    <div class="d-flex align-items-center">
                                        <i class="bi-lightbulb category-icon text-success"></i>
                                        <div class="category-info">
                                            <h6>{cat.title}</h6>
                                        </div>
                                    </div>

                                </Link>
                                <i class="bi-chevron-right breadcrumb-arrow"></i>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            <Outlet />
        </div>

    )
}

export default LibraryCategory;