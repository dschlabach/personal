import React from "react";
import { Link } from "gatsby";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const solutions = [
    {
      name: "Inbox",
      description:
        "Get a better understanding of where your traffic is coming from.",
      href: "#",
      icon: InboxIcon,
    },
    {
      name: "Messaging",
      description: "Speak directly to your customers in a more meaningful way.",
      href: "#",
      icon: AnnotationIcon,
    },
    {
      name: "Live Chat",
      description: "Your customers' data will be safe and secure.",
      href: "#",
      icon: ChatAlt2Icon,
    },
    {
      name: "Knowledge Base",
      description: "Connect with third-party tools that you're already using.",
      href: "#",
      icon: QuestionMarkCircleIcon,
    },
  ];
  return (
    <div className="h-20 p-5 w-full flex justify-between md:justify-start items-baseline">
      <h1 className="md:px-10 py-2 font-bold text-3xl">
        <Link className="hover:text-blue-300" to="/">
          Daniel Schlabach
        </Link>
      </h1>
      <div className="hidden md:flex justify-between">
        <Link className="mx-4 hover:text-blue-300" to="/about">
          About
        </Link>
        {/* <Link className="mx-4 hover:text-blue-300" to="/articles">
          Articles
        </Link>
        <Link className="mx-4 hover:text-blue-300" to="/bookshelf">
          Bookshelf
        </Link> */}
        <a
          className="mx-4 hover:text-blue-300"
          href="https://twitter.com/dmschlabach"
        >
          Twitter
        </a>
      </div>
      <div className="mr-2 md:hidden">
        <Popover className=" ">
          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg pb-4 ring-1 ring-black ring-opacity-5 bg-slate-800 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex justify-between">
                    <h1 className="md:px-10 py-2 font-bold text-3xl">
                      <Link className="hover:text-blue-300" to="/">
                        Daniel Schlabach
                      </Link>
                    </h1>
                    <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-slate-100 hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  <div className="mt-12">
                    <nav className="grid grid-cols-1 gap-7 text-lg">
                      <Link className="mx-4 hover:text-blue-300" to="/about">
                        About
                      </Link>
                      {/* <Link className="mx-4 hover:text-blue-300" to="/articles">
                        Articles
                      </Link>
                      <Link
                        className="mx-4 hover:text-blue-300"
                        to="/bookshelf"
                      >
                        Bookshelf
                      </Link> */}
                      <a
                        className="mx-4 hover:text-blue-300"
                        href="https://twitter.com/dmschlabach"
                      >
                        Twitter
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Navbar></Navbar>
      <div className="px-5 lg:container max-w-5xl mx-auto lg:px-32">
        {children}
      </div>
    </div>
  );
}
