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
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleCalendlyClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/ruth-taxcaliber/15min" });
    }
  };

  const isServicesActive = pathname?.startsWith("/services");
  const handleServicesToggle = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 768) return;
    event.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  return (
    <div className={`nav${open ? " nav--open" : ""}`} aria-label="Primary navigation">
      <button
        className="nav__toggle"
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <span className="sr-only">Menu</span>
      </button>
      <ul className="nav__list" id="mobile-menu">
        {items.map((item) => {
          if (item.label === "Services") {
            return (
              <li key={item.href} className={`nav__item nav__item--dropdown${servicesOpen ? " is-open" : ""}`}>
                <Link
                  className={`nav__link${isServicesActive ? " nav__link--active" : ""}`}
                  href={item.href}
                  id={navIdMap[item.label]}
                  data-analytics-id={navIdMap[item.label]}
                  onClick={handleServicesToggle}
                >
                  Services
                  <svg className="nav__chevron" viewBox="0 0 24 24" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </Link>
                <div className="nav__dropdown">
                  <div className="nav__dropdown-header">Our Services</div>
                  <div className="nav__dropdown-items">
                    <Link
                      href="/services/bookkeeping"
                      className="nav__dropdown-item"
                      id="link_nav_dropdown_bookkeeping"
                      data-analytics-id="link_nav_dropdown_bookkeeping"
                      onClick={handleClose}
                    >
                      <span className="nav__dropdown-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                          <line x1="9" y1="3" x2="9" y2="21" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                      <span className="nav__dropdown-content">
                        <strong>Bookkeeping</strong>
                        <span>Monthly reconciliation and financial tracking</span>
                      </span>
                    </Link>
                    <Link
                      href="/services/tax-preparation"
                      className="nav__dropdown-item"
                      id="link_nav_dropdown_tax-preparation"
                      data-analytics-id="link_nav_dropdown_tax-preparation"
                      onClick={handleClose}
                    >
                      <span className="nav__dropdown-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path
                            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" strokeWidth="2" />
                          <line x1="12" y1="18" x2="12" y2="12" stroke="currentColor" strokeWidth="2" />
                          <line x1="9" y1="15" x2="15" y2="15" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                      <span className="nav__dropdown-content">
                        <strong>Tax Preparation</strong>
                        <span>Business and individual tax filing</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            );
          }

          return (
            <li key={item.href} className="nav__item">
              <Link
                className={`nav__link${pathname === item.href ? " nav__link--active" : ""}`}
                href={item.href}
                id={navIdMap[item.label]}
                data-analytics-id={navIdMap[item.label]}
                onClick={handleClose}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="nav__cta">
        <a
          className="nav__button nav__button--secondary"
          href="https://taxcaliber.taxdome.com/login"
          id="link_nav_cta_client-login"
          data-analytics-id="link_nav_cta_client-login"
          target="_blank"
          rel="noreferrer"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" fill="none" stroke="currentColor" strokeWidth="2" />
            <polyline points="10 17 15 12 10 7" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="15" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
          </svg>
          Client Login
        </a>
        <a
          className="nav__button nav__button--primary"
          href="https://calendly.com/ruth-taxcaliber/15min"
          onClick={handleCalendlyClick}
          id="link_nav_cta_book-meeting"
          data-analytics-id="link_nav_cta_book-meeting"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" />
            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" />
            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" />
          </svg>
          Book a Meeting
        </a>
      </div>
    </div>
  );
}
