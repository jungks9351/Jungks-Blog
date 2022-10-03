import Image from 'next/image'
import Link from 'next/link'
import useTypingWords from 'src/hooks/useTypingWords'
import UnderlineButton from '../common/UnderlineButton'

const IntroSection = () => {
  const title = useTypingWords('JungJin Blog', 120)

  return (
    <section className="w-full h-[100vh] py-40 flex flex-col justify-center items-center">
      <div className="h-60px">
        <h2 className="leading-tight text-3xl mb-6  md:text-4xl text-black dark:text-white font-bold">
          {title}
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:gap-20 sm:mt-10">
        <div className="w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] animate-fadeIn">
          <Image
            src="/images/me.jpeg"
            alt="김정진입니다."
            layout="responsive"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="leading-tight text-3xl mt-6  md:text-4xl text-black dark:text-white animate-fadeIn-500 opacity-0">
          <h3 className="font-bold">
            Hello World! 👋 <br />
            Welcome to my blog
          </h3>
          <div className="pt-10">
            <Link href={'/about'}>
              <UnderlineButton text="Learn more about me" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
