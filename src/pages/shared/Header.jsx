import React from "react";
import { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import i18n from "../../lang/i18n";

const LanguageMenu = ({ onSelectLanguage }) => {
  const languages = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
    { code: "ku", label: "KU" },
  ];

  return (
    <div className="flex items-center">
      {languages.map((language) => (
        <div
          key={language.code}
          onClick={() => {
            onSelectLanguage(language.code);
            i18n.changeLanguage(language.code);
          }}
          className="cursor-pointer text-white font-bold p-1 hover:bg-gray-200 rounded-md hover:text-[#028e73]"
        >
          {language.label}
        </div>
      ))}
    </div>
  );
};
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container image-container">
      <div className="inside-container">
        <div className="icons-container">
          <LanguageMenu onSelectLanguage={setSelectedLanguage} />

          <div className="icon">
            {/* Your first SVG icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M10 12.0001L14 15.0001L10 17.5001L12.5 21.0001M19 9.77818V16.2001C19 17.8802 19 18.7203 18.673 19.362C18.3854 19.9265 17.9265 20.3855 17.362 20.6731C16.7202 21.0001 15.8802 21.0001 14.2 21.0001H9.8C8.11984 21.0001 7.27976 21.0001 6.63803 20.6731C6.07354 20.3855 5.6146 19.9265 5.32698 19.362C5 18.7203 5 17.8802 5 16.2001V9.77753M21 12.0001L15.5668 5.96405C14.3311 4.59129 13.7133 3.9049 12.9856 3.65151C12.3466 3.42894 11.651 3.42899 11.0119 3.65165C10.2843 3.90516 9.66661 4.59163 8.43114 5.96458L3 12.0001"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="icon-text">Floors</p>
          </div>

          <div className="icon">
            {/* Your second SVG icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M19 9.77806V16.2C19 17.8801 19 18.7202 18.673 19.3619C18.3854 19.9264 17.9265 20.3854 17.362 20.673C17.2111 20.7499 17.0492 20.8087 16.868 20.8537M5 9.7774V16.2C5 17.8801 5 18.7202 5.32698 19.3619C5.6146 19.9264 6.07354 20.3854 6.63803 20.673C6.78894 20.7499 6.95082 20.8087 7.13202 20.8537M21 12L15.5668 5.96393C14.3311 4.59116 13.7133 3.90478 12.9856 3.65138C12.3466 3.42882 11.651 3.42887 11.0119 3.65153C10.2843 3.90503 9.66661 4.59151 8.43114 5.96446L3 12M7.13202 20.8537C7.65017 18.6447 9.63301 17 12 17C14.367 17 16.3498 18.6447 16.868 20.8537M7.13202 20.8537C7.72133 21 8.51495 21 9.8 21H14.2C15.485 21 16.2787 21 16.868 20.8537M14 12C14 13.1045 13.1046 14 12 14C10.8954 14 10 13.1045 10 12C10 10.8954 10.8954 9.99996 12 9.99996C13.1046 9.99996 14 10.8954 14 12Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="icon-text">Units</p>
          </div>

          <div className="icon">
            {/* Your third SVG icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M22 22L2 22"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M17 22V6C17 4.11438 17 3.17157 16.4142 2.58579C15.8284 2 14.8856 2 13 2H11C9.11438 2 8.17157 2 7.58579 2.58579C7 3.17157 7 4.11438 7 6V22"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></path>{" "}
                <path
                  d="M12 22V19"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M10 12H14"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M5.5 11H7"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M5.5 14H7"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M17 11H18.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M17 14H18.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M5.5 8H7"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M17 8H18.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <circle
                  cx="12"
                  cy="7"
                  r="2"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></circle>{" "}
                <path
                  d="M20.25 11.5C20.25 11.9142 20.5858 12.25 21 12.25C21.4142 12.25 21.75 11.9142 21.75 11.5H20.25ZM20.1111 8.33706L19.6945 8.96066L19.6945 8.96066L20.1111 8.33706ZM20.6629 8.88886L20.0393 9.30554L20.0393 9.30554L20.6629 8.88886ZM21.75 15.5C21.75 15.0858 21.4142 14.75 21 14.75C20.5858 14.75 20.25 15.0858 20.25 15.5H21.75ZM17.5 8.75C18.2178 8.75 18.6998 8.75091 19.0672 8.78828C19.422 8.82438 19.586 8.8882 19.6945 8.96066L20.5278 7.71346C20.1318 7.44886 19.6925 7.34415 19.219 7.29598C18.758 7.24909 18.1866 7.25 17.5 7.25V8.75ZM21.75 11.5C21.75 10.8134 21.7509 10.242 21.704 9.78102C21.6559 9.30755 21.5511 8.86818 21.2865 8.47218L20.0393 9.30554C20.1118 9.41399 20.1756 9.57796 20.2117 9.93283C20.2491 10.3002 20.25 10.7822 20.25 11.5H21.75ZM19.6945 8.96066C19.831 9.05186 19.9481 9.16905 20.0393 9.30554L21.2865 8.47218C21.0859 8.17191 20.8281 7.91409 20.5278 7.71346L19.6945 8.96066ZM20.25 15.5V22H21.75V15.5H20.25Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M3.88886 8.33706L4.30554 8.96066L4.30554 8.96066L3.88886 8.33706ZM3.33706 8.88886L3.96066 9.30554L3.96066 9.30554L3.33706 8.88886ZM3.75 20C3.75 19.5858 3.41421 19.25 3 19.25C2.58579 19.25 2.25 19.5858 2.25 20H3.75ZM2.25 16C2.25 16.4142 2.58579 16.75 3 16.75C3.41421 16.75 3.75 16.4142 3.75 16H2.25ZM6.5 7.25C5.81338 7.25 5.24196 7.24909 4.78102 7.29598C4.30755 7.34415 3.86818 7.44886 3.47218 7.71346L4.30554 8.96066C4.41399 8.8882 4.57796 8.82438 4.93283 8.78828C5.30023 8.75091 5.78216 8.75 6.5 8.75V7.25ZM3.75 11.5C3.75 10.7822 3.75091 10.3002 3.78828 9.93283C3.82438 9.57796 3.8882 9.41399 3.96066 9.30554L2.71346 8.47218C2.44886 8.86818 2.34415 9.30755 2.29598 9.78102C2.24909 10.242 2.25 10.8134 2.25 11.5H3.75ZM3.47218 7.71346C3.17191 7.91409 2.91409 8.17191 2.71346 8.47218L3.96066 9.30554C4.05186 9.16905 4.16905 9.05186 4.30554 8.96066L3.47218 7.71346ZM2.25 20V22H3.75V20H2.25ZM2.25 11.5V16H3.75V11.5H2.25Z"
                  fill="#ffffff"
                ></path>{" "}
                <path
                  d="M10 15H10.5M14 15H12.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="icon-text">Buildings</p>
          </div>
        </div>

        <div className="secons-inside">
          <div className="seperator"></div>
          <div className="inside-inside">
            <span className="floating-text">{t("description.part2")}</span>
            <span className="floating-text2">{t("description.part3")}</span>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          <div className="burger-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 18L20 18"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 12L20 12"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  d="M4 6L20 6"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>

        <ul className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={() => handleItemClick("home")}
              style={{ color: "white" }}
            >
              {t("navigation.home")}
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => handleItemClick("about")}
              style={{ color: "white" }}
            >
              {t("navigation.about")}
            </a>
          </li>
          <li>
            <a
              href="#location"
              onClick={() => handleItemClick("location")}
              style={{ color: "white" }}
            >
              {t("navigation.location")}
            </a>
          </li>
          <li>
            <a
              href="#amentities"
              onClick={() => handleItemClick("amen")}
              style={{ color: "white" }}
            >
              {t("navigation.amen")}
            </a>
          </li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="menu-container">
          <ul className="menu-items">
            <li
              className={`itemss ${activeItem === "سەرەکی" ? "active" : ""}`}
              onClick={() => handleItemClick("سەرەکی")}
            >
              <a href="#home" className="refs">
                {t("navigation.home")}
              </a>
            </li>
            <li
              className={`itemss ${activeItem === "دەربارە" ? "active" : ""}`}
              onClick={() => handleItemClick("دەربارە")}
            >
              <a href="#about" className="refs">
                {t("navigation.about")}
              </a>
            </li>
            <li
              className={`itemss ${activeItem === "پەیوەندی" ? "active" : ""}`}
              onClick={() => handleItemClick("پەیوەندی")}
            >
              <a href="#location" className="refs">
                {t("navigation.location")}
              </a>
            </li>
            <li
              className={`itemss ${
                activeItem === "خزمەتگوزاری" ? "active" : ""
              }`}
              onClick={() => handleItemClick("خزمەتگوزاری")}
            >
              <a href="#amentities" className="refs">
                {t("navigation.amen")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
