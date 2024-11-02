import React, { useEffect, useState } from "react";
import { useLanguage } from "@/lib/modules/Language/LanguageProvider";

const locales = [
  { code: "en-IN", name: "English (India)", flag: "in" },
  { code: "en-US", name: "English (US)", flag: "us" },
  { code: "fr", name: "Français", flag: "fr" },
];

const getFlagSrc = (locale: string) => {
  return `https://flagsapi.com/${locale.toUpperCase()}/shiny/64.png`;
};

const Dropdown: React.FC = () => {
  const { changeLanguage } = useLanguage();
  const [selectedLocale, setSelectedLocale] = useState(locales[0].code);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    changeLanguage(selectedLocale);
  }, [selectedLocale, changeLanguage]);

  const handleLocaleSelect = (locale: string) => {
    setSelectedLocale(locale);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-2 left-2 inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between items-center w-full px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          <img
            src={getFlagSrc(
              locales.find((locale) => locale.code === selectedLocale)?.flag ||
                ""
            )}
            alt=""
            className="w-5 h-5"
          />

          {/* {locales.find((locale) => locale.code === selectedLocale)?.name} */}
          <svg
            className="w-5 h-5 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <ul className="absolute left-0 z-10 mt-2 w-max bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {locales
            .filter((locale) => locale.code !== selectedLocale)
            .map(({ code, name, flag }) => (
              <li
                key={code}
                onMouseDown={() => handleLocaleSelect(code)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer"
              >
                <img
                  src={getFlagSrc(flag)}
                  alt={name}
                  className="w-5 h-5 mr-2"
                />
                {name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
