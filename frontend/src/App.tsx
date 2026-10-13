import headshot from './assets/headshot.jpg'

function App() {
  return (
    <main className="mx-auto max-w-[640px] px-4 py-10 text-center sm:px-6 sm:py-16">
      <section className="flex flex-col items-center gap-3">
        <img
          src={headshot}
          alt="Headshot of Hudson Hadley"
          className="h-44 w-44 rounded-full border-4 border-blue-600 object-cover"
        />
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Hudson Hadley</h1>
        <h2 className="text-lg font-medium text-blue-600">
          Computer Science | Software Development
        </h2>
        <p className="mt-2 max-w-[50ch] leading-relaxed">
          I am a senior Computer Science major interested in development,
          focusing particularly on backend.
          I have a passion for solving people's problems, providing fast, efficient,
          and deployable solutions.
        </p>
      </section>
    </main>
  )
}

export default App