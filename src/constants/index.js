import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - July 2024",
    role: "AI Intern",
    company: "Favcy",
    description: `Was part of the developer team of a startup. Worked on multiple AI based web applications. Created AI thesis, blogs and research paper.`,
    technologies: ["Javascript", "React.js", "Next.js", "AI and ML"],
  },
];

export const PROJECTS = [
  {
    title: "Music Genre Classification",
    image: project1,
    description:
      "Developed a deep learning model to classify audio samples into different music genres using CNNs and transfer learning techniques",
    technologies: ["Python", "TensorFlow", "Keras", "Librosa", "Matplotlib", "GitHub"],
  },
  {
    title: "Book Recommendation System",
    image: project4,
    description:
      "Developed a ML project using popularity based recommendaing system and collaborative filtering to predict similar books to users.",
    technologies: ["Python", "Pickle", "Flask", "sklearn", "HTML", "CSS"],
  },
  {
    title: "Flash Chat, (Real-time messaging application)",
    image: project2,
    description:
      "The project aims to provide users with a seamless communication experience through instant messaging. Flash-Chat offers features such as real-time message synchronization, user authentication.",
    technologies: ["Flutter", "Firebase","Dart","Cloud Firestore"],
  },
  {
    title: "Treasure Bank, (Bank Management System)",
    image: project3,
    description:
      "This project is useful for the bank as well as customers to keep a track of account details.",
    technologies: ["Python", "SQL", "Matplotlib"],
  },
];
