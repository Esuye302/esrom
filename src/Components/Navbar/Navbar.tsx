import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-4 pt-4 fixed top-0 left-0 right-0 items-center z-50">
      <Link
        to="/"
        className="logo bg-primary flex-center w-30 h-10 rounded-md font-bold text-2xl  cursor-pointer"
      >
        ESROM
      </Link>
      <button aria-label="Toggle menu" type="button" className="menu cursor-pointer bg-secondary rounded-md w-10 h-10 flex-center">
        <svg
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_0_1)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 0H14C12.343 0 11 1.29504 11 2.89286V5.78571C11 7.38354 12.343 8.67857 14 8.67857H17C18.657 8.67857 20 7.38354 20 5.78571V2.89286C20 1.29504 18.657 0 17 0ZM9 2.89286V5.78571C9 7.38354 7.657 8.67857 6 8.67857H3C1.343 8.67857 0 7.38354 0 5.78571V2.89286C0 1.29504 1.343 0 3 0H6C7.657 0 9 1.29504 9 2.89286Z"
              fill="black"
            />
          </g>
          <g clipPath="url(#clip1_0_1)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 14H14C12.343 14 11 15.295 11 16.8929V19.7857C11 21.3835 12.343 22.6786 14 22.6786H17C18.657 22.6786 20 21.3835 20 19.7857V16.8929C20 15.295 18.657 14 17 14ZM9 16.8929V19.7857C9 21.3835 7.657 22.6786 6 22.6786H3C1.343 22.6786 0 21.3835 0 19.7857V16.8929C0 15.295 1.343 14 3 14H6C7.657 14 9 15.295 9 16.8929Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect width="20" height="9" fill="white" />
            </clipPath>
            <clipPath id="clip1_0_1">
              <rect
                width="20"
                height="9"
                fill="white"
                transform="translate(0 14)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
