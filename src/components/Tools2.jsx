import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import tableau from '../assets/tableau.png';
import github from '../assets/github.png';
import reactImage from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import aws from '../assets/aws.png'
import mysql from '../assets/mysql.png'
import python from '../assets/python.png'
import numpy from '../assets/numpy.png'
import tensorflow from '../assets/tensorflow.png'


const Tools = () => {
    const techs = [ 
        {
            id:6,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-300'
        }, 
        {
            id:7,
            src: numpy,
            title: 'NumPy',
            style: 'shadow-cyan-500'
        },
        {
            id:8,
            src: tensorflow,
            title: 'TensorFlow',
            style: 'shadow-orange-500'
        },    
        {
            id:9,
            src: mysql,
            title: 'MySQL Server',
            style: 'shadow-blue-500'
        },
        {
            id:10,
            src: tableau,
            title: 'Tableau',
            style: 'shadow-blue-500'
        },
        {
            id:11,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id:12,
            src: aws,
            title: 'AWS',
            style: 'shadow-orange-400'
        },
    ]
  return (
    <div name='tools' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white'>
            
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>ML Tools</p>
                <p className='py-6'>These are the machine learning tools and technologies I have worked with:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Tools