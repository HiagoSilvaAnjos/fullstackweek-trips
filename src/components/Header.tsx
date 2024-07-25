"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { status, data } = useSession();

  const handleMenuIsOpen = () => setMenuIsOpen((prevState) => !prevState);

  const handleSignInClick = () => signIn();

  const handleSignOutClick = () => {
    setMenuIsOpen(false);
    signOut();
  };

  return (
    <div className="container mx-auto p-5 py-0 h-[93px] flex justify-between items-center">
      <Link href={"/"}>
        <div className="relative h-[32px] w-[182px]">
          <Image fill src="/Logo.png" alt="Logo" />
        </div>
      </Link>

      {status === "unauthenticated" && (
        <button
          onClick={handleSignInClick}
          className="text-primary text-sm font-semibold"
        >
          Login
        </button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border border-grayLighter p-2 px-3 rounded-full relative">
          <AiOutlineMenu
            size={16}
            className="cursor-pointer"
            onClick={handleMenuIsOpen}
          />

          <Image
            className="rounded-full shadow-md"
            height={35}
            width={35}
            alt={data.user.name! ?? ""}
            src={data.user.image! ?? ""}
          />

          {menuIsOpen && (
            <div className="z-50 absolute top-14 left-0 w-full h-full bg-white rounded-full flex items-center justify-center shadow">
              <button
                onClick={handleSignOutClick}
                className="text-primary text-xs font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
