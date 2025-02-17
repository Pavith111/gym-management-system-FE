import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">KYRO</h1>
      <div className="space-x-6 text-sm">
        <Link href="/" className="hover:underline">
          HOME
        </Link>
        <Link href="/#reviews" className="hover:underline">
          REVIEWS
        </Link>
        <Link href="/gym/register" className="hover:underline">
          REGISTER GYM
        </Link>
        <Link href="/#about" className="hover:underline">
          ABOUT
        </Link>
      </div>
      <Link href="/user/login">
        <Button
          variant="primary"
          className="border border-white px-4 py-1 rounded-md"
        >
          Sign In
        </Button>
      </Link>
    </nav>
  );
}
