import blogOneImg from "../assets/img/blog/1.jpg";
import blogThreeImg from "../assets/img/blog/3.jpg";
import blogTwoImg from "../assets/img/blog/2.jpg";

function Blog() {
    return (
        <section>
            <div id="blogs" className="py-60px md:py-20 lg:py-100px xl:py-30">
                <div className="container">
                    <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
                        <h2
                            className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px wow fadeInUp"
                            data-wow-delay=".3s">
                            Recent Blogs
                        </h2>
                        <p className="text-primary-color-light dark:text-body-color max-w-700px wow fadeInUp" data-wow-delay=".4s">
                            We put your ideas and thus your wishes in the form of a unique
                            web project that inspires you and you customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25px 2xl:gap-35px">
                        <div className="group relative flex flex-col items-center wow fadeInUp" data-wow-delay=".5s">
                            <div className="rounded-10px relative overflow-hidden max-w-400 w-full">
                                <a href="blog-details.html" className="rounded-10px overflow-hidden">
                                    <img src={blogOneImg} alt=""
                                        className="group-hover:scale-110 transition-all duration-500" /></a>
                                <a href="#"
                                    className="text-size-13 uppercase px-10px py-7px rounded-50px leading-1 absolute top-[15px] left-[15px] text-white-color bg-gradient-secondary-2 bg-200 hover:bg-100">Tutorial</a>
                                <div className="absolute left-0 bottom-5 w-full px-10px lg:px-5 transition-all duration-500">
                                    <div
                                        className="relative z-0 p-15px pb-5 bg-white-color dark:bg-seondary-color rounded-15px w-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-500 after:z-1 after:bg-gradient-primary after:rounded-15px">
                                        <div className="relative z-10">
                                            <ul className="flex gap-5 items-center mb-2">
                                                <li
                                                    className="text-sm font-medium text-primary-color group-hover:text-white-color transition-all duration-500">
                                                    <i className="fa-light fa-calendar-days mr-0.5"></i> Oct
                                                    01, 2022
                                                </li>
                                                <li className="text-sm font-medium">
                                                    <i
                                                        className="fa-light fa-comments mr-0.5 text-primary-color group-hover:text-white-color transition-all duration-500"></i>
                                                    <a href="#"
                                                        className="text-primary-color group-hover:text-white-color transition-all duration-500">Comment
                                                        (0)</a>
                                                </li>
                                            </ul>
                                            <a href="blog-details.html"
                                                className="text-primary-color-light dark:text-white-color group-hover:text-white-color w-full capitalize">
                                                <span className="block text-lg md:text-size-22 font-bold">
                                                    top 10 ui ux designers
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative flex flex-col items-center wow fadeInUp" data-wow-delay=".6s">
                            <div className="rounded-10px relative overflow-hidden max-w-400 w-full">
                                <a href="blog-details.html" className="rounded-10px overflow-hidden">
                                    <img src={blogTwoImg} alt=""
                                        className="group-hover:scale-110 transition-all duration-500" /></a>
                                <a href="#"
                                    className="text-size-13 uppercase px-10px py-7px rounded-50px leading-1 absolute top-[15px] left-[15px] text-white-color bg-gradient-secondary-2 bg-200 hover:bg-100">TIPS</a>
                                <div className="absolute left-0 bottom-5 w-full px-10px lg:px-5 transition-all duration-500">
                                    <div
                                        className="relative z-0 p-15px pb-5 bg-white-color dark:bg-seondary-color rounded-15px w-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-500 after:z-1 after:bg-gradient-primary after:rounded-15px">
                                        <div className="relative z-10">
                                            <ul className="flex gap-5 items-center mb-2">
                                                <li
                                                    className="text-sm font-medium text-primary-color group-hover:text-white-color transition-all duration-500">
                                                    <i className="fa-light fa-calendar-days mr-0.5"></i> Nov
                                                    01, 2022
                                                </li>
                                                <li className="text-sm font-medium">
                                                    <i
                                                        className="fa-light fa-comments mr-0.5 text-primary-color group-hover:text-white-color transition-all duration-500"></i>
                                                    <a href="#"
                                                        className="text-primary-color group-hover:text-white-color transition-all duration-500">Comment
                                                        (0)</a>
                                                </li>
                                            </ul>
                                            <a href="blog-details.html"
                                                className="text-primary-color-light dark:text-white-color group-hover:text-white-color w-full capitalize">
                                                <span className="block text-lg md:text-size-22 font-bold">
                                                    App Development Guides
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group relative flex flex-col items-center wow fadeInUp" data-wow-delay=".7s">
                            <div className="rounded-10px relative overflow-hidden max-w-400 w-full">
                                <a href="blog-details.html" className="rounded-10px overflow-hidden">
                                    <img src={blogThreeImg} alt=""
                                        className="group-hover:scale-110 transition-all duration-500" /></a>
                                <a href="#"
                                    className="text-size-13 uppercase px-10px py-7px rounded-50px leading-1 absolute top-[15px] left-[15px] text-white-color bg-gradient-secondary-2 bg-200 hover:bg-100">FREEBIES</a>
                                <div className="absolute left-0 bottom-5 w-full px-10px lg:px-5 transition-all duration-500">
                                    <div
                                        className="relative z-0 p-15px pb-5 bg-white-color dark:bg-seondary-color rounded-15px w-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-500 after:z-1 after:bg-gradient-primary after:rounded-15px">
                                        <div className="relative z-10">
                                            <ul className="flex gap-5 items-center mb-2">
                                                <li
                                                    className="text-sm font-medium text-primary-color group-hover:text-white-color transition-all duration-500">
                                                    <i className="fa-light fa-calendar-days mr-0.5"></i> Dec
                                                    01, 2022
                                                </li>
                                                <li className="text-sm font-medium">
                                                    <i
                                                        className="fa-light fa-comments mr-0.5 text-primary-color group-hover:text-white-color transition-all duration-500"></i>
                                                    <a href="#"
                                                        className="text-primary-color group-hover:text-white-color transition-all duration-500">Comment
                                                        (0)</a>
                                                </li>
                                            </ul>
                                            <a href="blog-details.html"
                                                className="text-primary-color-light dark:text-white-color group-hover:text-white-color w-full capitalize">
                                                <span className="block text-lg md:text-size-22 font-bold">
                                                    learn graphic design free
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
