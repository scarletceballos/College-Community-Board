import './App.css'
import Card from "./Card"

function App() {
  return (
    <div className="app">
      <header>
        <h1>NJ TechHub</h1>
      

      <p>
        Developer resources, communities, and opportunities for NJIT students.
      </p>
      </header>

      <main className="card-grid">

        <Card
          title="React Documentation"
          category="Learning"
          description="Official documentation for learning React and building user interfaces."
          link="https://react.dev/"
        />

        <Card
          title="MDN Web Docs"
          category="Learning"
          description="Web development documentation for HTML, CSS, JavaScript, and web APIs."
          link="https://developer.mozilla.org/"
        />

        <Card
          title="GitHub"
          category="Development"
          description="A platform for hosting code, collaborating on projects, and managing repositories."
          link="https://github.com/"
        />

        <Card
          title="CodePath"
          category="Program"
          description="Technical education programs designed to help college students develop industry-ready skills."
          link="https://www.codepath.org/"
        />

        <Card
          title="NJIT Career Development"
          category="Career"
          description="Career resources, advising, job opportunities, and professional development for NJIT students."
          link="https://www.njit.edu/careerservices/"
        />

        <Card
          title="NJIT ACM"
          category="Community"
          description="A computing community focused on programming, technology, and professional development."
          link="https://acm.njit.edu/"
        />

        <Card
          title="HackNJIT"
          category="Hackathon"
          description="A student hackathon environment for building projects and collaborating with other developers."
          link="https://hacknjit.org/"
        />

        <Card
          title="Google Developer Groups"
          category="Community"
          description="Developer communities where students and developers can learn and connect around technology."
          link="https://developers.google.com/community/gdg"
        />

        <Card
          title="Stack Overflow"
          category="Community"
          description="A developer community for asking programming questions and finding technical solutions."
          link="https://stackoverflow.com/"
        />

        <Card
          title="Linux Foundation"
          category="Learning"
          description="Resources and training for Linux, open source, cloud, and other technologies."
          link="https://www.linuxfoundation.org/"
        />

      </main>
    </div>
  );
}  

export default App;