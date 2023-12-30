gsap.registerPlugin(ScrollTrigger);

function animateOnScroll() {
    const experiencesElements = document.querySelectorAll('.skil2');
    const headingElements = document.querySelectorAll('.experience');
    const skill = document.querySelectorAll('.skill');
    const skill2=document.querySelectorAll('.skill2');

    const customEase = Power1.easeOut; 

    skill2.forEach((el) => {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50, 
                scale: 0.9, 
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1, 
                ease: customEase, 
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%', 
                    end: 'bottom 20%', 
                    toggleActions: 'play none none reverse',
                },
            }
        );

    });

    skill.forEach((el) => {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50, 
                scale: 0.9, 
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1, 
                ease: customEase, 
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%', 
                    end: 'bottom 20%', 
                    toggleActions: 'play none none reverse',
                },
            }
        );

    });

    experiencesElements.forEach((el) => {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50, 
                scale: 0.9, 
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1, 
                ease: customEase, 
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%', 
                    end: 'bottom 20%', 
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });

    headingElements.forEach((el) => {
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50, 
            },
            {
                opacity: 1,
                y: 0,
                duration: 1, 
                ease: customEase, 
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%', 
                    end: 'bottom 20%', 
                    toggleActions: 'play none none reverse',
                },
            }
        );
    });
}

window.addEventListener('load', animateOnScroll); 

animateOnScroll();
