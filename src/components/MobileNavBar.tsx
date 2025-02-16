export default function MobileNavBar() {
    return (
        <div
            className="mobile-menu absolute left-0 top-full min-h-screen-90 w-full bg-seondary-color block origin-top-left lg:hidden">
            <div className="container py-5">
                <ul className="ml-4">
                    <li>
                        <a className="text-size-25 text-white-color uppercase leading-1.2 py-15px" href="#services">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="text-size-25 text-white-color uppercase leading-1.2 py-15px" href="#portfolio">
                            Works
                        </a>
                    </li>
                    <li>
                        <a className="text-size-25 text-white-color uppercase leading-1.2 py-15px" href="#resume">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a className="text-size-25 text-white-color uppercase leading-1.2 py-15px" href="#skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="text-size-25 text-white-color uppercase leading-1.2 py-15px" href="#testimonials">
                            Testimonials
                        </a>
                    </li>

                    <li>
                        <a className="text-size-25 text-white-color uppercase leading-1.2 py-15px" href="#contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}