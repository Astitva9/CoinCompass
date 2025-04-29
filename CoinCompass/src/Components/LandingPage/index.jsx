import sideImage from "../../assets/side-image.svg";
import { Link } from "react-router";

export default function LandingPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex flex-row lg:flex-col items-center">
        <div className="w-1/2 sm:w-full text-left">
          <h1 className="text-[60px] font-semibold leading-[1.2] mb-8">
            The Better Way to
            <br />
            Track Your Expenses
          </h1>

          <p className="text-[17px] text-[#353535] mb-8 max-w-[595px]">
            Coin Compass helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>

          {/* Create Account Button */}
          <button
            to="/signup"
            className="w-[394px] h-[98px] bg-[#0C1825] text-white rounded-xl font-medium text-xl mb-10"
          >
            Create Free Account
          </button>
          <Link
            to="/signup"
            className="w-[394px] h-[98px] bg-[#0C1825] text-white rounded-xl font-medium text-xl mb-10"
          >
            Create Free Account
          </Link>
        </div>

        <div className="w-1/2 sm:w-full">
          <img
            src={sideImage}
            alt="Placeholder"
            className="w-full h-auto max-w-[800px] mx-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
