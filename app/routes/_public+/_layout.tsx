import { Link, Outlet } from "@remix-run/react";

export default function PublicLayoutRoute() {
  return (
    <div className="grid grid-cols-editorial-mobile md:grid-cols-editorial-full">
      <header className="col-[narrow] md:col-[standard-start/narrow-end] mb-8 py-4">
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}
