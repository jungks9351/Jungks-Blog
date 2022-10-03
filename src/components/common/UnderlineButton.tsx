const UnderlineButton = ({ text }: { text: string }) => {
  return (
    <button className="group transition duration-300">
      {text}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-black dark:bg-white"></span>
    </button>
  )
}

export default UnderlineButton
