import logo from "../../assets/logo.svg";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-[150px]">
          <Link to="/" className="block">
            <img src={logo} alt="Coin Compass Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="px-8 py-2 rounded-xl border border-black text-black font-medium"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="px-8 py-2 rounded-xl bg-[#0C1825] text-white font-medium"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </header>
  );
}
