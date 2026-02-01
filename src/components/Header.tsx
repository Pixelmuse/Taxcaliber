import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header__inner">
        <Link
          className="logo"
          href="/"
          aria-label="TaxCaliber home"
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
    </header>
  );
}
