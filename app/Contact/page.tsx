import MainTitle from "../components/MainTitle"
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { FiPhoneCall } from 'react-icons/fi'
import { AiFillGithub } from "react-icons/ai"
import { BsInstagram, BsLinkedin } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa"


const Contact = () => {
    return (
        <div>
            <MainTitle title={'Contact'} />
            <div className="tracking-wider px-10 container m-auto gap-14 flex justify-center lg:justify-center flex-col lg:flex-row">
                <div className="lg:w-1/3 h-fit grid gap-10 shadow-xl border-t dark:border-gray-800 rounded-xl p-10">
                    <div className="grid gap-5 md:text-2xl">
                        <div className="flex justify-start  items-center gap-5">
                            <MdEmail></MdEmail>
                            <h1>brahimiyacine2512@gmail.com</h1>
                        </div>
                        <div className="flex justify-start  items-center gap-5">
                            <FiPhoneCall></FiPhoneCall>
                            <h1>+33 6 63 85 97 10</h1>
                        </div>
                        <div className="flex justify-start  items-center gap-5">
                            <MdLocationPin></MdLocationPin>
                            <h1>21 rue horace vernet,49100 Angers</h1>
                        </div>
                    </div>
                    <div className="flex justify-center gap-5 text-2xl">
                        <div className="cursor-pointer  box-border">
                            <AiFillGithub ><a href="https://github.com/Yacine2512" target="_blank"></a></AiFillGithub>
                        </div>
                        <div className="cursor-pointer  box-border">
                            <BsLinkedin ><a href="https://www.linkedin.com/in/yacine-brahimi-5698a431a/" target="_blank"></a></BsLinkedin>
                        </div>
                        <div className="cursor-pointer  box-border">
                            <FaFacebook ><a href="/" target="_blank"></a></FaFacebook>
                        </div>
                        <div className="cursor-pointer  box-border">
                            <BsInstagram ><a href="https://www.instagram.com/yacine_brrh/" target="_blank"></a></BsInstagram></div>
                    </div>
                </div>
             
            </div>
        </div>
    )
}

export default Contact