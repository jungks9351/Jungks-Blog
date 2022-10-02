import GitLogo from 'public/svgs/github.svg'

const Footer = () => {
  return (
    <footer className="p-5 flex flex-col items-center justify-center gap-4">
      <a href="https://github.com/jungks9351" target="_blank" rel="noreferrer">
        <GitLogo />
      </a>
      <p className="text-center">Copyright ⓒ2022 JungJinKim.</p>
    </footer>
  )
}

export default Footer
