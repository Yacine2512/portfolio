"use client"

import crous from '../../public/mycrous.jpg'
import zmala from '../../public/zmala system.jpg'
import amanpro from '../../public/wa.png'
import porfolio from '../../public/Capture d’écran 2025-04-09 à 3.39.42 PM.png'
import MainTitle from '../components/MainTitle'
import ProjectCard from '../components/ProjectCard'
import { useTheme } from 'next-themes'

function Projects() {

    const { resolvedTheme } = useTheme()
    return (
        <div>
            <MainTitle title={'mes projets'} />
            <div className='container p-10 m-auto flex gap-20 flex-wrap justify-center lg:justify-start'>
                <ProjectCard title={'my crous'} image={crous} desc={'un webscrapper qui sert a alerter si il y en des diponibilités de logement'} link={'https://github.com/nassimhadj/my-crous'}
                    stack={['python','selenium','botfather']} />
                
                
                <ProjectCard title={'Portfolio'} image={porfolio} desc={'mon portfolio personnel'} link={'/'}
                    stack={['Next js', 'Tailwind Css', 'Typescript']} />
                
                <ProjectCard title={'zmala system'} image={zmala} desc={`une application mobile qui sert a gerer sa detention pour un detenu sous bracelet`} link={'/'}
                    stack={['react-native','apollo client']} />
                
                
                    
                <ProjectCard title={'amanpro Platforme'} image={amanpro} desc={`formulaire pour faire une simulation pour un credit bancaire`} link={'/'}
                    stack={['html', 'Css', 'javascript']} />
            </div>
        </div>
    )

}

export default Projects