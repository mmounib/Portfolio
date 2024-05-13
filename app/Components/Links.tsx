import Link from "next/link";
import {FiGithub, FiLinkedin} from "react-icons/fi";

const Links = () => {
    return (
        <footer id="contact-section"
                className="flex justify-between max-sm:flex-col items-center gap-8 max-sm:gap-4 mt-32 max-sm:mt-16 py-4 px-6 mb-3 border-y border-y-gray-400 max-w-[1300px] mx-auto">
            <div className="flex max-sm:flex-col justify-between items-center text-gray-700 w-full">
                <span className="text-2xl max-sm:text-lg">
                  Copyright &copy; 2024
                </span>
                <span className=" mx-auto max-sm:m-auto text-2xl max-sm:text-lg flex gap-3">
                  Designed and Developed by <h2>Mouad</h2>
                </span>
            </div>
            <div className="flex ml-auto gap-5 max-sm:mx-auto">
                <Link href="https://www.linkedin.com/in/mouadmounib" target="_blank"
                      className="customized__link-style icon_1"><FiLinkedin size={25} className="icon_link"/></Link>
                <Link href="https://github.com/mmounib" className="customized__link-style icon_2"><FiGithub size={25}
                                                                                                            className="icon_link"/></Link>
            </div>
        </footer>
    )
}

export default Links;