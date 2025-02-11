'use client';

import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { Container, Navbar, Dropdown } from "react-bootstrap";
import { useLanguage } from "@/context/LanguageContext";
import {
  HelpIcon,
  PartnershipIcon,
  ReferIcon,
  SettingIcon,
  SignoutIcon,
  UserIcons,
  Logo,
} from "../img/svgIcons/SvgIcon";
import CommonButton from "./CommonButton";
import NavLink from "./NavLink";
// import { usePage } from "@inertiajs/react";
import "../../css/common/Header.scss";
import { isEmpty } from "lodash";
import useNavigate from "@/Hooks/useNavigate";
import Link from "next/link";
import { logout } from "@/utils/auth";
import Cookies from 'js-cookie';



const Header = () => {


  const [loginToken, setLoginToken] = useState(null);
  useEffect(
    () => {
      const tokens = Cookies.get("authToken");
      setLoginToken(tokens);
    }, []
  )
  // const props = usePage();
  const user = {};
  const { language, changeLanguage } = useLanguage(); // ✅ Use inside component

  // const user = usePage().props.auth.user;
  const signIn = !isEmpty(loginToken);

  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  const toggleClass = () => setIsActive((prev) => !prev);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleNavClick = () => {
    if (ref.current && document.body.clientWidth < 1220) {
      ref.current.click();
    }
  };

  const renderUserDropdown = () => <UserDropdown signIn={signIn} />;

  const lang = [
    {
      lang: 'en',
      title: 'English'
    },
    {
      lang: 'fr',
      title: 'French'
    },
    {
      lang: 'es',
      title: 'Español'
    },
  ];
  const changeLang = (lang) => {
    changeLanguage(lang);
  }
  return (
    <header className={isActive ? "siteHeader openmenu" : "siteHeader"}>
      <Navbar expand="xl">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Toggle ref={ref} onClick={toggleClass} />
            <NavLink href="/" className="brandLogo">
              <Logo />
            </NavLink>
          </div>

          <Navbar.Collapse className="justify-content-center">
            <div className="d-flex justify-content-center align-items-center openmenuSidebar">
              <NavLink
                onClick={handleNavClick}
                href="/"
                className="brandLogo d-block d-xl-none"
              >
                <Logo />
              </NavLink>
              <Navbar.Toggle ref={ref} onClick={toggleClass} />
            </div>

            <div className="navMenu d-xl-flex">
              <NavLink
                onClick={handleNavClick}
                href="/marketplace"
                className="nav-link"
              >
                Marketplace
              </NavLink>

              <div
                className={`nav-item common_dropdown dropdown ${isOpen ? "show" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={toggleDropdown}
              >
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen ? "true" : "false"}
                >
                  Products
                </NavLink>

                <div
                  className={`dropdown-menu ${isOpen ? "show" : ""}`}
                  aria-labelledby="navbarDropdown"
                >
                  <NavLink
                    onClick={handleNavClick}
                    href="/trading-calculator"
                    className="nav-link"
                  >
                    Trading Calculators
                  </NavLink>
                  <NavLink
                    onClick={handleNavClick}
                    href="/features"
                    className="nav-link"
                  >
                    Features
                  </NavLink>
                  <NavLink
                    onClick={handleNavClick}
                    href="/pricing"
                    className="nav-link"
                  >
                    Pricing
                  </NavLink>
                </div>
              </div>

              <NavLink
                onClick={handleNavClick}
                href="/education"
                className="nav-link"
              >
                Education
              </NavLink>
              <NavLink
                onClick={handleNavClick}
                href="/blog"
                className="nav-link"
              >
                Blog
              </NavLink>

              <div className="languageMenu d-xl-none">
                {renderUserDropdown()}
                <NavLink href="/login" className="nav-link">
                  <span className="me-3">
                    <SignoutIcon />
                  </span>
                  {signIn ? "Sign Out" : "Log In"}
                </NavLink>
                <NavLink href="#" className="nav-link">
                  <span className="me-3">
                    <HelpIcon />
                  </span>
                  Help Center
                </NavLink>
                <NavLink href="/partner" className="nav-link white_stroke_icon">
                  <span className="me-3">
                    <PartnershipIcon />
                  </span>
                  Partnership
                </NavLink>
                <NavLink href="/refer-a-friend" className="nav-link">
                  <span className="me-3">
                    <ReferIcon />
                  </span>
                  Refer A Friend
                </NavLink>
              </div>
            </div>
          </Navbar.Collapse>

          {isActive && (
            <div
              onClick={handleNavClick}
              className="sidebar_backdrop d-xl-none"
            />
          )}
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-lang">
              <div className="d-flex gap-2 align-items-center">
                <span className="globalIcon">
                  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3107 16.1665C19.4174 15.2865 19.4974 14.4065 19.4974 13.4998C19.4974 12.5932 19.4174 11.7132 19.3107 10.8332H23.8174C24.0307 11.6865 24.1641 12.5798 24.1641 13.4998C24.1641 14.4198 24.0307 15.3132 23.8174 16.1665M16.9507 23.5798C17.7507 22.0998 18.3641 20.4998 18.7907 18.8332H22.7241C21.4323 21.0575 19.3829 22.7425 16.9507 23.5798ZM16.6174 16.1665H10.3774C10.2441 15.2865 10.1641 14.4065 10.1641 13.4998C10.1641 12.5932 10.2441 11.6998 10.3774 10.8332H16.6174C16.7374 11.6998 16.8307 12.5932 16.8307 13.4998C16.8307 14.4065 16.7374 15.2865 16.6174 16.1665ZM13.4974 24.1132C12.3907 22.5132 11.4974 20.7398 10.9507 18.8332H16.0441C15.4974 20.7398 14.6041 22.5132 13.4974 24.1132ZM8.16406 8.1665H4.27073C5.54892 5.93588 7.59694 4.24816 10.0307 3.41984C9.23073 4.89984 8.63073 6.49984 8.16406 8.1665ZM4.27073 18.8332H8.16406C8.63073 20.4998 9.23073 22.0998 10.0307 23.5798C7.60175 22.7429 5.55645 21.0574 4.27073 18.8332ZM3.1774 16.1665C2.96406 15.3132 2.83073 14.4198 2.83073 13.4998C2.83073 12.5798 2.96406 11.6865 3.1774 10.8332H7.68406C7.5774 11.7132 7.4974 12.5932 7.4974 13.4998C7.4974 14.4065 7.5774 15.2865 7.68406 16.1665M13.4974 2.87317C14.6041 4.47317 15.4974 6.25984 16.0441 8.1665H10.9507C11.4974 6.25984 12.3907 4.47317 13.4974 2.87317ZM22.7241 8.1665H18.7907C18.3728 6.51532 17.7549 4.92131 16.9507 3.41984C19.4041 4.25984 21.4441 5.95317 22.7241 8.1665ZM13.4974 0.166504C6.12406 0.166504 0.164062 6.1665 0.164062 13.4998C0.164062 17.0361 1.56882 20.4274 4.06931 22.9279C5.30742 24.166 6.77727 25.1482 8.39495 25.8182C10.0126 26.4883 11.7464 26.8332 13.4974 26.8332C17.0336 26.8332 20.425 25.4284 22.9255 22.9279C25.426 20.4274 26.8307 17.0361 26.8307 13.4998C26.8307 11.7489 26.4859 10.0151 25.8158 8.39739C25.1457 6.77972 24.1636 5.30986 22.9255 4.07175C21.6874 2.83363 20.2175 1.85151 18.5998 1.18144C16.9822 0.511381 15.2484 0.166504 13.4974 0.166504Z" fill="#808080"></path></svg>
                </span>
                <h1 className="text-capitalize">
                  {language}
                </h1>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {lang.map((Language) => (
                <Dropdown.Item key={Language.lang} onClick={() => changeLang(Language.lang)}>{Language.title}</Dropdown.Item>
              ))}

            </Dropdown.Menu>
          </Dropdown>


          <div className="d-flex align-items-center justify-content-between">
            <div className="mx-2 mx-xl-4 pe-xl-4 d-none d-xl-block">
              {renderUserDropdown()}
            </div>
            {isEmpty(user) && (
              <Link href="/pricing">
                <CommonButton
                  className="gradient-btn"
                  title="Get started"
                />
              </Link>

            )}
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

const UserDropdown = ({ signIn }) => 
{
  const router = useRouter();
  const logoutUser = () => {
    Cookies.remove("authToken");
    router.push("/login");
  }

  return(
  <Dropdown align="end" className="common_dropdown userDropdown">
    <Dropdown.Toggle variant="" id="dropdown-basic">
      <span className="user_icon">
        <UserIcons />
      </span>
      <span className="user_name"></span>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {signIn ? (
        <>
          <NavLink
            href="#"
            onClick={logoutUser}
            className="dropdown-item white_icon flex items-center"
          >
            <SignoutIcon /> Sign Out
          </NavLink>
          <NavLink href="/account" className="dropdown-item white_icon flex items-center">
            <SettingIcon /> Account Settings
          </NavLink>
          <NavLink href="/dashboard" className="dropdown-item white_icon flex items-center">
            <SettingIcon /> Dashboard
          </NavLink>
        </>
      ) : (
        <>
          <NavLink href="/login" className="dropdown-item">
            <SignoutIcon /> Log In
          </NavLink>
          <NavLink href="#" className="dropdown-item">
            <HelpIcon /> Help Center
          </NavLink>
          <NavLink href="/partner" className="dropdown-item white_stroke_icon">
            <PartnershipIcon /> Partnership
          </NavLink>
          <NavLink href="/refer-a-friend" className="dropdown-item">
            <ReferIcon /> Refer A Friend
          </NavLink>
        </>
      )}
    </Dropdown.Menu>
  </Dropdown>
);
}

export default Header;
