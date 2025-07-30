import React, { useState, useEffect } from 'react';

import '../Page2/css/online.css'

const classData = [
  
    {
        id: 1,
        title: 'Fundamentals of Programming',
        instructor: 'Jo Ann Ga-as',
        description: 'Introduction to basic coding concepts like variables, control structures, data types, and problem-solving using programming languages such as C, Python, or Java.',
        yearlevel: '1st year',
        time: 'Mon 1PM - 2pm',
        link: 'https://meet.jit.si/MAJORCOURSE-PAYAOmeet.jit.si',

    },
    {
        id: 2,
        title: 'Data Communication',
        instructor: 'Jo Ann Ga-as',
        description: 'Covers how data is transmitted between devices over networks, including transmission media, protocols, bandwidth, and error handling.',
        yearlevel: '1st year',
        time: 'Mon 2pm-3pm',
        link: 'https://meet.jit.si/MAJORCOURSE-PAYAOmeet.jit.si',

    },
    {
        id: 3,
        title: 'Introduction to Computing',
        instructor: 'Jo Ann',
        description: 'Overview of computer systems, components, software, and basic IT concepts including the role of computers in society.',
        yearlevel: '2nd year',
        time: 'Tue 6PM-7pm',
        link: 'https://meet.jit.si/MAJORCOURSE-PAYAOmeet.jit.si',

    },
    {
        id: 4,
        title: 'Network Security & Network Administration',
        instructor: 'Jo Ann Ga-as',
        description: 'Study of methods to protect networks and data from cyber threats, including encryption, firewalls, antivirus, and security policies.',
        yearlevel: '2nd year',
        time: 'Tue 6pm-7pm',
        link: 'https://meet.jit.si/MAJORCOURSE-PAYAOmeet.jit.si',
        
    },
    {
        id: 5,
        title: 'Data Structures and Algorithms',
        instructor: 'Jo Ann Ga-as',
        description: 'Explores how data is organized and manipulated using structures like arrays, stacks, queues, and algorithms for searching, sorting, and optimization.',
        yearlevel: '2nd year',
        time: 'Tue 6pm-7pm',
        link: 'https://meet.jit.si/MAJORCOURSE-PAYAOmeet.jit.si',
        
    },
    {
        id: 6,
        title: 'Teaching of Jesus',
        instructor: 'Ping Cernal',
        description: 'Teachings of Jesus is a values education subject that introduces students to the life, message, and moral teachings of Jesus Christ based on the Gospels.',
        yearlevel: '1st year',
        time: 'Tue 8-9pm',
        link: 'https://meet.jit.si/ValuesTeachinofJesus',
    },

];

const ClassCard = ({ cls, joinClass }) => (

    <div className="class-card ">
        <h3 className="class-title">{cls.title}</h3>
        <p className="class-instructor">Instructor: {cls.instructor}</p>
        <p className="class-description">{cls.description}</p>
        <div className="class-details">

            <div className="detail-item">Yearlevel: {cls.yearlevel}</div>
            <div className="detail-item">Time: {cls.time}</div>
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