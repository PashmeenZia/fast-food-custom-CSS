
import HomeContent from '@/components/HomeContent';
import React from 'react';
import About from './about/page';
import Menu from './menu/page';
import Contact from './contact/page';

export default function Home () {
    return (
        <div>
           <HomeContent/> 
           <Menu/>
           <About/>
           <Contact/>
        </div>
    )
}