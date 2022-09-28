import useTypingWords from 'src/hooks/useTypingWords'

const IntroSection = () => {
  const title = useTypingWords('Welcome to\nJungJin Blog', 100)

  return (
    <section className="w-full h-96 py-5 flex items-center justify-center bg-intro bg-cover bg-center bg-no-repeat">
      <h2 className="leading-tight text-3xl md:text-4xl text-white">
        <pre>{title}</pre>
      </h2>
    </section>
  )
}

export default IntroSection
