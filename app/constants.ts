import { Facebook, Instagram } from "@mui/icons-material";

import type { ReactNode } from "react";
import XIcon from "@mui/icons-material/X";

export const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Registration",
    href: "/login",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const team = [
  {
    role: "Head of academy / U15's Coach",
    name: "Kevin McHugh",
    image: "/team/Kevin-McHugh-600x600.jpg",
  },

  {
    role: "Head Coach",
    name: "Russell Porter",
    image: "/team/Russel-Porter.jpg",
  },

  {
    role: "Physio",
    name: "Nichola Ayres",
    image: "/team/Nicola-Ayers-Finn-Harps-2023-Sportsfile-headshot-600x600.jpg",
  },
];

export const galareRoutes = [
  "/classes/img1.jpg",
  "/classes/img2.jpg",
  "/classes/img3.jpg",
  "/classes/img4.jpg",
  "/classes/img5.jpg",
  "/classes/img6.jpg",
  "/classes/img7.jpg",
  "/classes/img8.jpg",
  "/classes/img9.jpg",
];

export const formFields = [
  {
    id: "parentFirstName",
    name: "parentFirstName",
    placeholder: "Parent First Name",
  },
  {
    id: "parentLastName",
    name: "parentLastName",
    placeholder: "Parent Last Name",
  },
  {
    id: "firstName",
    name: "firstName",
    placeholder: "Child's First Name",
  },
  {
    id: "lastName",
    name: "lastName",
    placeholder: "Child's Last Name",
  },
  {
    id: "birth",
    name: "birth",
    placeholder: "Child's Date of Birth 31/05/2013",
  },
  {
    id: "phone",
    name: "phone",
    placeholder: "Contact Phone Number 000-000-0000",
  },
];

export const principals = [
  {
    name: "IDENTIFY",
    description:
      "What kind of players and more importantly people are the academy looking to recruit?",
    list: [
      "Technically good players that are willing to improve their game at all times",
      "Good role models in terms of behaviour inside and outside the club",
      "Players that have a good ethic",
    ],
  },
  {
    name: "DEVELOP",
    description: "What is our goal in terms of development?",
    list: [
      "To develop players to have a high level of comfort and confidence on the ball – Technical Development",
      "To have a high rate of success in performing their role on the team – Tactical Development",
      "To condition their bodies to perform at a consistently high level – Physical Development",
    ],
  },
  {
    name: "SUPPORT",
    description: "How can we support the player during & after our academy?",
    list: [
      "Constant feedback to players and individual improvement plans",
      "Provide nutritional and life skills advice",
      "To go above and beyond the call of duty to make sure players fufill their potential",
      "Provide means for them to stay involved in our football club – Coach education",
    ],
  },
];
