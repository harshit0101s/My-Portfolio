import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6"> 
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-5xl font-bold"> H<span className='text-4xl font-semibold'>S</span> </h1>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/harshit-sharma-989550242/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin color="#0e76a8"/>
        </a>

        <a href='https://github.com/harshit0101s' target="_blank" rel="noopener noreferrer" >
          <FaGithub />
        </a>
        <a href='https://x.com/fatkidharshit' target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter color="#1DA1F2"/>
        </a>
        
        <a href='mailto:harshit0101s@gmail.com' target="_blank" rel="noopener noreferrer">
        <FaEnvelope color="#D44638"/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
