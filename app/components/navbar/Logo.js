import Image from "next/image"

const Logo = () => {
  return (
    <div>
      <Image className="md:block cursor-pointer rounded-full" src="/logo.png" height="75" width="75" alt="Logo" />
    </div>
  )
}

export default Logo
