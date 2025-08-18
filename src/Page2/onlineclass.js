import React, { useState, useEffect } from 'react';

import '../Page2/css/online.css'

const classData = [
    {
        id: 1,
        title: 'P.E.C',
        instructor: 'KETH CERNAL',
        description: 'Professional Education course is designed for individuals who have completed a bachelors degree in a field other than education, and who wish to become teachers',
        time: ' Monday 5:30PM- 7:00PM',
        link: 'https://meet.jit.si/ProffesionalInEducation',
    },
    {
        id: 2,
        title: 'Teaching of Jesus,English 101,CWTS',
        instructor: 'Ping Cernal',
        description: 'Teaching of Jesus ,English 101,CWTS',
        time: 'Tuesday And Thursday 7:00 PM',
        link: 'https://meet.jit.si/TeachingofJesusEnglish101CWTS',
    },

    {

        id: 3,
        title: 'Major Courses -Payao Mobile Class 1st Year',
        instructor: 'Jo Ann Ga-as',
        description: 'Introduction to basic coding concepts like variables, control structures, data types, and problem-solving using programming languages such as C, Python, or Java.',
        yearlevel: '1st year',
        time: 'Mon 1PM - 2pm',
        link: 'https://meet.jit.si/MAJORCOURSE-PAYAOmeet.jit.si',

    },
    {
        id: 4,
        title: 'Major Courses -Payao Mobile Class  2nd Year',
        instructor: 'Jo Ann Ga-as',
        description: 'Introduction to basic coding concepts like variables, control structures, data types, and problem-solving using programming languages such as C, Python, or Java.',
        yearlevel: '1st year',
        time: 'Sunday 7PM - 8pm',
        link: 'https://meet.jit.si/MajorCourses-PayaoMobileClass2ndYear',

    },
    {
        id: 5,
        title: 'Major Courses -Siparoc Mobile Class  1st Year',
        instructor: 'Jo Ann Ga-as',
        description: 'Introduction to basic coding concepts like variables, control structures, data types, and problem-solving using programming languages such as C, Python, or Java.',
        yearlevel: '1st year',
        time: 'Mon 1PM - 2pm',
        link: 'https://meet.jit.si/MajorCourses-SiparocMobileClass1stYear',
    },



];

const ClassCard = ({ cls, joinClass }) => (

    <div className="class-card ">
        <h3 className="class-title">{cls.title}</h3>
        <p className="class-instructor">Instructor: {cls.instructor}</p>
        <p className="class-description">{cls.description}</p>
        <div className="class-details">
            <div className="detail-item fw-bold">Time: {cls.time}</div>
        </div>
        <button className="join-button" onClick={() => joinClass(cls.link, cls.title)}>Join Class</button>
    </div>
);

export default function OnlineClass() {
    const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
    const [filteredClasses, setFilteredClasses] = useState(classData);

    const joinClass = (link, className) => {
        if (window.confirm(`Join "${className}"?\n\nThis will open the class link in a new window.`)) {
            window.open(link, '_blank');
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = classData.filter(cls =>
            cls.title.toLowerCase().includes(searchTerm) ||
            cls.instructor.toLowerCase().includes(searchTerm) ||
            cls.category.toLowerCase().includes(searchTerm) ||
            cls.description.toLowerCase().includes(searchTerm)
        );
        setFilteredClasses(filtered);
    };

    return (
        <div className='container-schedule card'>
            <input type="text" className=' mt-5 mx-auto form-control search-input border border-success' placeholder="Search classes..." onChange={handleSearch} />
            <div className="classes-grid mt-3">
                {filteredClasses.map(cls => (
                    <ClassCard key={cls.id} cls={cls} joinClass={joinClass} />
                ))}
            </div>
        </div>
    );
}