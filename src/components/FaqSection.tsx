"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  headline: string;
  faqItems: FaqItem[];
  contactText: string;
  contactLinkText: string;
  contactLinkHref: string;
}

const FaqSection = ({
  headline,
  faqItems,
  contactText,
  contactLinkText,
  contactLinkHref,
}: FaqSectionProps) => {
  return (
    <section id="faq" className="px-4 py-12 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h1 className="text-primary dark:text-white/90 tracking-tight text-3xl sm:text-4xl font-bold leading-tight text-center pb-4 pt-6">
          {headline}
        </h1>
        <div className="flex flex-col p-4 mt-8">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className={`flex flex-col border-t border-t-gray-200 dark:border-t-gray-700 py-3 group ${
                index === faqItems.length - 1
                  ? "border-b border-b-gray-200 dark:border-b-gray-700"
                  : ""
              }`}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                <p className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal">
                  {item.question}
                </p>
                <ChevronDown className="text-gray-700 dark:text-gray-300 group-open:rotate-180 transition-transform duration-300 ease-in-out" />
              </summary>
              <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-open:max-h-screen">
                <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal pt-2 pb-2">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-normal text-center pt-8">
          {contactText}{" "}
          <Link
            href={contactLinkHref}
            className="text-primary dark:text-primary/90 font-medium hover:underline"
          >
            {contactLinkText}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;