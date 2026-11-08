import React from "react";


const Page1 = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen w-full bg-transparent text-white overflow-hidden"
        >

            {/* Navbar */}
            <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-7 flex justify-between items-center">

                <h1 className="text-3xl md:text-4xl font-bold">
                    SJ<span className="text-cyan-400">.</span>
                </h1>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-200">
                    <a href="#home" className="text-cyan-400">Home</a>
                    <a href="#about" className="hover:text-cyan-400 transition">About</a>
                    <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
                    <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
                    <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
                </div>

                <a
                    href="#contact"
                    className="hidden sm:block border border-cyan-400 px-6 py-2.5 rounded-full hover:bg-cyan-400 hover:text-black transition"
                >
                    Let's Talk ↗
                </a>

            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[85vh] grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                {/* Left Content */}
                <div className="text-center md:text-left py-12">

                    <div className="inline-flex items-center gap-2 border border-cyan-400/30 rounded-full px-4 py-2 text-sm text-cyan-300 mb-7">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Available for Opportunities
                    </div>

                    <p className="text-xl md:text-2xl text-gray-300">
                        Hello, I'm
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mt-3 leading-tight">
                        Sankhadip
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">
                            Jana.
                        </span>
                    </h1>

                    <h2 className="text-2xl sm:text-3xl font-semibold mt-5">
                        Full Stack Developer
                    </h2>

                    <p className="text-gray-300 leading-8 mt-6 max-w-lg mx-auto md:mx-0 text-base md:text-lg">
                        I create modern, responsive and scalable web applications.
                        I love turning creative ideas into beautiful digital
                        experiences using modern technologies.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-9">

                        <a
                            href="#projects"
                            className="px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
                        >
                            View My Work →
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="px-7 py-3.5 rounded-full font-semibold border border-cyan-400/60 hover:bg-cyan-400 hover:text-black transition"
                        >
                            Download CV ↓
                        </a>

                    </div>

                    {/* Stats */}


                </div>

                {/* Right Profile Image */}
                <div className="relative flex justify-center items-center py-10">

                    {/* Glow */}
                    <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[430px] lg:h-[430px] rounded-full bg-cyan-500/20 blur-3xl"></div>

                    {/* Circle */}
                    <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[410px] lg:h-[410px] rounded-full border border-cyan-400/60 shadow-[0_0_35px_rgba(0,200,255,0.3)]"></div>

                    {/* Your Image */}
                    <img
                        src="/image4.png"
                        alt="Sankhadip Jana - Full Stack Developer"
                        className="relative z-10 w-full max-w-[480px] h-auto object-contain drop-shadow-[0_0_25px_rgba(0,180,255,0.35)]"
                    />

                    {/* Floating Badge */}
                    <div className="absolute bottom-12 left-0 sm:left-5 z-20 border border-cyan-400/40 bg-black/40 backdrop-blur-lg rounded-xl px-5 py-3">
                        <p className="text-cyan-400 font-bold text-sm">&lt;/&gt; Developer</p>
                        <p className="text-gray-300 text-xs mt-1">Build • Create • Innovate</p>
                    </div>

                    <div className="absolute top-12 right-0 sm:right-5 z-20 border border-blue-400/40 bg-black/40 backdrop-blur-lg rounded-xl px-4 py-3">
                        <p className="text-blue-300 font-bold text-sm">Full Stack</p>
                        <p className="text-gray-300 text-xs mt-1">Web Development</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Page1;