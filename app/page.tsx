import Image from 'next/image'
import Me from '../public/unnamed.png'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
export default function Home() {
  return (
    <div className='container px-10 md:px-20 m-auto mt-14 md:mt-32 grid md:flex md:flex-row md:gap-16'>
      <div className='pb-10 shadow-md dark:shadow-gray-800 md:w-150 px-5'>
        <Image
          src={Me}
          priority={true}
          alt='Picture Of me'
          className='w-60 m-auto md:w-80 rounded-full'
          placeholder='blur'
        />
        <div className='grid gap-5 mt-5'>
          <h1 className='text-center font-bold text-3xl'>BRAHIMI Yacine</h1>
          <h2 className='text-center text-lg '> étudiant en informatique</h2>
          <div className='flex justify-center gap-5 text-2xl'>
            <a href='https://github.com/Yacine2512'><BsGithub></BsGithub></a>
            <a href='https://www.linkedin.com/in/yacine-brahimi-5698a431a/'><BsLinkedin></BsLinkedin></a>
            
          </div>
        </div>
      </div>
      <div className='text-xl text-center md:text-left box-border mt-10'>
        <p>
          Bonjour! je suis Yacine, un étudiant en informatique age de 20 ans 
          courament etudiant en L2 informatique à l&apos;université d&apos;Angers en France
        </p>
        
      </div>
    </div>
  )
}
