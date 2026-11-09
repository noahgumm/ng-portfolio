// Edit this file to update the text and links across the whole site.

const profile = {
  name: "Noah Gumm",
  role: "Software Developer",
  location: "Springfield, MO",
  openToWork: true, // shows the “Open to opportunities” badge in the hero
  headline: ["I build things and", "take them apart to", "see how they"],
  headlineAccent: "work.",
  intro:
    "Software developer with hands-on experience in Java, C#, C++, and JavaScript — from Spring Boot REST APIs and Angular apps to Unity tools and systems-level C++ projects.",
  heroChips: ["Java", "C#", "C++"], // the three floating tags next to your photo
  bio: [
    "I’m a Computer Science student finishing my B.S. at Western Governors University, aiming for an entry-level software development role. My work spans Spring Boot REST APIs behind Angular frontends, a Java Servlets app built with a team of four, a reusable Unity inventory framework in C#, and systems-level C++ projects.",
    "I enjoy collaborative, sprint-based teams, and I’m looking for a place where I can keep growing while contributing to work with a meaningful impact.",
  ],
  background: [
    { title: "B.S. Computer Science", place: "Western Governors University", when: "Expected Nov 2026" },
    { title: "A.A. in General Study", place: "Eastern New Mexico University", when: "May 2025" },
    { title: "City Carrier", place: "United States Postal Service", when: "Aug 2024 – Present" },
  ],
  email: "noah.gumm3@gmail.com",
  resume: "/NoahGummResume.pdf", // file lives in /public
  github: "https://github.com/noahgumm",
  linkedin: "https://www.linkedin.com/in/noah-gumm/",
  // The first two groups also scroll in the strip under the hero.
  skills: [
    { group: "Languages", items: ["C#", "Java", "C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"] },
    { group: "Frameworks & Libraries", items: [".NET", "React", "Angular", "Spring Boot", "Java Servlets", "Unity", "Bootstrap"] },
    {
      group: "Data & Tools",
      items: ["MySQL", "PostgreSQL", "Git", "GitHub", "GitLab", "Docker", "Node.js", "Maven", "Apache Tomcat", "JUnit", "VS Code"],
    },
    { group: "Practices", items: ["REST APIs", "OOP", "Data Structures & Algorithms", "Unit Testing", "Agile/Scrum"] },
  ],
};

export default profile;
