/* eslint-disable @next/next/no-img-element */
import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // clean up the function
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          alt="logo"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink cursor-default font-semibold text-white hover:text-white">
            Home
          </li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-2 text-sm font-light">
        <SearchIcon className="hidden h-5 w-5 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-5 w-5" />

        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            className="cursor-pointer rounded"
            alt="profile image"
          />
        </Link>
      </div>
    </header>
  );
};

export default header;
