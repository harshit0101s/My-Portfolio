import { motion } from "framer-motion";
import pic from "../assets/passportpic.jpeg";
const About = () => {
  return (
    <div className="border-b border-transparent pb-4">
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span></motion.h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={pic} alt="Harshit Sharma"/>
            </div>
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6 text-xl"> Hi I am Harshit Sharma. I am an aspiring AI and Data Science professional pursuing a B.Tech at Shiv Nadar University, Chennai. My passion for technology and problem-solving has led me to specialize in AI and Data Science, where I thrive in challenging environments that push me to think creatively.

With a strong analytical mindset and expertise in Python, JAVA, C++, SQL, and machine learning frameworks like TensorFlow and PyTorch, I have engaged in diverse projects, like creating predictive models. My academic and hands-on experiences have equipped me with the skills to drive meaningful insights and innovation. My goal is to contribute to the development of ethical and robust AI systems that benefit society.

Thank you for visiting my portfolio. I look forward to connecting with professionals and exploring opportunities.</p>
            </div>
            </motion.div>
        </div>
      
    </div>
  )
}
export default About
