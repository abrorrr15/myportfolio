import { HiOutlineHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import {
  MdOutlineContactMail,
  MdOutlineInfo,
  MdOutlineWorkHistory,
} from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import { PiStudentFill } from "react-icons/pi";

const Li = styled.li<{ active: boolean }>`
  width: 100%;
  transform-origin: right;
  transition: background-color 0.3s ease-in-out;
  background-color: ${({ active }) => (active ? "#2563eb" : "transparent")};
  border-radius: 20px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em;
  color: white;
  text-decoration: none;
  width: 100%;
  border: 1px solid gray;
  border-radius: 20px;

  &:hover {
    background-color: #88aeff;
  }

  &:active,
  &:focus {
    background-color: #2563eb;
    transition: background-color 0.3s ease-in-out;
    border-radius: 20px;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  background-color: #e8e8e8;
  color: #000000;
  text-align: center;
  border-radius: 5px;
  padding: 2px 10px;
  position: absolute;
  z-index: 2;
  bottom: 125%; /* Position above the icon */
  left: 0%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%; /* At the bottom of the tooltip */
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* Centering the icon */
  overflow: visible; /* Ensure tooltip can be visible */

  @media (min-width: 300px) {
    height: 1rem;
  }

  @media (min-width: 1280px) {
    height: 3rem;
  }

  @media (min-width: 1536px) {
    height: 1.3rem;
  }

  &:hover ${Tooltip} {
    visibility: visible;
    opacity: 1;
    border-radius: 20px;
  }
`;

function MainNav() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  function handleClick(link: string): void {
    setActiveLink((value) => (value === link ? null : link));
  }

  return (
    <nav>
      <ul className="space-y-4 xl:space-y-6 2xl:space-y-8 mr-2">
        {[
          { to: "/", label: "Home", icon: <HiOutlineHome />, link: "/" },
          {
            to: "/about",
            label: "About",
            icon: <MdOutlineInfo />,
            link: "About",
          },
          {
            to: "/experience",
            label: "Experience",
            icon: <PiStudentFill />,
            link: "Experience",
          },
          {
            to: "/works",
            label: "Works",
            icon: <MdOutlineWorkHistory />,
            link: "Works",
          },
          {
            to: "/contact",
            label: "Contact",
            icon: <MdOutlineContactMail />,
            link: "Contact",
          },
        ].map(({ to, label, icon, link }) => (
          <Li key={link} active={activeLink === link}>
            <StyledNavLink to={to} onClick={() => handleClick(link)}>
              <IconContainer>
                {icon}
                <Tooltip>{label}</Tooltip>
              </IconContainer>
            </StyledNavLink>
          </Li>
        ))}
      </ul>
    </nav>
  );
}

export default MainNav;
