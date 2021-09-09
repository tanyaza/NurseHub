import React from 'react'
import infos from '../../fakeData/About_TeamBoard'
import Employee from '../../components/Employee'

export default function About() {
    
    return (
        <section className='about-section'>
            <div className='about-banner'>
                <img alt='about us' src='/images/about.png'/>
            </div>
            <div className='about-employees'>
                {infos.map((info)=>{
                    return(
                         <Employee key={info.id} name={info.name} job={info.job} />
                    )
                })}

            </div>
        </section>
    )
}
