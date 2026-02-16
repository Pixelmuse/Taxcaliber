"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLinks from "@/components/NavLinks";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header site-header--enhanced">
      <div className="nav-topbar">
        <div className="container nav-topbar__content">
          <div className="nav-topbar__left">
            <a href="tel:6028193395" className="nav-topbar__item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span>602-819-3395</span>
            </a>
            <a href="mailto:info@taxcaliber.com" className="nav-topbar__item">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span>info@taxcaliber.com</span>
            </a>
          </div>
          <div className="nav-topbar__right">
            <span>Mon-Fri: 8am to 5pm MST</span>
          </div>
        </div>
      </div>
      <div className={`nav-main${scrolled ? " nav-main--scrolled" : ""}`}>
        <div className="container nav-container">
          <Link
            className="logo"
            href="/"
            aria-label="Taxcaliber home"
            id="link_head_cta_logo"
            data-analytics-id="link_head_cta_logo"
          >
            <span className="logo__mark" aria-hidden="true">
              <Image src="/images/taxcaliber-logo-140x140.png" alt="" width={44} height={44} priority />
            </span>
            <span className="logo__text">TAXCALIBER</span>
          </Link>
          <NavLinks items={navItems} />
        </div>
      </div>
    </header>
  );
}
