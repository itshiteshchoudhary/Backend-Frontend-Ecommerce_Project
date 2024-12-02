import { Fragment } from "react"
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { FaRegChartBar } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";


const adminSidebarMenuItems = [
  {
    id: "dashbord",
    lable: "Dashbord",
    path: "/admin/dashbord",
    icon: <FaRegChartBar />
  },
  {
    id: "products",
    lable: "Products",
    path: "/admin/products",
    icon: <MdProductionQuantityLimits />
  },
  {
    id: "orders",
    lable: "Orders",
    path: "/admin/orders",
    icon: <GrDeliver />
  }
]

function MenuItems({setOpen}) {
  const navigate = useNavigate()
  return <nav className="flex flex-col mt-8 gap-2">
    {
      adminSidebarMenuItems.map((item) => (
        <div key={item.id} onClick={() =>{
          navigate(item.path)
          setOpen ? setOpen(false) : null}}
          className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground text-xl">
          {item.icon}
          <span>{item.lable}</span>
        </div>
      ))
    }
  </nav>
}

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen} >
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5">
                <GrUserAdmin className="font-extrabold text-2xl" />
                Admin Panel
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen}/>
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div onClick={() => navigate("/admin/dashbord")} className="flex items-center gap-2">
          <GrUserAdmin className="font-extrabold text-2xl" />
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  )
}

export default Sidebar