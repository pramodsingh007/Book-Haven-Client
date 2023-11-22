import { Outlet } from "react-router";
import SideBar from "../../../components/SideBar/SideBar";

export default function AdminLayout() {
  return (
    <div className="flex flex-row">
        <SideBar/>
        <Outlet/>
    </div>
  )
}
