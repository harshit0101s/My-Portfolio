import { motion } from "framer-motion";
import profile from "../assets/profilePic.jpeg";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

const Hero = () => {
  return (
    <div className="border-b border-transparent pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 ">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)}
                    initial="hidden" 
                    animate="visible"
                     className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl">Harshit Sharma</motion.h1>
                    <motion.span variants={container(0.5)}
                    initial="hidden" 
                    animate="visible"
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Tech Enthusiast and Aspiring Developer
                    </motion.span>
                    <motion.p variants={container(1)}
                    initial="hidden" 
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-l">
                        Welcome to my professional portfolio! I am a dedicated and passionate student currently pursuing a B.Tech in Artificial Intelligence and Data Science at Shiv Nadar University, Chennai. My academic journey has been driven by a profound interest in the transformative power of AI and data-driven technologies. Through rigorous coursework and hands-on projects, I have honed my skills in various facets of AI, including machine learning, data analytics, and deep learning. I am committed to leveraging these skills to create innovative solutions that address real-world challenges. Explore my portfolio to learn more about my projects, skills, and the impact I aim to make in the field of AI and Data Science.
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img initial={{x:100, opacity: 0}}
                 animate={{x: 0, opacity: 1}} 
                 transition={{duration: 1, delay: 1.2}}
                 className="rounded-xl" src={profile} alt="Harshit Sharma"/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
