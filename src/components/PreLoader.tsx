import { useEffect, useRef } from 'react';

import gsap from 'gsap';

interface PreLoaderProps {
    startAnimationAfterPreloader: () => void;
    // Add other props here if needed
}

export default function PreLoader(props: PreLoaderProps) {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;

        if (svg && props.startAnimationAfterPreloader) {  // Check if svg is available and callback is provided
            const preTl = gsap.timeline({
                onComplete: props.startAnimationAfterPreloader,
            });

            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

            preTl.to(".preloader-heading .load-text , .preloader-heading .cont", { // Add .cont if needed
                delay: 0.15,
                y: -100,
                opacity: 0,
            });

            preTl
                .to(svg, {
                    duration: 0.5,
                    attr: { d: curve },
                    ease: "power2.easeIn",
                })
                .to(svg, {
                    duration: 0.5,
                    attr: { d: flat },
                    ease: "power2.easeOut",
                });

            preTl.to(".preloader", {
                y: -1500,
            });
            preTl.to(".preloader", {
                zIndex: -1,
                display: "none",
            });
        }
    }, [props.startAnimationAfterPreloader]);

    return (
        <div
            className="preloader"
            style={{
                transform: 'translate(0px, -1500px)', // No need for other inline styles, GSAP handles them
            }}
        >
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" ref={svgRef}>
                <path id="preloaderSvg" d="M0 2S175 1 500 1s500 1 500 1V0H0Z" />
            </svg>

            <div className="preloader-heading">
                <div className="load-text"> {/* No inline styles needed here either */}
                    <span>L</span>
                    <span>o</span>
                    <span>a</span>
                    <span>d</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                </div>
            </div>
        </div>
    );
}
