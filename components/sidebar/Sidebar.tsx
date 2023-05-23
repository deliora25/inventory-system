import { forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DashboardIcon from "@mui/icons-material/Dashboard";

type Props = {
  showNav: boolean;
};

const Sidebar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const router = useRouter();
  const isHomeRoute = router.pathname === "/";

  const sidebarButtonClass = `sidebar-button ${
    isHomeRoute
      ? "bg-primary text-slate-300 hover:bg-blue-400"
      : "bg-blue-400 hover:bg-primary hover:text-slate-300"
  }`;

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm ">
      <div className="flex justify-center mt-6 mb-14">
        <h2 className="w-32 h-auto">HOME</h2>
      </div>
      <Link href="/dashboard">
        <div className={sidebarButtonClass}>
          <div className="mr-2">
            <DashboardIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
      </Link>
      <Link href="/orders">
        <div className={sidebarButtonClass}>
          <div className="mr-2">
            <DashboardIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Orders</p>
          </div>
        </div>
      </Link>
      <Link href="/profile">
        <div className={sidebarButtonClass}>
          <div className="mr-2">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Profile</p>
          </div>
        </div>
      </Link>

      <div className={sidebarButtonClass} onClick={() => signOut()}>
        <div className="mr-2">
          <PowerSettingsNewIcon className="h-5 w-5" />
        </div>
        <div>
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
