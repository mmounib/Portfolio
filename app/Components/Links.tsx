import Link from "next/link";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

const Links = () => {
    return (
        <footer className="flex justify-between items-center gap-8 mt-44 py-4 px-6 mb-3 border-y border-y-gray-400 max-w-[1300px] mx-auto">
            <div className="flex max-sm:flex-col justify-between items-center text-gray-700 w-full">
                <span className="text-2xl max-sm:text-lg max-sm:mt-4">
                  Copyright &copy; 2024
                </span>
                <span className=" mx-auto max-sm:m-auto text-2xl max-sm:text-lg flex gap-3">
                  Designed and Developed by <h2>Mouad Mounib</h2>
                </span>
            </div>
            <div className="flex ml-auto gap-5">
                <Link href="https://www.linkedin.com/in/mouadmounib" target="_blank"
                      className="customized__link-style icon_1"><FiLinkedin size={25} className="icon_link"/></Link>
                <Link href="https://github.com/mmounib" className="customized__link-style icon_2"><FiGithub size={25}
                                                                                                            className="icon_link"/></Link>
            </div>
        </footer>
    )
}

export default Links;