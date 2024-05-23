import { Outlet } from "react-router";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="mixed-background lg:grid lg:grid-cols-[1fr_10em] overflow-y-scroll custom-scrollbar h-screen">
      <main className="box-border">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}

export default AppLayout;
