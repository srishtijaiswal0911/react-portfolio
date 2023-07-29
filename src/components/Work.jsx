import React from 'react';

const Work = () => {
  return (
    <div name="work" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Work Experince</p>
            </div>
            <p className='text-2xl mt-20 border-b-2'>
                Full Time
            </p>
            <p className='text-xl mt-10'>
                <a className='text-blue-300' href="https://www2.deloitte.com/us/en.html">Deloitte</a> | Advisory Analyst (July 2021 - August 2022)
            </p>
            <p className='text-xl'>
                <a className='text-blue-300' href="https://www.cognizant.com/us/en">Cognizant</a> | Programmer Analyst (September 2020 - May 2021)
            </p>
            <p className='text-2xl mt-20 border-b-2'>
                Internships
            </p>
            <p className='text-xl mt-10'>
                <a className='text-blue-300' href="https://www.cognizant.com/us/en">Cognizant</a> | Programmer Analyst Intern (January 2020 - May 2020)
            </p>
            <p className='text-xl'>
                <a className='text-blue-300' href="https://galific.com/">Galific Arts</a> | Frontend Developer Intern (June 2019 - July 2019)
            </p>
            <p className='text-xl'>
                <a className='text-blue-300' href="https://www.enviroinfrasolutions.com/">Enviro Infra Solutions</a> | Website Designing and Development Intern (May 2018 - June 2018)
            </p>
        </div>
    </div>
  )
}

export default Work