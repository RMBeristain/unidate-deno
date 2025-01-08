import cover from "../assets/images/cover-sm.png";

const Navbar = () => {
  return (
    <nav className="bg-sky-700 dark:bg-sky-950 border-b border-sky-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="/index.html"
            >
              <img
                className="h-10 w-auto imgShadow logo"
                src={cover}
                alt="UniDate"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-4">
                UniDate Converter
              </span>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </a>
                <a
                  href="https://RMBeristain.com/APARTOFTHEWORLD"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  APARTOFTHEWORLD
                </a>
                <a
                  href="https://RMBeristain.com/apartoftheworld-unified-calendar"
                  className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Unified Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
