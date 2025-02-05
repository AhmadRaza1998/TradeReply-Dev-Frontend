// import { Link, usePage } from "@inertiajs/react";
'use client';
// // import { Link } from "@inertiajs/react";
import Link from "next/link"; // Import Next.js Link

export default function NavLink({ className = "", children, ...props }) {
  // const { url } = usePage(); // Get the current page URL
  const url = {};
  
  // Check if the link is the active one

  const isActive = url === props.href;

  return (
    <Link
      {...props}
      className={`${className} ${isActive ? "active" : ""}`} // Add 'active' class if the link is the current page
    >
      {children}
    </Link>
  );
}
