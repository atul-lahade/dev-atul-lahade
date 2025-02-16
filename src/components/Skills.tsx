import { figmaIcon, jsIcon, reactIcon, wordpressIcon, xdIcon }  from "../Utils";

import Skill from "./Skill";

export default function Skills() {

    const skills = [
        { img: figmaIcon, percentage: 92, name: "Figma" },
        { img: xdIcon, percentage: 85, name: "XD" },
        { img: wordpressIcon, percentage: 99, name: "WordPress" },
        { img: reactIcon, percentage: 89, name: "React" },
        { img: jsIcon, percentage: 93, name: "JavaScript" },
    ];

    return (
        <section id="skills">
            <div className="pt-60px pb-60px md:pt-20 md:pb-60px lg:pt-100px lg:pb-20">
                <div className="container">
                    <div className="text-center flex flex-col items-center mb-10 md:mb-50px">
                        <h2
                            className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                            My Skills
                        </h2>
                        <p className="text-primary-color-light dark:text-body-color max-w-700px">
                            We put your ideas and thus your wishes in the form of a unique
                            web project that inspires you and you customers.
                        </p>
                    </div>
                    <div className="skills">
                        <div className="flex flex-wrap items-center justify-center gap-5">
                            {skills.map((skill, index) => (
                                <Skill key={index} imgUrl={skill.img} skillName={skill.name} percentage={skill.percentage} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
