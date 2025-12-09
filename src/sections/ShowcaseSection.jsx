import React, {useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    // Additional projects (second section)
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    const project6Ref = useRef(null);
    // Additional projects (third section)
    const project7Ref = useRef(null);
    const project8Ref = useRef(null);
    const project9Ref = useRef(null);
    // Additional projects (fourth section)
    const project10Ref = useRef(null);
    const project11Ref = useRef(null);
    const project12Ref = useRef(null);
    // Additional projects (fifth section)
    const project13Ref = useRef(null);
    const project14Ref = useRef(null);
    const project15Ref = useRef(null);
    // Additional projects (sixth section)
    const project16Ref = useRef(null);
    const project17Ref = useRef(null);
    const project18Ref = useRef(null);

    useGSAP(() => {
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
            project4Ref.current,
            project5Ref.current,
            project6Ref.current,
            project7Ref.current,
            project8Ref.current,
            project9Ref.current,
            project10Ref.current,
            project11Ref.current,
            project12Ref.current,
            project13Ref.current,
            project14Ref.current,
            project15Ref.current,
            project16Ref.current,
            project17Ref.current,
            project18Ref.current,
        ];

        projects.forEach((card, index) => {
            if (!card) return;
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y:0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )

    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project.png" alt="Ryde"/>
                        </div>
                        <div className="text-content">
                            <h2>LIMA MBEU-AI - AI Agriculture Assistant</h2>
                            <p className="text-white-50 md:text-xl">
                                A multilingual chatbot that provides real-time farming guidance to local farmers, offering tips on maize farming, pest control, soil preparation, and weather based advice using AI and natural language understanding
                            </p>
                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management
                                Platform" />
                            </div>
                            <h2>LibraryPro - Library Management Platform</h2>
                            <p className="text-white-50 md:text-xl">
                                A smart system that streamlines book inventory, borrowing, returns, and user management. It also provides a centralized library catalogue for easy access to books and provides a library card system for easy access to the library.
                            </p>

                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project1.png" alt="YC Directory" />
                            </div>
                            <h2>Cee's Bakery - An Online Cake Ordering Web-App</h2>
                            <p className="text-white-50 md:text-xl">
                                A mordern web app that lets customers browse cakes, customize orders, and place requests online with a clean UI and smooth user experience.
                            </p>

                        </div>

                    </div>
                </div>
                {/* SECOND SHOWCASE ROW */}
                <div className="showcaselayout mt-16">
                    {/* LEFT (featured) */}
                    <div className="first-project-wrapper" ref={project6Ref}>
                        <div className="image-wrapper">
                            <img src="/images/netflix-clone.png" alt="FinTech App"/>
                        </div>
                        <div className="text-content">
                            <h2>Netflix Web-App Clone</h2>
                            <p className="text-white-50 md:text-xl">
                                A modern frontend project built to replicate the core visual experience of Netflix. The platform allows users to browse movies and series across categories such as Action, Trending, Top Rated, and more. It features an immersive hero banner, smooth horizontal carousels, and responsive layouts that adapt beautifully to mobile and desktop screens.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT (list) */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project4Ref}>
                            <div className="image-wrapper bg-[#e7f7ff]">
                                <img src="/images/whatsapp-clone.png" alt="Event Manager" />
                            </div>
                            <h2>WhatsApp Web-App Clone</h2>
                            <p className="text-white-50 md:text-xl">
                                A responsive messaging platform inspired by WhatsApp. It includes real-time messaging, chat UI components, user status indicators, and mobile-friendly layouts.
                            </p>
                        </div>

                        <div className="project" ref={project5Ref}>
                            <div className="image-wrapper bg-[#f0ffe7]">
                                <img src="/images/chat-app.png" alt="Fitness Tracker" />
                            </div>
                            <h2>QuickChat — Real-Time Messaging App</h2>
                            <p className="text-white-50 md:text-xl">
                                A fast and clean chat application that allows users to send and receive messages instantly with a modern, responsive interface.
                            </p>
                        </div>
                    </div>
                </div>
                {/* THIRD SHOWCASE ROW */}
                <div className="showcaselayout mt-16">
                    {/* LEFT (featured) */}
                    <div className="first-project-wrapper" ref={project9Ref}>
                        <div className="image-wrapper">
                            <img src="/images/blog.png" alt="Social App"/>
                        </div>
                        <div className="text-content">
                            <h2>WriteSpace — Blogging Platform</h2>
                            <p className="text-white-50 md:text-xl">
                                WriteSpace is a fully responsive blogging system that allows users to create and publish articles online. It features a simple editor, organized post management, user accounts, and a clean reading experience.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT (list) */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project7Ref}>
                            <div className="image-wrapper bg-[#f5e7ff]">
                                <img src="/images/car-rental.png" alt="Task Manager" />
                            </div>
                            <h2>DriveNow — Online Car Rental System</h2>
                            <p className="text-white-50 md:text-xl">
                                DriveNow is a user-friendly web application that simplifies the process of renting vehicles. Users can browse available cars, view details, check pricing, and make online bookings. The platform features a clean UI and supports both customers and admins.
                            </p>
                        </div>

                        <div className="project" ref={project8Ref}>
                            <div className="image-wrapper bg-[#e7fff7]">
                                <img src="/images/food-delivery.png" alt="E-commerce Store" />
                            </div>
                            <h2>Tomato — Online Food Ordering & Delivery System</h2>
                            <p className="text-white-50 md:text-xl">
                                Tomato is a responsive food delivery platform that connects users with nearby restaurants. It allows customers to explore menus, customize meals, add items to a cart, and place delivery or pickup orders effortlessly. The platform offers a smooth, app-like experience designed for convenience and speed.
                            </p>
                        </div>
                    </div>
                </div>
                {/* FOURTH SHOWCASE ROW */}
                <div className="showcaselayout mt-16">
                    {/* LEFT (featured) */}
                    <div className="first-project-wrapper" ref={project12Ref}>
                        <div className="image-wrapper">
                            <img src="/images/deepseek-clone.png" alt="AI Search App"/>
                        </div>
                        <div className="text-content">
                            <h2>DeepSeek — AI Search Experience</h2>
                            <p className="text-white-50 md:text-xl">
                                A sleek, fast web interface that mimics the DeepSeek AI search experience with prompt input, contextual results, and a distraction-free layout optimized for productivity.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT (list) */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project10Ref}>
                            <div className="image-wrapper bg-[#eaf0ff]">
                                <img src="/images/chatgpt-clone.png" alt="AI Chat App" />
                            </div>
                            <h2>ChatGPT — AI Chat Clone</h2>
                            <p className="text-white-50 md:text-xl">
                                A conversational UI that supports multi-turn messaging, clean code blocks, and responsive layouts for an authentic AI chat experience.
                            </p>
                        </div>

                        <div className="project" ref={project11Ref}>
                            <div className="image-wrapper bg-[#e7fff2]">
                                <img src="/images/gemini-clone.png" alt="AI Assistant" />
                            </div>
                            <h2>Gemini — AI Assistant Clone</h2>
                            <p className="text-white-50 md:text-xl">
                                A modern assistant interface with prompt suggestions, rich responses, and adaptive theming inspired by Google Gemini.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FIFTH SHOWCASE ROW */}
                <div className="showcaselayout mt-16">
                    {/* LEFT (featured) */}
                    <div className="first-project-wrapper" ref={project15Ref}>
                        <div className="image-wrapper">
                            <img src="/images/doctor-appointment.png" alt="Healthcare App"/>
                        </div>
                        <div className="text-content">
                            <h2>MediCare — Doctor Appointment System</h2>
                            <p className="text-white-50 md:text-xl">
                                A patient-friendly platform to find doctors, view availability, and book appointments online with reminders and responsive design.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT (list) */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project13Ref}>
                            <div className="image-wrapper bg-[#fff7e7]">
                                <img src="/images/insiderjobs.png" alt="E-commerce Frontend" />
                            </div>
                            <h2>InsiderJobs — Smart Job Search Web Application</h2>
                            <p className="text-white-50 md:text-xl">
                                A modern job listing platform that helps users search, filter, and apply for thousands of job opportunities with an intuitive, professional interface.
                            </p>
                        </div>

                        <div className="project" ref={project14Ref}>
                            <div className="image-wrapper bg-[#f3e7ff]">
                                <img src="/images/portfolio.png" alt="Developer Portfolio" />
                            </div>
                            <h2>Portfolio V2 — Modern Developer Portfolio</h2>
                            <p className="text-white-50 md:text-xl">
                                A refined, performance-focused portfolio with smooth animations, case studies, and a modular component architecture.
                            </p>
                        </div>
                    </div>
                </div>
                {/* SIXTH SHOWCASE ROW */}
                <div className="showcaselayout mt-16">
                    {/* LEFT (featured) */}
                    <div className="first-project-wrapper" ref={project18Ref}>
                        <div className="image-wrapper">
                            <img src="/images/Project Management Dashboard.png" alt="Project Management Dashboard"/>
                        </div>
                        <div className="text-content">
                            <h2>ProjectFlow — Project Management Dashboard</h2>
                            <p className="text-white-50 md:text-xl">
                                A powerful dashboard for teams to plan sprints, track tasks, monitor progress, and visualize KPIs with clean charts and a responsive, accessible layout.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT (list) */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project16Ref}>
                            <div className="image-wrapper bg-[#eaf2ff]">
                                <img src="/images/Modern Apparel E-Commerce Store.png" alt="E-Commerce Store" />
                            </div>
                            <h2>Moda — Modern Apparel E‑Commerce</h2>
                            <p className="text-white-50 md:text-xl">
                                A stylish storefront with product grids, size/variant selectors, wishlist, and cart flow tailored for seamless shopping.
                            </p>
                        </div>

                        <div className="project" ref={project17Ref}>
                            <div className="image-wrapper bg-[#e7fff2]">
                                <img src="/images/Edemy Online Learning Platform.png" alt="Online Learning Platform" />
                            </div>
                            <h2>Edemy — Online Learning Platform</h2>
                            <p className="text-white-50 md:text-xl">
                                A learning platform UI for browsing courses, viewing curriculum, tracking progress, and responsive video lessons.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            </section>
        )
    }
    export default ShowcaseSection