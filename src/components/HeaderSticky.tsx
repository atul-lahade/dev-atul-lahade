import MobileNavBar from './MobileNavBar'
import logoDark from "../assets/img/logo/logo-dark.png";
import logoLight from "../assets/img/logo/logo.png";

export default  function HeaderSticky() {
    return (
        <header className="header-area header-2 header-sticky">
            <div className="py-10px relative">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center">
                        <div>
                            <ul className="flex items-center gap-x-15px xl:gap-x-35px">
                                <li>
                                    <a href="index.html" className="logo">
                                        <img className="w-15 h-15 hidden dark:inline-block" src={logoLight} alt="" />
                                        <img className="w-15 h-15 inline-block dark:hidden" src={logoDark} alt="" />
                                    </a>
                                </li>
                                <li className="hidden md:block">
                                    <a href="mailto:mail@gerolddesign.com"
                                        className="text-size-15 font-medium text-seondary-color dark:text-white-color">mail@gerolddesign.com</a>
                                </li>
                            </ul>
                        </div>
                        <nav>
                            <ul className="nav flex items-center gap-x-5 xl:gap-x-30px 2xl:gap-x-45px">
                                <li className="nav_item group relative hidden lg:block">
                                    <a href="#services"
                                        className="text-size-15 font-medium text-seondary-color dark:text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Services
                                    </a>
                                </li>
                                <li className="nav_item group relative hidden lg:block">
                                    <a href="#portfolio"
                                        className="text-size-15 font-medium text-seondary-color dark:text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Works
                                    </a>
                                </li>
                                <li className="nav_item group relative hidden lg:block">
                                    <a href="#resume"
                                        className="text-size-15 font-medium text-seondary-color dark:text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Resume
                                    </a>
                                </li>
                                <li className="nav_item group relative hidden lg:block">
                                    <a href="#skills"
                                        className="text-size-15 font-medium text-seondary-color dark:text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Skills
                                    </a>
                                </li>
                                <li className="nav_item group relative hidden lg:block">
                                    <a href="#testimonials"
                                        className="text-size-15 font-medium text-seondary-color dark:text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Testimonials
                                    </a>
                                </li>

                                <li className="nav_item group relative hidden lg:block">
                                    <a href="#contact"
                                        className="text-size-15 font-medium text-seondary-color dark:text-white-color capitalize py-10px md:py-15px lg:py-25px 2xl:py-30px relative z-0 after:w-0 after:h-0.5 after:bg-gradient-primary after:absolute after:right-0 hover:after:left-0 after:bottom-[25px] after:transition-all after:duration-500 group-hover:after:w-full">Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="text-size-15 font-bold text-white-color capitalize py-17px px-35px ml-10px bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-full leading-1 transition-all duration-300">Hire
                                        Me!</a>
                                </li>
                                <li className="menu-bar lg:hidden">
                                    <div className="menu-bar">
                                        <button>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <MobileNavBar />
            </div>
        </header>
    )
}