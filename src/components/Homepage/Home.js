import React from 'react'
import HeroSection from '../HeroSection'
import { heroObjOne } from './Data'

function Home() {
    return (
        <div>
            <HeroSection {...heroObjOne} />
        </div>
    )
}

export default Home
