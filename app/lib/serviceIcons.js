import {
  FaAd, FaAndroid, FaAngular, FaApple, FaAward, FaBars, FaBell, FaBluetooth, FaBolt, FaBookOpen, FaBoxes,
  FaBoxOpen, FaBrain, FaBriefcase, FaBug, FaBuilding, FaBullhorn, FaCameraRetro, FaChartBar, FaChartLine,
  FaChartPie, FaCheckCircle, FaClipboardCheck, FaClipboardList, FaClock, FaCloud, FaCloudUploadAlt,
  FaCode, FaCogs, FaCommentDots, FaComments, FaCreditCard, FaCube, FaDatabase, FaDesktop,
  FaDraftingCompass, FaDrupal, FaEdit, FaEnvelope, FaEnvelopeOpenText, FaEthereum, FaExchangeAlt,
  FaExclamationTriangle, FaEye, FaFacebookF, FaFileAlt, FaFileInvoice, FaFilePdf, FaFilter, FaFlask,
  FaFolderOpen, FaGamepad, FaGlobe, FaGoogle, FaGooglePlay, FaHandshake, FaHashtag, FaHeadset,
  FaIdCard, FaImage, FaImages, FaIndustry, FaInstagram, FaJava, FaLaptop, FaLaptopCode,
  FaLayerGroup, FaLeaf, FaLifeRing, FaLightbulb, FaLink, FaLinkedin, FaListUl, FaLock, FaMagento,
  FaMapMarkedAlt, FaMapMarkerAlt, FaMobile, FaMobileAlt, FaMoneyBillWave, FaMousePointer,
  FaNetworkWired, FaOpencart, FaPaintBrush, FaPalette, FaPencilRuler, FaPenFancy, FaPeopleArrows,
  FaPhp, FaPinterest, FaPlay, FaPoll, FaProjectDiagram, FaPuzzlePiece, FaPython, FaReact,
  FaRegIdBadge, FaRobot, FaRocket, FaRupeeSign, FaSearch, FaServer, FaShareAlt, FaShieldAlt,
  FaShippingFast, FaShopify, FaShoppingBag, FaShoppingCart, FaSitemap, FaSms, FaSwift, FaSync,
  FaSyncAlt, FaTabletAlt, FaTachometerAlt, FaThumbsUp, FaTools, FaTwitter, FaUserCheck, FaUsers, FaUserShield,
  FaUserTie, FaVectorSquare, FaVial, FaVideo, FaWordpress, FaCircle,
} from "react-icons/fa";
import {
  SiAndroid, SiAngular, SiCplusplus, SiEthereum, SiFlutter, SiGooglecloud, SiHaskell, SiIonic,
  SiJulia, SiNextdotjs, SiNodedotjs, SiNumpy, SiPhp, SiPython, SiReact, SiTensorflow, SiUnity,
  SiVuedotjs, SiWordpress,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

/* CMS records store icons as plain kebab-case names (e.g. "paint-brush",
   "shopping-cart") since JSON can't hold a JSX element. This maps that
   string back to the actual react-icons component the local hardcoded
   fallback pages already render directly (e.g. <FaPaintBrush/>).

   Deliberately a curated map of NAMED imports (not `import * as FaIcons`)
   — react-icons/fa alone is ~1600 components and react-icons/si is ~3000;
   a wildcard import (or dynamic `FaIcons["Fa"+x]` lookup against one)
   defeats tree-shaking and pulls the entire library into every page that
   renders a CMS-sourced icon, which previously bloated per-page bundles
   from ~170KB to 500KB+. Named imports of only the ~125 icons actually
   referenced across the seeded CMS content keep bundles at their normal
   size. Add a new entry here (and import it above) when a new icon name
   is introduced via the admin — an unmapped name falls back to a generic
   circle glyph rather than breaking the build. */
const ICONS = {
  ad: FaAd, android: FaAndroid, angular: FaAngular, apple: FaApple, bars: FaBars, bell: FaBell,
  bluetooth: FaBluetooth, bolt: FaBolt, "book-open": FaBookOpen, boxes: FaBoxes,
  "box-open": FaBoxOpen, briefcase: FaBriefcase, bug: FaBug, building: FaBuilding,
  bullhorn: FaBullhorn, "camera-retro": FaCameraRetro, "chart-bar": FaChartBar,
  "chart-line": FaChartLine, "chart-pie": FaChartPie, "check-circle": FaCheckCircle,
  "clipboard-check": FaClipboardCheck, "clipboard-list": FaClipboardList, clock: FaClock,
  cloud: FaCloud, "cloud-upload-alt": FaCloudUploadAlt, code: FaCode, cogs: FaCogs,
  "comment-dots": FaCommentDots, comments: FaComments, cplusplus: SiCplusplus,
  "credit-card": FaCreditCard, cube: FaCube, database: FaDatabase, desktop: FaDesktop,
  "drafting-compass": FaDraftingCompass, drupal: FaDrupal, edit: FaEdit, envelope: FaEnvelope,
  "envelope-open-text": FaEnvelopeOpenText, ethereum: FaEthereum, "exchange-alt": FaExchangeAlt,
  "exclamation-triangle": FaExclamationTriangle, eye: FaEye, "facebook-f": FaFacebookF,
  "file-alt": FaFileAlt, "file-invoice": FaFileInvoice, "file-pdf": FaFilePdf, filter: FaFilter,
  flask: FaFlask, flutter: SiFlutter, "folder-open": FaFolderOpen, gamepad: FaGamepad,
  globe: FaGlobe, google: FaGoogle, googlecloud: SiGooglecloud, "google-play": FaGooglePlay,
  handshake: FaHandshake, hashtag: FaHashtag, haskell: SiHaskell, headset: FaHeadset,
  "id-card": FaIdCard, image: FaImage, images: FaImages, industry: FaIndustry, instagram: FaInstagram,
  ionic: SiIonic, java: FaJava, laptop: FaLaptop, "laptop-code": FaLaptopCode,
  "layer-group": FaLayerGroup, leaf: FaLeaf,
  "life-ring": FaLifeRing, lightbulb: FaLightbulb, linkedin: FaLinkedin, "list-ul": FaListUl,
  lock: FaLock, magento: FaMagento, "map-marked-alt": FaMapMarkedAlt,
  "map-marker-alt": FaMapMarkerAlt, mobile: FaMobile, "mobile-alt": FaMobileAlt,
  "money-bill-wave": FaMoneyBillWave, "mouse-pointer": FaMousePointer,
  "network-wired": FaNetworkWired, numpy: SiNumpy, opencart: FaOpencart,
  "paint-brush": FaPaintBrush, palette: FaPalette, "pencil-ruler": FaPencilRuler,
  "pen-fancy": FaPenFancy, "people-arrows": FaPeopleArrows, php: FaPhp, pinterest: FaPinterest,
  play: FaPlay, poll: FaPoll, "project-diagram": FaProjectDiagram, "puzzle-piece": FaPuzzlePiece,
  python: FaPython, react: FaReact, "reg-id-badge": FaRegIdBadge, robot: FaRobot, rocket: FaRocket,
  "rupee-sign": FaRupeeSign, search: FaSearch, server: FaServer, "share-alt": FaShareAlt,
  "shield-alt": FaShieldAlt, "shipping-fast": FaShippingFast, shopify: FaShopify,
  "shopping-bag": FaShoppingBag, "shopping-cart": FaShoppingCart, sitemap: FaSitemap, sms: FaSms,
  swift: FaSwift, sync: FaSync, "sync-alt": FaSyncAlt, "tablet-alt": FaTabletAlt,
  "tachometer-alt": FaTachometerAlt, tools: FaTools, twitter: FaTwitter, unity: SiUnity,
  "user-check": FaUserCheck, users: FaUsers, "user-shield": FaUserShield, "user-tie": FaUserTie,
  "vector-square": FaVectorSquare, vial: FaVial, video: FaVideo, wordpress: FaWordpress,
  "x-twitter": FaXTwitter, award: FaAward, brain: FaBrain, link: FaLink, "thumbs-up": FaThumbsUp,
  /* "-si" suffixed keys are the Simple Icons brand-mark variant of a name
     that already means a different (Font Awesome) glyph above — used only
     by the /trending-technology tech-icon bubbles, which render the actual
     brand logos rather than a generic Font Awesome equivalent. */
  "android-si": SiAndroid, "react-si": SiReact, "php-si": SiPhp, "wordpress-si": SiWordpress,
  "angular-si": SiAngular, "ethereum-si": SiEthereum, "python-si": SiPython,
  nextdotjs: SiNextdotjs, vuedotjs: SiVuedotjs, nodedotjs: SiNodedotjs,
  tensorflow: SiTensorflow, julia: SiJulia,
};

export function getServiceIcon(name) {
  const Icon = (name && ICONS[name]) || FaCircle;
  return <Icon />;
}
