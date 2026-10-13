import './App.css'
import headshot from './assets/headshot.jpg'

function App() {
  return (
    <main>
      <section>
        <img src={headshot} alt="Headshot of Hudson Hadley" />
        <h1>Hudson Hadley</h1>
        <h2>Computer Science | Backend Development</h2>
        <p>
          I am a senior Computer Science major interested in backend development.
          I have a passion for solving people's problems, providing fast, efficient,
          and deployable solutions.
        </p>
      </section>
    </main>
  )
}

export default App