"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type NavLinksProps = {
  items: NavItem[];
};

const navIdMap: Record<string, string> = {
  Home: "link_nav_text_home",
  Services: "link_nav_text_services",
  About: "link_nav_text_about",
  FAQ: "link_nav_text_faq",
  Contact: "link_nav_text_contact",
};

const navIdMapMobile: Record<string, string> = {
  Home: "link_nav_text_home_mobile",
  Services: "link_nav_text_services_mobile",
  About: "link_nav_text_about_mobile",
  FAQ: "link_nav_text_faq_mobile",
  Contact: "link_nav_text_contact_mobile",
};

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function NavLinks({ items }: NavLinksProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleCalendlyClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/ruth-taxcaliber/15min" });
    }
  };

  return (
    <div className="nav" aria-label="Primary navigation">
      <ul className="nav__list">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className={`nav__link${pathname === item.href ? " nav__link--active" : ""}`}
              href={item.href}
              id={navIdMap[item.label]}
              data-analytics-id={navIdMap[item.label]}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
        <a
          className="button button--secondary nav__cta"
          href="https://calendly.com/ruth-taxcaliber/15min"
          onClick={handleCalendlyClick}
          id="link_nav_cta_book-meeting"
          data-analytics-id="link_nav_cta_book-meeting"
        >
          Book a Meeting
        </a>
      <button
        className="nav__toggle"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        Menu
      </button>
      {open ? (
        <div className="nav__panel" id="mobile-menu">
          {items.map((item) => (
            <Link
              key={item.href}
              className={pathname === item.href ? "nav__link nav__link--active" : "nav__link"}
              href={item.href}
              id={navIdMapMobile[item.label]}
              data-analytics-id={navIdMapMobile[item.label]}
              onClick={handleClose}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="button button--secondary"
            href="https://calendly.com/ruth-taxcaliber/15min"
            onClick={(event) => {
              handleClose();
              handleCalendlyClick(event);
            }}
            id="link_nav_cta_book-meeting_mobile"
            data-analytics-id="link_nav_cta_book-meeting_mobile"
          >
            Book a Meeting
          </a>
        </div>
      ) : null}
    </div>
  );
}
