import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaChartLine,
  FaShieldAlt,
  FaMoneyBillWave,
  FaLock,
  FaCheckCircle,
  FaBitcoin,
  FaEthereum,
  FaDollarSign,
  FaEuroSign,
  FaYenSign,
  FaPoundSign,
  FaRupeeSign,
  FaWonSign,
  FaLiraSign,
} from "react-icons/fa";
import {
  SiKucoin,
  SiLitecoin,
  SiDogecoin,
  SiSolana,
  SiTether,
  SiRipple,
} from "react-icons/si";

export const CRYPTO_ICONS = [
  { Icon: FaBitcoin, color: "#F7931A" },
  { Icon: FaEthereum, color: "#3C3C3D" },
  { Icon: SiKucoin, color: "#31C485" },
  { Icon: SiLitecoin, color: "#A6A9AA" },
  { Icon: SiDogecoin, color: "#C2A633" },
  { Icon: SiSolana, color: "#9945FF" },
  { Icon: SiTether, color: "#26A17B" },
  { Icon: SiRipple, color: "#0085C0" },
];

export const FOREX_ICONS = [
  { Icon: FaDollarSign, color: "#28A745" },
  { Icon: FaEuroSign, color: "#0077C8" },
  { Icon: FaYenSign, color: "#FF4500" },
  { Icon: FaPoundSign, color: "#2C3E50" },
  { Icon: FaRupeeSign, color: "#2D2D72" },
  { Icon: FaWonSign, color: "#00A8E8" },
  { Icon: FaLiraSign, color: "#C0392B" },
];

export const NAV_OPTIONS = {
  Home: "home",
  Services: "services",
  Pricing: "pricing",
  Contact: "contact",
};

export const GOVERNANCE_OUTLINE = [
  "Always in sync",
  "Advance analytics",
  "Sales tracker",
  "Sales optimize",
];

export const FEATURES_HEADING = "Three Problems, One Solution: ManagEaze";

export const WHAT_WE_OFFER = [
  {
    Icon: FaChartLine,
    heading: "PSX",
    description:
      "Navigate the complexities of the PSX with our expert analysis, providing you with valuable stock picks and market updates to maximize your returns.",
  },
  {
    Icon: FaChartLine,
    heading: "Forex Analysis & Signals",
    description:
      "Stay informed with our daily and weekly forex market breakdowns, including technical analysis and trade signals tailored for both beginners and experienced traders.",
  },
  {
    Icon: FaChartLine,
    heading: "PSX",
    description:
      "Navigate the complexities of the PSX with our expert analysis, providing you with valuable stock picks and market updates to maximize your returns.",
  },
];

export const STATS = [
  { Icon: FaChartLine, text: "0.0 Pips", subText: "Raw Spread" },
  { Icon: FaMoneyBillWave, text: "1,000+", subText: "CFDs Products" },
  { Icon: FaLock, text: "Fast", subText: "Deposit & Withdrawal" },
  { Icon: FaShieldAlt, text: "Safe", subText: "Fully Regulated Broker" },
  { Icon: FaCheckCircle, text: "100%", subText: "Segregation Client Funds" },
];

export const SOCIAL_ICONS = [
  { Icon: FaFacebook, label: "Facebook", link: "https://facebook.com" },
  { Icon: FaInstagram, label: "Instagram", link: "https://instagram.com" },
  { Icon: FaTwitter, label: "Twitter", link: "https://twitter.com" },
];

export const SUBSCRIPTION_PLANS = {
  "Policy Plan": {
    description: "Policy document creation and approval workflow",
    options: [
      "By industry (library)",
      "Multilingual",
      "Templates",
      "Customisation/ Import",
      "Hierarchy Approval",
      "Integration",
    ],
  },
  "Governance Plan": {
    description: "Governance workflow for Board and committees underneath",
    options: [
      "By industry (library)",
      "Multilingual",
      "Templates",
      "Customisation/ Import",
      "Hierarchy Approval",
      "Integration",
    ],
  },
  "Knowledge Base & AI": {
    description:
      "Harness the power of AI to get your decisions and work done more efficiently.",
    options: [
      "By industry (library)",
      "Multilingual",
      "Templates",
      "Customisation/ Import",
      "Hierarchy Approval",
      "Integration",
    ],
  },
};
