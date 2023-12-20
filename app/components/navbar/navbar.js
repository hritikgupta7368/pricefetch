import Logo from "./Logo"
import Search from "./Search"
import Account from "./Account"



const Navbar = () => {
  return (
    <main className="w-full ">
      <div className="py-4 px-4 ">
        <div className="flex flex-row justify-between items-center">
          <Logo />
          <Search />
          <Account />
         
        </div>

     </div>
    </main>
  )
}

export default Navbar
