import React from 'react'

const Employee = function ({name, job}) {
    return (
        <div className='employee'>
            <span>{job}</span>
            <div className='employee-box'></div>
            <span>{name}</span>
        </div>
    )
};

export default Employee;
