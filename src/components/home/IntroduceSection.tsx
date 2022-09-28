import useTypingWords from 'src/hooks/useTypingWords'

const IntroduceSection = () => {
  const title = useTypingWords('Hello World!\nWelcome to\nJungJin Blog', 100)

  return (
    <section className="h-80 py-5 flex items-center justify-center bg-intro bg-cover sm:bg-cover bg-no-repeat">
      <h2 className="leading-tight text-3xl md:text-4xl text-black">
        <pre>{title}</pre>
      </h2>
    </section>
  )
}

export default IntroduceSection
