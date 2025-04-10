import React from 'react';

import EventExample from './components/hook_test1';
import Form from './components/Form';

export default function Home() {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-4l font-extrabold position:absolute top-6 left-0 right-0 text-center dark:text-white'>🌊PARD 3th Seminar🌊</h1>
        <div className="position:absolute top-20 h-[2px] bg-black dark:bg-white w-full"/>
        <EventExample />

        <Form/>
        </div>
    );
}