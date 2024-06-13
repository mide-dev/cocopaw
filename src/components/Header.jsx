import logo from "../assets/logo.png";
import Button from "./Button";
import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="border-b-[1px]">
      <nav
        className="container max-w-[1540px] mx-auto flex items-center justify-between py-6 lg:py-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Coco Paw</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-sm font-medium leading-6 text-gray-900"
          >
            HOME
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-sm font-medium leading-6 text-gray-900"
          >
            ABOUT COCO
          </Link>
          <Link
            to="tokenomics"
            smooth={true}
            duration={500}
            className="text-sm font-medium leading-6 text-gray-900"
          >
            TOKENOMICS
          </Link>
          <Link
            to="roadmap"
            smooth={true}
            duration={500}
            className="text-sm font-medium leading-6 text-gray-900"
          >
            ROADMAP
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            buttonText="TRADE COCO"
            className="bg-[var(--clr-primary)] text-[var(--clr-offwhite)]"
          />
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <nav className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900"
                  onClick={handleClick}
                >
                  HOME
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900"
                  onClick={handleClick}
                >
                  ABOUT COCO
                </Link>
                <Link
                  to="tokenomics"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900"
                  onClick={handleClick}
                >
                  TOKENOMICS
                </Link>
                <Link
                  to="roadmap"
                  smooth={true}
                  duration={500}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900"
                  onClick={handleClick}
                >
                  ROADMAP
                </Link>
              </div>
              <div className="py-6">
                <Button
                  buttonText="TRADE COCO"
                  className="bg-[var(--clr-primary)] text-[var(--clr-offwhite)"
                />
              </div>
            </nav>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
