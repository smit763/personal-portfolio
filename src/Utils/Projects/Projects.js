import redbox from "../../assets/images/Projects/Redbox.png";
import atelierware from "../../assets/images/Projects/Atelierware.png";
import kutuma from "../../assets/images/Projects/kutuma.png";
import WebMarket from "../../assets/images/Projects/WebMarket.png";
import Parking from "../../assets/images/Projects/Parking.png";
import RederralX from "../../assets/images/Projects/RederralX.png";
import Errands from "../../assets/images/Projects/Errands.png";
import InvoiceTime from "../../assets/images/Projects/InvoiceTime.png";

import HTML from "../../assets/images/HTML.png";
import CSS from "../../assets/images/CSS.png";
import JS from "../../assets/images/JS.png";
import React from "../../assets/images/React.png";
import Redux from "../../assets/images/Redux.png";
import Tailwind from "../../assets/images/Tailwind.png";
import Mongodb from "../../assets/images/Mongodb.png";
import Nodejs from "../../assets/images/Nodejs.png";
import Sass from "../../assets/images/Sass.png";
import SQL from "../../assets/images/SQL.png";
import Express from "../../assets/images/Express.png";
import Github from "../../assets/images/Github.png";
import Docker from "../../assets/images/Docker.png";
import AWS from "../../assets/images/AWS.png";
import Firebase from "../../assets/images/Firebase.png";
import Electron from "../../assets/images/Electron.png";

import client1 from "../../assets/images/testimonial-1.png";
import client2 from "../../assets/images/testimonial-2.png";
import client3 from "../../assets/images/testimonial-3.png";

export const AllProjects = [
  {
    id: 1,
    projectName: "Redbox Global",
    projectImg: redbox,
    description:
      "REDBOX gives you realtime news covers all the main asset classes, including equities,fixed income, FX and commodities. Redbox provides you API which can be integrated to your trading platforms. Our algorithms monitors all major newswires,televisions channels,news website,blogs and social media platforms for headlines with market moving potenial.",
    category: ["ReactJs", "Socket.io", "Redux", "NodeJs", "MongoDB"],
  },
  {
    id: 2,
    projectName: "Atilerware",
    projectImg: atelierware,
    description:
      "Ateliware is a platform that streamlines order booking, workforce management, and production control. It features automated reminders, customizable invoices, and production forecasting to ensure timely deliveries and customer satisfaction. Ateliware also offers analytics, prevents revenue leakage, and provides secure data access to optimize operations and enhance productivity.",
    category: ["ReactJs", "Redux", "ExpressJs", "MSSQL"],
  },
  {
    id: 3,
    projectName: "Kutuma",
    projectImg: kutuma,
    description:
      "This parcel delivery platform connects senders with couriers through a bidding system. Users create orders with parcel details, and couriers place bids. Once a bid is accepted, the payment is securely held by the platform until delivery is verified. With built-in insurance, it ensures safe and reliable parcel delivery for both senders and couriers.",
    category: ["ReactJs", "Socket.io", "NodeJs", "MySQL"],
  },
  {
    id: 4,
    projectName: "Web Market",
    projectImg: WebMarket,
    description:
      "This platform provides a diverse range of templates, including Shopify, eCommerce, React, WordPress, and PSD designs. Users can preview designs, view live demos, and access code for seamless integration. With membership options, users gain access to premium templates and exclusive tools, making it easier to build stunning websites and applications efficiently.",
    category: ["ReactJs", "Redux", "ExpressJs", "MongoDB"],
  },
  {
    id: 5,
    projectName: "ParkVission",
    projectImg: Parking,
    description:
      "This parking management system utilizes OpenCV and ANPR technologies to automate vehicle entry and exit logging. It scans number plates, associates them with registered owner IDs, and prints entry details automatically. Designed for apartments with multiple buildings, the system ensures seamless tracking and efficient parking operations without manual intervention",
    category: ["Python", "React", "Flutter"],
  },
  {
    id: 6,
    projectName: "RederralX",
    projectImg: RederralX,
    description:
      "This platform lets users buy and sell coupons for various services. Buyers can find great deals, and sellers can list unused coupons. A secure chat connects the admin, buyer, and seller for smooth collaboration. Payments are held by the admin until the coupon is claimed, ensuring a safe and reliable process. With multiple categories, it's the perfect solution for managing coupons effortlessly.",
    category: ["ReactJs", "Socket.io", "Redux", "NodeJs", "MongoDB"],
  },
  {
    id: 7,
    projectName: "Errands",
    projectImg: Errands,
    description:
      "Errands Inc. is a 24/7 on-demand app connecting users with independent contractors to handle personal or business errands. It’s a smarter, safer, and efficient way to get help instantly or on schedule, empowering people to save time and focus on what matters.",
    category: ["ReactJs", "ExpressJs", "MongoDB", "Flutter"],
  },
  {
    id: 8,
    projectName: "InvoiceTime",
    projectImg: InvoiceTime,
    description:
      "Developed a custom integration for Zoho's cloud suite, connecting Zoho CRM, Zoho Books, and Zoho Projects. This solution streamlined business processes, improved customer management, and enhanced efficiency, providing real-time insights for better decision-making.",
    category: ["ReactJs", "ExpressJs", "Laravel"],
  },
];

export const AllTechnoLogies = [
  {
    id: 1,
    icon: HTML,
    name: "HTML",
  },
  {
    id: 2,
    icon: CSS,
    name: "CSS",
  },
  {
    id: 3,
    icon: JS,
    name: "JS",
  },
  {
    id: 4,
    icon: React,
    name: "React",
  },
  {
    id: 5,
    icon: Redux,
    name: "Redux",
  },
  {
    id: 6,
    icon: Tailwind,
    name: "Tailwind",
  },
  {
    id: 7,
    icon: Mongodb,
    name: "Mongodb",
  },
  {
    id: 8,
    icon: Nodejs,
    name: "Nodejs",
  },
  {
    id: 9,
    icon: Sass,
    name: "Sass",
  },
  {
    id: 10,
    icon: SQL,
    name: "SQL",
  },
  {
    id: 11,
    icon: Express,
    name: "Express",
  },
  {
    id: 12,
    icon: Github,
    name: "Github",
  },
  {
    id: 13,
    icon: Docker,
    name: "Docker",
  },
  {
    id: 14,
    icon: AWS,
    name: "AWS",
  },
  {
    id: 15,
    icon: Firebase,
    name: "Firebase",
  },
  {
    id: 16,
    icon: Electron,
    name: "Electron",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Henry",
    role: "COO",
    review:
      "Amazing attention to detail and creativity! They crafted a visually stunning, user-friendly interface that perfectly matches the brand's identity. Their design work enhances the overall user experience beautifully.",
    image: client1,
  },
  {
    id: 2,
    name: "Fatima",
    role: "Manager",
    review:
      "Highly skilled in backend development, they delivered a robust, efficient system with seamless functionality. Their expertise ensures everything runs smoothly and scales effortlessly to meet future needs.",
    image: client2,
  },
  {
    id: 3,
    name: "Manan Desai",
    role: "Yummy Burp's owner",
    review:
      "An exceptional web developer with unmatched professionalism and technical prowess. From design to backend, they delivered a top-notch website that exceeded expectations and works flawlessly.",
    image: client3,
  },
];
