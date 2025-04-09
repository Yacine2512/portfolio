/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import MainTitle from '../components/MainTitle'
import { BiLogoPostgresql, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoJava, BiLogoPhp, BiLogoFigma } from 'react-icons/bi'
import { SiSocketdotio, SiExpress, SiNextdotjs, SiPrisma, SiGraphql, SiApollographql} from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { FaDocker, FaPython, FaLaravel } from 'react-icons/fa'

interface Technology {
    name: string
    logo: React.ReactElement
}

const Technologies: Technology[] = [
    { name: 'HTML', logo: <BiLogoHtml5 /> },
    { name: 'CSS', logo: <BiLogoCss3 /> },
    { name: 'Javascript', logo: <BiLogoJavascript /> },
    { name: 'React js', logo: <BiLogoReact /> },
    { name: 'Git', logo: <BsGit /> },
    { name: 'Node js', logo: <DiNodejs /> },
    { name: 'Tailwind Css', logo: <BiLogoTailwindCss /> },
    { name: 'JAVA', logo: <BiLogoJava /> },
    { name: 'PHP', logo: <BiLogoPhp /> },
    { name: 'Express Js', logo: <SiExpress /> },
    { name: 'UI/UX', logo: <BiLogoFigma /> },
    { name: 'Typescript', logo: <BiLogoTypescript /> },
    { name: 'Python', logo: <FaPython /> },
    { name: 'Appolo', logo: <SiApollographql /> },
];

const About = () => {
    return (
        <div className='container m-auto flex flex-col lg:flex-row items-center lg:items-start lg:gap-40 px-10'>
            <div className='md:w-1/2'>
                <MainTitle title={'Apropos de moi'} />
                <div className='text-xl mt-10 border-t dark:border-gray-800 tracking-wider line shadow-xl p-10 rounded-lg dark:shadow-gray-800'>
                    <p>BRAHIMI Yacine, un étudiant en informatique</p>
                    <p><strong>Formation :</strong></p>
                    <p>Mon parcours académique reflète une progression continue dans le domaine de l'informatique :</p>
                    <br/>
                    <p>Je suis actuellement inscrit en <strong>L2 en Informatique</strong> à l&apos;Université d&apos;Angers, où je renforce mes connaissances en programmation, cybersécurité et réseaux.</p>
                    <br/>
                    <p>J&apos;ai commencé mes études supérieures en Algérie, à l&apos;Université de Blida 1, où j&apos;ai obtenu ma <strong>1re année de licence en informatique</strong> avec mention <strong>très bien</strong>, puis validé ma <strong>2e année</strong>.</p>
                    <br/>
                    <p>Avant cela, j&apos;ai obtenu un <strong>baccalauréat scientifique</strong> avec mention <strong>très bien</strong> au lycée Mohamed el Yaakoubi en Algérie.</p>
                    <br/>
                    <p>En complément, j&apos;ai suivi une <strong>formation en développement web front-end</strong> à l&apos;École de l&apos;informatique en Algérie, qui m&apos;a permis de développer mes compétences en HTML, CSS et JavaScript.</p>
                    <p>Mon objectif est de continuer à progresser et d&apos;intégrer un environnement de formation et de travail exigeant, où je pourrai m&apos;épanouir pleinement dans le développement web.</p>
                </div>
            </div>

            <div className='md:w-1/2'>
                <MainTitle title={'mes comptences'} />
                <div className='flex mt-20 flex-wrap justify-between gap-x-5 gap-y-3 md:gap-x-10 md:gap-y-5'>
                    {Technologies.map((e, i) => {
                        return (
                            <div key={i} className='border hover:bg-black dark:shadow-gray-800 shadow-2xl hover:text-white dark:hover:bg-white dark:hover:text-black p-3 flex rounded-lg duration-500 items-center gap-4'>
                                <div className='lg:text-xl lg:font-medium'>{e.name}</div>
                                <div className='text-2xl lg:text-6xl'>{e.logo}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default About;
