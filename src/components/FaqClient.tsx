"use client";

import { useMemo, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqClientProps = {
  items: FaqItem[];
};

export default function FaqClient({ items }: FaqClientProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return items;
    return items.filter((item) => {
      const text = `${item.question} ${item.answer}`.toLowerCase();
      return text.includes(term);
    });
  }, [items, query]);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-body">
      <div className="faq-search">
        <span className="material-icons faq-search__icon" aria-hidden="true">
          search
        </span>
        <input
          className="faq-search__input"
          type="text"
          placeholder="Search for answers..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="faq-grid">
        {filtered.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div className={`faq-item${isOpen ? " faq-item--open" : ""}`} key={faq.question}>
              <button className="faq-question" type="button" onClick={() => handleToggle(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  <span className="material-icons">expand_more</span>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer__content">{faq.answer}</div>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && query ? (
          <div className="faq-empty">
            No answers found for "{query}". Try different keywords or reach out directly.
          </div>
        ) : null}
      </div>
    </div>
  );
}
