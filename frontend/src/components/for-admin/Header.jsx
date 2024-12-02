import { MdOutlineMenu } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Button } from '../ui/button'

const Header = ({setOpen}) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b-2">
      <Button onClick={()=>setOpen(true)} className="lg:hidden sm:block">
        <MdOutlineMenu />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow">
          <MdLogout />
          Logout
        </Button>
      </div>
    </header>
  )
}

export default Header