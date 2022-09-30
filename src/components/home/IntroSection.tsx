import useTypingWords from 'src/hooks/useTypingWords'

const IntroSection = () => {
  const title = useTypingWords('JungJin Blog', 100)

  return (
    <section className="relative w-full h-[100vh] py-5 bg-intro bg-cover bg-center bg-no-repeat">
      <div className="absolute top-[20%] left-[20%]">
        <h2 className="leading-tight text-3xl md:text-4xl text-white">
          <pre className="font-bold">{title}</pre>
        </h2>
      </div>
    </section>
  )
}

export default IntroSection
