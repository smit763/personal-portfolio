import redbox from "../../assets/images/Projects/Redbox.png";
import atelierware from "../../assets/images/Projects/Atelierware.png";
import kutuma from "../../assets/images/Projects/kutuma.png";
import WebMarket from "../../assets/images/Projects/WebMarket.png";

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
];
