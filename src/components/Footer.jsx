import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-5 text-base">
      <p>
        Quick Links:{" "}
        <Link href="/" className="hover:underline">Home</Link> |{" "}
        <Link href="/gyms" className="hover:underline">Gyms</Link> |{" "}
        <Link href="/membership" className="hover:underline">Membership</Link> |{" "}
        <Link href="/contact" className="hover:underline">Contact</Link> |{" "}
        <Link href="/faqs" className="hover:underline">FAQs</Link>
      </p>
    </footer>
  );
}
