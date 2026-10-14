import { useEffect, useRef, useState } from "react";
import "./BeerStyleSelect.css";

const beerStyles = [
  { value: "ipa", label: "India Pale Ale" },
  { value: "milk-stout", label: "Milk Stout" },
  { value: "american-whit", label: "American Whit" },
  { value: "coconut-ipa", label: "Coconut IPA" },
  { value: "dunkel-weizen", label: "Dunkel Weizen" },
];

export default function BeerStyleSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [animationKey, setAnimationKey] = useState(0);

  const dropdownRef = useRef(null);
  const selectedLabel =
    beerStyles.find((beer) => beer.value === selected)?.label ||
    "Choose a beer style...";

  // Close when clicking outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSelect(beer) {
    if (beer.value !== selected) {
      setSelected(beer.value);
      setAnimationKey((key) => key + 1);
    }

    setIsOpen(false);
  }

  return (
    <div className="beer-select" ref={dropdownRef}>
      {/* Submitted with the form */}
      <input
        type="hidden"
        name="beer_style"
        value={selected}
      />

      <button
        type="button"
        className={`beer-select__trigger ${
          isOpen ? "is-open" : ""
        }`}
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Beer style: ${selectedLabel}`}
      >
        <span
          className={`beer-select__value ${
            selected ? "has-value" : ""
          }`}
        >
          <span key={animationKey}>
            {selectedLabel}
          </span>
        </span>

        <span className="beer-select__arrow" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <ul
          className="beer-select__options"
          role="listbox"
          aria-label="Beer styles"
        >
          {beerStyles.map((beer, index) => (
            <li key={beer.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={selected === beer.value}
                className={`beer-select__option ${
                  selected === beer.value ? "is-selected" : ""
                }`}
                style={{ "--option-index": index }}
                onClick={() => handleSelect(beer)}
              >
                <span>{beer.label}</span>
                {selected === beer.value && (
                  <span className="beer-select__check">✓</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
