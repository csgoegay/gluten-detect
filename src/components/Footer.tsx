"use client";

import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  brandName: string;
  brandDescription: string;
  linkColumns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  copyrightText: string;
  disclaimerText: string;
}

const Footer = ({
  brandName,
  brandDescription,
  linkColumns,
  socialLinks,
  copyrightText,
  disclaimerText,
}: FooterProps) => {
  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-3xl text-white">science</span>
              <span className="text-2xl font-bold">{brandName}</span>
            </div>
            <p className="text-white/80 text-sm">{brandDescription}</p>
          </div>

          {/* Dynamic Link Columns */}
          {linkColumns.map((column, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Follow Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.href}
                  aria-label={`Follow us on ${socialLink.name}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {socialLink.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t border-white/20 my-8" />
        
        <div className="text-center text-white/70 space-y-2">
          <p className="text-sm">{copyrightText}</p>
          <p className="text-xs">{disclaimerText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;