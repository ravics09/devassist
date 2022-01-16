import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Zoom, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaUsersCog } from "react-icons/fa";
import { GiConqueror } from "react-icons/gi";
import { MdMobileScreenShare } from "react-icons/md";
import {
  ImFont,
  ImHome2,
  ImSearch,
  ImPencil,
  ImPlay,
  ImImage,
  ImCogs,
  ImWrench,
  ImDatabase,
} from "react-icons/im";
import { SiYoutubestudio } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeStyle from "./homeStyle.module.css";
import PageNotFound from "./../../assets/images/underconstruction.png";

SwiperCore.use([Zoom, Pagination, Autoplay, Navigation]);

const UIInspiration = [
  {
    id: 1,
    category: "UIInspiration",
    title: "Mobbin",
    description: "Discover the latest iOS UI design patterns.",
    link: "https://mobbin.design/",
    logo: "5b7731a5976c9e62e007b921_1",
  },
  {
    id: 2,
    category: "UIInspiration",
    title: "Rowlab",
    description:
      "Hand-picked collection of Android apps screenshots with mobile patterns for your inspiration.",
    link: "https://rowlab.xyz/mobile-patterns",
    logo: "5fc3c3490af890e92517f796_Rowlab",
  },
  {
    id: 3,
    category: "UIInspiration",
    title: "App Fuel",
    description: "UX, growth, and design inspiration, all in one place.",
    link: "https://www.theappfuel.com/screens",
    logo: "61143c4bfa6ca6fb57fc54ac_1 (5)",
  },
  {
    id: 4,
    category: "UIInspiration",
    title: "Mthds",
    description:
      "Mobile UI inspiration for accessible, functional, production ready design.",
    link: "https://mthds.co/",
    logo: "5f32643235f94f0ce4160c2f_mthds",
  },
  {
    id: 5,
    category: "UIInspiration",
    title: "Scrnshts",
    description: "A collection of the finest app store design screenshots.",
    link: "https://scrnshts.club/",
    logo: "5cab437fd636b7a0fd620fc0_Screenshot club",
  },
  {
    id: 6,
    category: "UIInspiration",
    title: "UI Sources",
    description:
      "Discover the best interactions from the best designed and top grossing apps.",
    link: "https://www.uisources.com/",
    logo: "5b75ac3957fd635e27502171_1",
  },
  {
    id: 7,
    category: "UIInspiration",
    title: "Pttrns",
    description:
      "A collection of design patterns, resources and inspiration for iOS and Android",
    link: "https://pttrns.com/",
    logo: "5b8e7f012d8731dfa86f2ba4_Pttrns",
  },
  {
    id: 8,
    category: "UIInspiration",
    title: "UI Jar",
    description: "Handpicked design inspiration for your real life projects.",
    link: "https://uijar.com/posts?categories=2",
    logo: "5c1d585e9279b375df22d24a_uijar",
  },
  {
    id: 9,
    category: "UIInspiration",
    title: "Design Vault",
    description: "UI patterns and design inspiration from real products.",
    link: "https://designvault.io/",
    logo: "5f339cf67d31a9f18a7cfac7_DesignVault",
  },
  {
    id: 10,
    category: "UIInspiration",
    title: "Collect UI",
    description:
      "Daily inspiration collected from daily ui archive and beyond.",
    link: "http://collectui.com/",
    logo: "5abecd830c89187318a31198_1 (31)",
  },
  {
    id: 11,
    category: "UIInspiration",
    title: "Page Flows",
    description:
      "User flow videos screenshots to inspire you when you're stuck.",
    link: "https://pageflows.com/",
    logo: "5d76b9862b83855a9ef01eb3_Page Flows",
  },
  {
    id: 12,
    category: "UIInspiration",
    title: "UI Movement",
    description:
      "A community of design enthusiasts who share the most interesting and unique UI designs.",
    link: "https://uimovement.com/",
    logo: "5abecc4eb62e42bb31cc9e05_1 (29)",
  },
  {
    id: 13,
    category: "UIInspiration",
    title: "UI Garage",
    description: "Specific design patterns for Web, iOS, Android and Mac.",
    link: "http://uigarage.net/",
    logo: "5abfb3acb3e0cb889a71ff97_UI garage 2",
  },
  {
    id: 14,
    category: "UIInspiration",
    title: "Dribbble",
    description:
      "Shots from popular and up and coming designers in the Dribbble community.",
    link: "https://dribbble.com/search?q=ui",
    logo: "5abeca9d0c89182707a3109c_1 (28)",
  },
  {
    id: 15,
    category: "UIInspiration",
    title: "Behance",
    description:
      "Showcase and discover the latest work from top online portfolios by creative professionals.",
    link: "https://www.behance.net/",
    logo: "5abeca01d0f2644a70fae87f_1 (27)",
  },
  {
    id: 16,
    category: "UIInspiration",
    title: "Pinterest",
    description: "Discover beautiful UI projects across web and mobile.",
    link: "https://www.pinterest.co.uk/",
    logo: "5abecba2b62e423287cc9dde_a",
  },
  {
    id: 17,
    category: "UIInspiration",
    title: "Interfaces.pro",
    description: "Brand-focused collection of UI design examples",
    link: "https://interfaces.pro/",
    logo: "5b81d5d6b4023952061227fc_Interfaces.pro",
  },
  {
    id: 18,
    category: "UIInspiration",
    title: "Awwwards",
    description:
      "Recognising talent of the best developers, designers and web agencies in the world.",
    link: "https://www.awwwards.com/",
    logo: "5abaa6d9c827a636c12822a0_awwwards",
  },
  {
    id: 19,
    category: "UIInspiration",
    title: "Best Website Gallery",
    description:
      "The best website gallery for your daily Inspiration since 2008!",
    link: "https://bestwebsite.gallery/",
    logo: "5abec8ed7e9bbe6e6673cfc0_1 (24)",
  },
  {
    id: 20,
    category: "UIInspiration",
    title: "Good Web Design",
    description: "The best landing pages, organised by section.",
    link: "http://www.goodweb.design/",
    logo: "5b7f0ebf224aeb058634b66b_Goodwebdesign",
  },
  {
    id: 21,
    category: "UIInspiration",
    title: "Minimal Gallery",
    description:
      "Daily curated, hand-picked collection of minimal web design inspiration.",
    link: "http://minimal.gallery/",
    logo: "5b7aa3ee27f578841b14d411_1",
  },
  {
    id: 22,
    category: "UIInspiration",
    title: "The Gallery",
    description: "A curated collection of minimal websites.",
    link: "https://thegallery.io/",
    logo: "5b7fcaef0566a12c2d8c4cca_Thegallery.io",
  },
  {
    id: 23,
    category: "UIInspiration",
    title: "Siiimple",
    description: "A minimalist css design gallery.",
    link: "https://siiimple.com/",
    logo: "5b826f6fb402390ae5126f3f_Siiimple",
  },
  {
    id: 24,
    category: "UIInspiration",
    title: "Httpster",
    description:
      "Totally rocking websites made by people from all over the world.",
    link: "https://httpster.net/",
    logo: "5b7d1f039609727691da4291_Httpster",
  },
  {
    id: 25,
    category: "UIInspiration",
    title: "Pages",
    description: "Curated directory of the best webpage inspiration.",
    link: "http://www.pages.xyz/type/product",
    logo: "5abec92f7e9bbe058573cfc6_1 (25)",
  },
  {
    id: 26,
    category: "UIInspiration",
    title: "Lapa",
    description:
      "The best landing page design inspiration from around the web.",
    link: "https://www.lapa.ninja/",
    logo: "5b7b23a0087aa0871b955c5b_1",
  },
  {
    id: 27,
    category: "UIInspiration",
    title: "Nicely Done",
    description:
      "Showcase of the best digital products, specific patterns and inspiration.",
    link: "http://nicelydone.club/patterns/",
    logo: "5b7ea37a958ab30b18eb0b4a_Nicely done",
  },
  {
    id: 28,
    category: "UIInspiration",
    title: "Landbook",
    description:
      "Design gallery with the best and most carefully collected websites.",
    link: "https://land-book.com/",
    logo: "5b7b113fe9f2d52906561b6a_1",
  },
  {
    id: 29,
    category: "UIInspiration",
    title: "UXUI Monster",
    description:
      "A gallery featuring the best landing page examples from around the world.",
    link: "https://uxui.monster/",
    logo: "5e617280b93bb272801607ec_UXUI",
  },
  {
    id: 30,
    category: "UIInspiration",
    title: "Webframe",
    description: "800 web app screenshots for inspiration.",
    link: "https://webframe.xyz/",
    logo: "5cf046a7ac9172352d15a4de_Webframe",
  },
  {
    id: 31,
    category: "UIInspiration",
    title: "One Page Love",
    description:
      "A design gallery showcasing the best Single Page websites, templates and resources.",
    link: "https://onepagelove.com/",
    logo: "5c9e5e3c215b2b4c92b58e63_Onepagelove",
  },
  {
    id: 32,
    category: "UIInspiration",
    title: "Pixels",
    description:
      "A curation of beautiful website designs that is updated every day.",
    link: "https://klart.io/pixels",
    logo: "5b919936c2b16fff09703a76_1",
  },
  {
    id: 33,
    category: "UIInspiration",
    title: "CSSDSGN",
    description: "Web Design inspiration.",
    link: "https://www.cssdsgn.com/",
    logo: "5b9007937a8674016d071868_cssdsgn",
  },
  {
    id: 34,
    category: "UIInspiration",
    title: "SiteSee",
    description: "A curated gallery of beautiful, modern websites.",
    link: "https://sitesee.co/",
    logo: "5b826fc82b7a393039b45bad_Sitesee",
  },
  {
    id: 35,
    category: "UIInspiration",
    title: "Site Inspire",
    description:
      "A CSS gallery and showcase of the best web design inspiration.",
    link: "https://www.siteinspire.com/",
    logo: "5abec8667e9bbe739073cfab_1",
  },
  {
    id: 36,
    category: "UIInspiration",
    title: "Bestfolios",
    description:
      "The largest collection of the best UI,UX designer portfolios and resumes.",
    link: "https://www.bestfolios.com/portfolios",
    logo: "5abec74461e3654f55ad4055_1 (22)",
  },
  {
    id: 37,
    category: "UIInspiration",
    title: "Really Good Emails",
    description: "The best email designs in the universe.",
    link: "https://reallygoodemails.com/",
    logo: "5b7ea0f5a700d793ad9d447a_Really good emails",
  },
  {
    id: 38,
    category: "UIInspiration",
    title: "Ecomm.design",
    description:
      "Browse our collection of the top 2050 eCommerce websites by Platform, Categories, Technologies Traffic.",
    link: "https://ecomm.design/",
    logo: "5b9fb820e698fc613055009b_Ecom.design",
  },
  {
    id: 39,
    category: "UIInspiration",
    title: "SaaS Pages",
    description:
      "A collection of the best landing pages with a focus on copywriting and design.",
    link: "https://saaspages.xyz/",
    logo: "5d57139d22070c3efafbe619_Saas",
  },
];

const IconsIllustrations = [
  {
    id: 40,
    category: "IconsIllustrations",
    title: "Feather",
    description: "A collection of simply beautiful open source icons.",
    link: "https://feathericons.com/",
    logo: "5b8273f2b4023906421273d7_Feather",
  },
  {
    id: 41,
    category: "IconsIllustrations",
    title: "Ionicons",
    description: "Beautifully crafted open source icons.",
    link: "https://ionicons.com/",
    logo: "5b82737a947a561cab069e5e_Ionicons",
  },
  {
    id: 42,
    category: "IconsIllustrations",
    title: "Undraw",
    description:
      "Beautiful svg illustrations that you can use completely free.",
    link: "https://undraw.co/illustrations",
    logo: "5b840c3004c85d1d1cd4e1d6_Undraw",
  },
  {
    id: 43,
    category: "IconsIllustrations",
    title: "World Vector Logo",
    description:
      "the largest SVG logo vector collection. No account and unlimited downloads for free.",
    link: "https://worldvectorlogo.com/",
    logo: "5b88161c7f0a4a511e9d8128_World Vector Logo",
  },
  {
    id: 44,
    category: "IconsIllustrations",
    title: "The Noun Project",
    description: "Over a million icons, created by a global community.",
    link: "https://thenounproject.com/",
    logo: "5abea9ba6969a253ac04e5ea_1-min (32)",
  },
  {
    id: 45,
    category: "IconsIllustrations",
    title: "3D Bay",
    description: "Free Royalty Free 3D Stock Images.",
    link: "https://clouddevs.com/3dbay/",
    logo: "61143ef05af6776814bf0507_1 (5)",
  },
  {
    id: 46,
    category: "IconsIllustrations",
    title: "Get Waves",
    description:
      "A generative design tool to make unique, beautiful, and organic SVG waves.",
    link: "https://getwaves.io",
    logo: "5d5717e3657940f8867958ad_Waves",
  },
  {
    id: 47,
    category: "IconsIllustrations",
    title: "Eva Icons",
    description:
      "Eva Icons is a pack of 480 delightful icons available for free.",
    link: "https://akveo.github.io/eva-icons/",
    logo: "5be003d742686c0c7a18d42b_Eva Icons",
  },
  {
    id: 48,
    category: "IconsIllustrations",
    title: "Icofont",
    description: "2100+ free icons to spice up your creative designs.",
    link: "https://icofont.com/icons",
    logo: "5bb0a000bf02344acb3a3de7_Icofont",
  },
  {
    id: 49,
    category: "IconsIllustrations",
    title: "Unicons",
    description: "Opensource vector icons and icon-font library.",
    link: "https://iconscout.com/unicons",
    logo: "5c58ca2c0c3ff62c052be342_Icoscout",
  },
  {
    id: 50,
    category: "IconsIllustrations",
    title: "Remix Icon",
    description:
      "A set of open-source neutral-style system symbols elaborately crafted for designers and developers.",
    link: "https://remixicon.com/",
    logo: "5cc0d153277db21bb8c12600_Remix icons",
  },
  {
    id: 51,
    category: "IconsIllustrations",
    title: "Ikonate",
    description:
      "Fully customisable vector icons that are 100% free and open-source. (Scroll on left to export icons).",
    link: "https://www.ikonate.com/",
    logo: "5b9ac2a28f84bf9c3e55914b_Ikonate",
  },
  {
    id: 52,
    category: "IconsIllustrations",
    title: "Box Icons",
    description:
      "Carefully crafted vector icons, perfect for use in your next project, as a web component or font or as SVG's.",
    link: "https://boxicons.com/",
    logo: "5b894ba14a896da03af5faa6_Box Icons",
  },
  {
    id: 53,
    category: "IconsIllustrations",
    title: "ICONSVG",
    description: "Customize generate common SVG icons.",
    link: "https://iconsvg.xyz/",
    logo: "5c6d3b22255b5b47577564a9_ICON SVG",
  },
  {
    id: 54,
    category: "IconsIllustrations",
    title: "Material.io",
    description: "Icons from the official material guidelines.",
    link: "https://material.io/icons/",
    logo: "5abe8b8045c2de7e5a8be329_1-min (30)",
  },
  {
    id: 55,
    category: "IconsIllustrations",
    title: "Icons8",
    description: "Free to download iOS 11 Glyphs.",
    link: "https://icons8.com/ios",
    logo: "5abe8b4545c2de2cbc8be1a2_1-min (29)",
  },
  {
    id: 56,
    category: "IconsIllustrations",
    title: "Fontisto",
    description:
      "Scalable vector icons that can instantly be customized · 616+ free icons.",
    link: "https://www.fontisto.com/icons",
    logo: "5ba20acceb985723d82bd08f_Fontiso",
  },
  {
    id: 57,
    category: "IconsIllustrations",
    title: "Simple Icons",
    description: "Free SVG icons for popular brands.",
    link: "https://simpleicons.org/",
    logo: "5b772d1e8220f46d57d3110b_1",
  },
  {
    id: 58,
    category: "IconsIllustrations",
    title: "Zwicons",
    description: "A simple, carefully designed collection of icons.",
    link: "https://www.zwicon.com/cheatsheet.html",
    logo: "5c765658b23da293be29f4b3_Zwicons",
  },
  {
    id: 59,
    category: "IconsIllustrations",
    title: "Open Peeps",
    description:
      "A hand-drawn illustration library to create scenes of people.",
    link: "https://www.openpeeps.com/",
    logo: "5e5e243eafa1fe0cc6107ea0_1",
  },
  {
    id: 60,
    category: "IconsIllustrations",
    title: "Open Doodles",
    description:
      "A library of sketchy illustrations of people free for personal and commercial use.",
    link: "https://www.opendoodles.com/",
    logo: "5ddc127dcd7d3775f72ce872_Opendoodle",
  },
  {
    id: 61,
    category: "IconsIllustrations",
    title: "Isometric Love",
    description: "Cute isometric objects for designers.",
    link: "https://www.isometriclove.com/",
    logo: "5ce2bc69d0cadb2c7a322028_Isometric Love",
  },
  {
    id: 62,
    category: "IconsIllustrations",
    title: "Illustration Gallery",
    description: "Royalty-free illustrations for your projects.",
    link: "https://gallery.manypixels.co/",
    logo: "5c9a3f0401d0980b957eeb28_Illustration Gallery",
  },
  {
    id: 63,
    category: "IconsIllustrations",
    title: "illlustrations",
    description:
      "Open source illustrations kit. Free for Commercial and Personal Use.",
    link: "https://illlustrations.co/",
    logo: "5ddc35b8b23c0e33f5aa3c40_Illustrations",
  },
  {
    id: 64,
    category: "IconsIllustrations",
    title: "Ouch",
    description: "Free illustrations to class up your projects.",
    link: "https://icons8.com/ouch",
    logo: "5c7901c6be5f9f815705d57a_Ouch",
  },
  {
    id: 65,
    category: "IconsIllustrations",
    title: "Absurd Design",
    description: "Free surrealist illustrations for landing pages.",
    link: "https://absurd.design/",
    logo: "5c77b330ef196873c6beb65a_Absurd Illustrations",
  },
  {
    id: 66,
    category: "IconsIllustrations",
    title: "Humaaans",
    description:
      "A free library to mix- -match illustrations of people. Free for commercial or personal use by Pablo Stanley.",
    link: "https://www.humaaans.com/",
    logo: "5c1d533eabe9ec466245a119_Humaaans",
  },
  {
    id: 67,
    category: "IconsIllustrations",
    title: "Avataaars",
    description:
      "Free online avatar generator for anyone to make their beautiful personal avatar easily!",
    link: "https://getavataaars.com/",
    logo: "5b85c3f0a2c985811b069c6f_Avatars",
  },
  {
    id: 68,
    category: "IconsIllustrations",
    title: "Personas",
    description: "A playful avatar generator for the modern age.",
    link: "https://personas.draftbit.com/",
    logo: "5bcb02a279f044728ac7d50f_Personas",
  },
  {
    id: 69,
    category: "IconsIllustrations",
    title: "Blobmaker",
    description: "Create organic svg shapes in just a few seconds.",
    link: "https://www.blobmaker.app/",
    logo: "5c2e1748765cccf2140d0fa2_Group 40",
  },
  {
    id: 70,
    category: "IconsIllustrations",
    title: "VisualPharm",
    description:
      "400k free icons available for free download in SVG and PNG. One-click download.",
    link: "https://visualpharm.com/",
    logo: "5b9ad08d57f5435e04b4db38_VisualPharm",
  },
  {
    id: 71,
    category: "IconsIllustrations",
    title: "Orion",
    description:
      "8613 Free SVG, PNG Icons. Search, edit and download our highly flexible Icons.",
    link: "https://orioniconlibrary.com/app",
    logo: "5b75c4595122a921f1a66655_1",
  },
  {
    id: 72,
    category: "IconsIllustrations",
    title: "Jam Icons",
    description: "890+ handcrafted icons to make your apps websites awesome.",
    link: "https://jam-icons.com/",
    logo: "5b7ad722b7b4d9186cc6995f_1",
  },
  {
    id: 73,
    category: "IconsIllustrations",
    title: "Cursor.in",
    description: "SVG Mac cursor downloads.",
    link: "http://cursor.in/",
    logo: "5b88120c642f4d6853f9e003_Cursor.in",
  },
  {
    id: 74,
    category: "IconsIllustrations",
    title: "Iconstore",
    description:
      "A library of free vector icons for personal and commercial projects.",
    link: "https://iconstore.co/",
    logo: "5b81a1f4947a56d3e3064223_Icons store",
  },
  {
    id: 75,
    category: "IconsIllustrations",
    title: "Emojipedia",
    description: "Browse every emoji by name or platform.",
    link: "https://emojipedia.org/",
    logo: "5abe8a84e74775afb8012f24_1-min (26)",
  },
  {
    id: 76,
    category: "IconsIllustrations",
    title: "Streamline Emoji",
    description:
      "780+ Free Vector Emoji's. Just right click and save as an SVG.",
    link: "http://emoji.streamlineicons.com/",
    logo: "5baa0359db345024a3b15190_Streamline emojis",
  },
  {
    id: 77,
    category: "IconsIllustrations",
    title: "Icons Bro",
    description: "885+ free icons grouped in 27 collections.",
    link: "https://www.iconbros.com/",
    logo: "5aba6eb1c827a64dbf27ec94_iconsbro",
  },
  {
    id: 78,
    category: "IconsIllustrations",
    title: "Iconmonstr",
    description: "Discover 4323+ free icons in 302 collections.",
    link: "https://iconmonstr.com/",
    logo: "5ab81490dc7441bae451ffa9_iconmonstr",
  },
  {
    id: 79,
    category: "IconsIllustrations",
    title: "Linia",
    description: "A free outline iconset featuring 730+ Icons.",
    link: "http://linea.io/",
    logo: "5b9abb174802f6d6739c356d_Linia",
  },
  {
    id: 80,
    category: "IconsIllustrations",
    title: "Batch",
    description:
      "343 icons for web and user interface designers by @adamwhitcroft.",
    link: "http://adamwhitcroft.com/batch/",
    logo: "5abe89f155d98185b9d04a62_1-min (24)",
  },
  {
    id: 81,
    category: "IconsIllustrations",
    title: "Metrize Icons",
    description:
      "Free Collection of 300 Metro-Style Icons for Designers and Developers.",
    link: "http://www.alessioatzeni.com/metrize-icons/",
    logo: "5b8128b592736b53477da32c_Metrize Icons",
  },
  {
    id: 82,
    category: "IconsIllustrations",
    title: "Tilda Icons",
    description: "Free icons for landing pages.",
    link: "https://tilda.cc/free-icons/",
    logo: "5b7fc9b28e9ed8335c952726_Tilda icons",
  },
  {
    id: 83,
    category: "IconsIllustrations",
    title: "To Icon",
    description:
      "Pixel-perfect vector icons with personality, free for your use.",
    link: "https://www.toicon.com/",
    logo: "5b81d05b92736b6cfb7e19c7_To Icons",
  },
  {
    id: 84,
    category: "IconsIllustrations",
    title: "Octicons",
    description: "Downloadable SVG icons made with love by Github.",
    link: "https://octicons.github.com/",
    logo: "5b812bd09a83611dacf3e40b_Octicons",
  },
  {
    id: 85,
    category: "IconsIllustrations",
    title: "Maki Icons",
    description: "An icon set made for map designers.",
    link: "https://www.mapbox.com/maki-icons/",
    logo: "5b812dacb40239724b11bea2_Maki icons",
  },
];

const Fonts = [
  {
    id: 86,
    category: "Fonts",
    title: "Befonts",
    description:
      "Download the best fonts, free fonts for personal or commercial use.",
    link: "https://befonts.com/",
    logo: "5b84535883e69759178a2fff_Befonts",
  },
  {
    id: 87,
    category: "Fonts",
    title: "Google Fonts",
    description:
      "Making the web more beautiful, fast, and open through great typography.",
    link: "https://fonts.google.com/",
    logo: "5abeab45faeecb6621f9f82b_1-min (38)",
  },
  {
    id: 88,
    category: "Fonts",
    title: "Fonts Arena",
    description:
      "Curated typography website with a focus on web typography and high quality free fonts.",
    link: "https://fontsarena.com/#all-fonts",
    logo: "5b85353a23cb5b7ab53310da_Fonts Arena",
  },
  {
    id: 89,
    category: "Fonts",
    title: "Pinspiry",
    description:
      "Collection of free fonts for every design project. Download newest and best high quality free fonts.",
    link: "https://pinspiry.com/category/free-resources/fonts/",
    logo: "5b844787a4355bbe85fdc15a_Pinspinery",
  },
  {
    id: 90,
    category: "Fonts",
    title: "Fontain",
    description:
      "A selection of free/libre/open source fonts together with their source files.",
    link: "https://www.fontain.org/",
    logo: "5b8529fd4bdbab71913fa996_Fontain",
  },
  {
    id: 91,
    category: "Fonts",
    title: "Inter UI Font Family",
    description:
      "A free typeface specially designed for user interfaces with focus on high legibility.",
    link: "https://rsms.me/inter/",
    logo: "5b87a90730071b5c6da8d75f_The Inter UI Font Family",
  },
  {
    id: 92,
    category: "Fonts",
    title: "Brand New Roman",
    description:
      "Created by experimental creative studio Hello Velocity. The most corporate Corporate Font ever created.",
    link: "https://brandnewroman.com/",
    logo: "5b8e6042cc1b5ff5ffd1acff_Brand New Roman",
  },
  {
    id: 93,
    category: "Fonts",
    title: "Free Script Fonts",
    description:
      "Find free version of the Latest Script Fonts · Brush Script · Cursive · Calligraphy And Wedding Script Fonts.",
    link: "https://www.freescriptfonts.net/",
    logo: "5b853785b978e430bb3314fb_Free Script Fonts",
  },
  {
    id: 94,
    category: "Fonts",
    title: "Smart Fonts",
    description:
      "Over 50,000 free and purchasable fonts in one place with smart searching tools.",
    link: "https://smartfonts.com/fonts?license=Free",
    logo: "5b852e4123cb5b41a533003b_Smartfonts",
  },
  {
    id: 95,
    category: "Fonts",
    title: "Fontfabric",
    description:
      "An independent type foundry which was created by designer Svet Simov.",
    link: "https://www.fontfabric.com/category/free/",
    logo: "5abeaac720009f65cd400f21_1-min (36)",
  },
  {
    id: 96,
    category: "Fonts",
    title: "Free Typography",
    description:
      "The best free fonts, typefaces and typography for free download.",
    link: "https://freetypography.com/free-fonts/",
    logo: "5abeab09dc2ce3039283037b_1-min (37)",
  },
  {
    id: 97,
    category: "Fonts",
    title: "Unblast",
    description:
      "Selection of hand picked free and premium fonts for various design purposes.",
    link: "https://unblast.com/fonts/",
    logo: "5b7f22a75d34cc3ebdac2ac7_Unblast",
  },
  {
    id: 98,
    category: "Fonts",
    title: "1001freefonts",
    description: "Free licenses for commercial use.",
    link: "http://www.1001fonts.com/sans-serif-fonts.html",
    logo: "5abeaa3edc2ce3496a830268_1-min (34)",
  },
  {
    id: 99,
    category: "Fonts",
    title: "Abstract Fonts",
    description: "Features more than 13500 free fonts.",
    link: "http://www.abstractfonts.com/",
    logo: "5ac01bf761e36537d0adc8f7_1 (49)",
  },
  {
    id: 100,
    category: "Fonts",
    title: "Dafont",
    description: "Archive of freely downloadable fonts.",
    link: "https://www.dafont.com/theme.php?cat=501",
    logo: "5abeaa0617fdd230b84a9c16_1-min (33)",
  },
  {
    id: 101,
    category: "Fonts",
    title: "Urban Font",
    description: "Download Free Fonts and Free Dingbats.",
    link: "https://www.urbanfonts.com/fonts/sans_serif-fonts.htm",
    logo: "5ac014d1bd7b3b656b114e5f_Urban font 2",
  },
  {
    id: 102,
    category: "Fonts",
    title: "Lorum Ipsum Generator",
    description:
      "Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts.",
    link: "https://loremipsum.io/",
    logo: "5b7eca7e1fa86c0baf9c93e5_Lorum ipsum generator",
  },
];

const FontRecognition = [
  {
    id: 103,
    category: "fontrecognition",
    title: "Fonfacetninja",
    description:
      "A free browser extension that lets you inspect any fonts on any website.",
    link: "https://www.fontface.ninja/",
    logo: "5abeac8d6969a2146704eba0_1-min (43)",
  },
  {
    id: 104,
    category: "fontrecognition",
    title: "Fonts In Use",
    description: "A searchable archive of typographic design.",
    link: "https://fontsinuse.com/",
    logo: "5abeac4edd5dbf218f80b5a9_1-min (42)",
  },
  {
    id: 105,
    category: "fontrecognition",
    title: "Ficture",
    description: "The font in use archive that will inspire you.",
    link: "https://ficture.design/",
    logo: "5cd28970562e305cfc77f3f5_Ficture",
  },
  {
    id: 106,
    category: "fontrecognition",
    title: "Font Spark",
    description:
      "Quickly discover the best fonts for your next design project.",
    link: "https://fontspark.app/",
    logo: "5c1d62edad9efa746cac438d_Fontspark",
  },
  {
    id: 107,
    category: "fontrecognition",
    title: "Wordmark.it",
    description: "A useful tool to choose between fonts.",
    link: "https://wordmark.it/",
    logo: "5abf8df6bd7b3b533a10eeda_1 (47)",
  },
  {
    id: 108,
    category: "fontrecognition",
    title: "Fontreach",
    description:
      "FontReach scans the top million sites to show font usage across the web.",
    link: "https://www.fontreach.com/",
    logo: "5abeac1ddc2ce363628303d0_1-min (41)",
  },
];

const ColoursGradients = [
  {
    id: 109,
    category: "coloursgradients",
    title: "Picular",
    description: "Google, but for colours.",
    link: "https://picular.co/",
    logo: "5b7dd3d26c067d3b9bb58acd_Picular",
  },
  {
    id: 110,
    category: "coloursgradients",
    title: "Color Hunt",
    description:
      "Curated collection of beautiful colour palettes, updated daily.",
    link: "http://colorhunt.co/",
    logo: "5b7745f8848784d9888e2ea7_1",
  },
  {
    id: 111,
    category: "coloursgradients",
    title: "ColorWise",
    description:
      "Colour palettes from the most popular products on Product Hunt.",
    link: "https://colorwise.io/",
    logo: "5b76f01fd79b52692e9c0103_1",
  },
  {
    id: 112,
    category: "coloursgradients",
    title: "Colorsinspo",
    description:
      "Thousands of beautiful colour palettes you can use it directly by one click.",
    link: "https://colorsinspo.com/",
    logo: "5e6550fcaf40022a7ea5bde6_TrendyPalletes",
  },
  {
    id: 113,
    category: "coloursgradients",
    title: "Color Palettes",
    description:
      "Thousands of trendy colour palettes in a curated collection that is updated daily.",
    link: "https://colorpalettes.com/new",
    logo: "5b9a32992d798e848dc6f701_Trendypalettes",
  },
  {
    id: 114,
    category: "coloursgradients",
    title: "Randoma11y",
    description: "Curate beautiful colour palettes that are a11y friendly.",
    link: "https://randoma11y.com",
    logo: "5d571a5b062affee7fc5a5b4_Randoma117",
  },
  {
    id: 115,
    category: "coloursgradients",
    title: "ColorDrop",
    description: "A collection of great looking colour palettes.",
    link: "https://colordrop.io/",
    logo: "5abe87ae54f5bf77a500890b_1-min (16)",
  },
  {
    id: 116,
    category: "coloursgradients",
    title: "Hex Palette",
    description:
      "A free platform to help designers find the right colour combinations for their next project.",
    link: "https://hexpalette.com/popular",
    logo: "5e655281bc2ae53ebe1ec7fc_AAA",
  },
  {
    id: 117,
    category: "coloursgradients",
    title: "Colors and Fonts",
    description: "A curated library of colours, fonts and resources.",
    link: "https://www.colorsandfonts.com/",
    logo: "5e662d93af400245f9ab24c5_C123",
  },
  {
    id: 118,
    category: "coloursgradients",
    title: "HueSnap",
    description:
      "Create and share colour palettes. Colour inspiration for creatives around the world.",
    link: "https://www.huesnap.com/",
    logo: "5ba20ef207a5dcb356c4b08a_Huesnap",
  },
  {
    id: 119,
    category: "coloursgradients",
    title: "Schemecolor",
    description:
      "A collection of colour schemes which submitted by people from all over the world.",
    link: "https://www.schemecolor.com/",
    logo: "5ba8a0d4fb278d48c075adbd_Schemecolor",
  },
  {
    id: 120,
    category: "coloursgradients",
    title: "Colorbox",
    description:
      "A tool to build colour systems for accessible UIs that scale. Open-sourced by Lyft's design team.",
    link: "https://www.colorbox.io/",
    logo: "5ba89e9d2756cb19d8d3a9bf_Colorbox",
  },
  {
    id: 121,
    category: "coloursgradients",
    title: "ColorSpace",
    description:
      "Find the perfect matching colour scheme for your next project! Generate colour palettes and gradients.",
    link: "https://mycolor.space/",
    logo: "5b8d922351c88f9f41872445_Color Space",
  },
  {
    id: 122,
    category: "coloursgradients",
    title: "Palettable",
    description:
      "Generate beautiful colour palettes using the knowledge of millions of designers.",
    link: "https://www.palettable.io/",
    logo: "5b9f6c78fb9e093dba373f24_Palettable",
  },
  {
    id: 123,
    category: "coloursgradients",
    title: "Material Palette",
    description: "Colours are taken from Google's Material Design Guidelines.",
    link: "https://www.materialpalette.com/colors",
    logo: "5abe87e88a18cd7878c4388d_1-min (17)",
  },
  {
    id: 124,
    category: "coloursgradients",
    title: "Coolors",
    description: "Generate perfect colour combinations for your designs.",
    link: "https://coolors.co/",
    logo: "5abe888be747758407012dc9_1-min (20)",
  },
  {
    id: 125,
    category: "coloursgradients",
    title: "Colourcode",
    description:
      "An online designer tool, which allows you to easily and intuitively combine colours.",
    link: "https://colourco.de/",
    logo: "5b81b62446483e03c85e08c7_colourcode",
  },
  {
    id: 126,
    category: "coloursgradients",
    title: "BrandColors",
    description: "Largest collection of official brand colours.",
    link: "https://brandcolors.net/",
    logo: "5abe88c0b37d96548077bcc1_1-min (21)",
  },
  {
    id: 127,
    category: "coloursgradients",
    title: "Pigment",
    description: "Find a beautiful, free colour palette in seconds.",
    link: "https://pigment.shapefactory.co/",
    logo: "5abe877354f5bf62410088f1_1-min (15)",
  },
  {
    id: 128,
    category: "coloursgradients",
    title: "Duotone",
    description:
      "Find beautiful free duotone images to use in any project, or make custom duotone images by uploading your own image.",
    link: "https://duotone.shapefactory.co/",
    logo: "5b8c33ff012ec39d46c70b90_Duotone",
  },
  {
    id: 129,
    category: "coloursgradients",
    title: "Cool Backgrounds",
    description:
      "beautifully curated selection of cool backgrounds that you can add to blogs websites.",
    link: "https://coolbackgrounds.io/",
    logo: "5b76b071d773c6c53c4d10dd_1 (74)",
  },
  {
    id: 130,
    category: "coloursgradients",
    title: "Mesh Gradient",
    description: "Create beautiful gradients.",
    link: "https://meshgradient.com/",
    logo: "5e6793a991725d1c10068da4_Mesh",
  },
  {
    id: 131,
    category: "coloursgradients",
    title: "LS Freebies",
    description: "100 mesh gradients in .sketch, , .ai, .jpg, .eps.",
    link: "https://lstore.graphics/meshgradients/",
    logo: "5b80c85ab775a948396642f9_Mesh Gradients",
  },
  {
    id: 132,
    category: "coloursgradients",
    title: "Cool Hue",
    description:
      "Coolest handpicked Gradient Hues and Swatches for your next super amazing stuff.",
    link: "https://webkul.github.io/coolhue/",
    logo: "5b86f98dab29db0040335e7f_Colour Hue",
  },
  {
    id: 133,
    category: "coloursgradients",
    title: "Gradient Hunt",
    description:
      "Thousands of trendy colour gradients in a curated collection that is updated daily.",
    link: "https://gradienthunt.com/",
    logo: "5b774b608487840ef08e3a7b_1 (77)",
  },
  {
    id: 134,
    category: "coloursgradients",
    title: "Grabient",
    description: "Beautiful and simple UI for generating web gradients.",
    link: "https://www.grabient.com/",
    logo: "5b7e6f8a24b7d2bf4647e75b_Grabient",
  },
  {
    id: 135,
    category: "coloursgradients",
    title: "WebGradients",
    description: "A free collection of 180 linear gradients.",
    link: "https://webgradients.com/",
    logo: "5b7745a9d0e5786a7a1181c9_1",
  },
  {
    id: 136,
    category: "coloursgradients",
    title: "Gradients.Party",
    description:
      "A curated collection of gradients specifically for buttons in UI.",
    link: "https://gradients.party/",
    logo: "5b8d2aa086d7e6a53b087e84_Graident.party",
  },
  {
    id: 137,
    category: "coloursgradients",
    title: "Blend",
    description: "Create and customise beautiful CSS3 gradients.",
    link: "http://www.colinkeany.com/blend/",
    logo: "5abbfd4e1380e09edbc3e3f2_Blend",
  },
  {
    id: 138,
    category: "coloursgradients",
    title: "UI Gradients",
    description: "Colour gradients for designers and developers.",
    link: "https://uigradients.com/",
    logo: "5b8d97e45039bc66f292853c_UI Gradients",
  },
];

const StockVideos = [
  {
    id: 139,
    category: "stockvideos",
    title: "Mixkit",
    description: "High-quality stock videos that are completely free.",
    link: "https://mixkit.co/free-stock-video/",
    logo: "5c5af682300f9376b0e094cc_Mixkit",
  },
  {
    id: 140,
    category: "stockvideos",
    title: "Life Of Vids",
    description: "Free videos, clips and loops.",
    link: "https://www.lifeofvids.com/all",
    logo: "5e66305203b9e549dbd8b091_Lovids",
  },
  {
    id: 141,
    category: "stockvideos",
    title: "Pexels Videos",
    description: "All videos are free for commercial use.",
    link: "https://videos.pexels.com/",
    logo: "5b80d7353116ce5be4a46465_Pexel videos (1)",
  },
  {
    id: 142,
    category: "stockvideos",
    title: "Stockio",
    description: "A great selection of free stock videos to download.",
    link: "https://www.stockio.com/free-videos/",
    logo: "5b90eb02ee183a4f2a9b2241_Stockio",
  },
  {
    id: 143,
    category: "stockvideos",
    title: "Motion Places",
    description: "Free stock footage from around the world.",
    link: "https://www.motionplaces.com/",
    logo: "5e654edb415f1ed40a490801_1 (1)",
  },
  {
    id: 144,
    category: "stockvideos",
    title: "Mazwai",
    description: "Download free creative commons HD video clips footages.",
    link: "http://mazwai.com/#/grid",
    logo: "5b80d5ba2b7a3968d3b376c1_Mazwai",
  },
  {
    id: 145,
    category: "stockvideos",
    title: "Coverr",
    description:
      "Download royalty free and beautiful video footage for your website.",
    link: "http://www.coverr.co/",
    logo: "5b80d7c1947a56750505dbab_Covvver (1)",
  },
  {
    id: 146,
    category: "stockvideos",
    title: "Pixabay Videos",
    description:
      "High quality stock videos you can use for personal and commercial use.",
    link: "https://pixabay.com/videos/",
    logo: "5b80d8529a8361762af3c869_Pixabay Videos (1)",
  },
  {
    id: 147,
    category: "stockvideos",
    title: "Videvo",
    description: "Download free stock video footage.",
    link: "https://www.videvo.net/",
    logo: "5b80d9572b7a393929b37743_Videvo (1)",
  },
  {
    id: 148,
    category: "stockvideos",
    title: "Videezy",
    description:
      "A community of videographers who download and share free HD stock video!",
    link: "https://www.videezy.com/browse",
    logo: "5b81999a947a56f3ad063eec_Videezy",
  },
  {
    id: 149,
    category: "stockvideos",
    title: "Video Monkey",
    description:
      "Free stock video for anything. Use them in whatever you want, 100% license free.",
    link: "http://www.videomonkey.co/",
    logo: "5b80d9d892736bd6057d64bd_Video Monkey",
  },
  {
    id: 150,
    category: "stockvideos",
    title: "Vyoo",
    description: "Beautiful, Free Vertical Videos.",
    link: "https://www.veed.io/vyoo/",
    logo: "5b8c0c2bd92ca05ae6bac19a_Vyoo",
  },
  {
    id: 151,
    category: "stockvideos",
    title: "Unscreen",
    description: "Remove Video Backgrounds 100% Automatically.",
    link: "https://www.unscreen.com/",
    logo: "5e60c3a1dcb1b62024e13657_Unscreen",
  },
  {
    id: 152,
    category: "stockvideos",
    title: "Fugue",
    description:
      "Download free background music for your videos, movies, and websites.",
    link: "https://icons8.com/music/",
    logo: "5bcafd9fd44cf4534b6fb569_Fugue",
  },
];

const StockImages = [
  {
    id: 153,
    category: "stockimages",
    title: "Unsplash",
    description:
      "Beautiful high quality free photos you can download and use for any project.",
    link: "https://unsplash.com/",
    logo: "5b7c5b43ef3ba238bbffa1be_Unsplash",
  },
  {
    id: 154,
    category: "stockimages",
    title: "Pexels",
    description: "Free stock photos you can use everywhere.",
    link: "https://www.pexels.com/",
    logo: "5b7c6d34132497ec812a921a_Pexels",
  },
  {
    id: 155,
    category: "stockimages",
    title: "Moose",
    description: "Stock photos designed to work together for free.",
    link: "https://icons8.com/photos",
    logo: "5b7c5cbd914c19a37aea5e0b_Moose",
  },
  {
    id: 156,
    category: "stockimages",
    title: "Burst",
    description:
      "Stunning stock photos that are free for personal commercial use.",
    link: "https://burst.shopify.com/",
    logo: "5b7c6a34b85be049f0b3c5c0_Burst",
  },
  {
    id: 157,
    category: "stockimages",
    title: "Stockio",
    description: "A great selection of free stock photos you can download. ",
    link: "https://www.stockio.com/free-photos/",
    logo: "5b7d55f985ceb123dba81815_Libreshot (1)",
  },
  {
    id: 158,
    category: "stockimages",
    title: "LandingStock",
    description: "A collection of free images for landing pages.",
    link: "https://landingstock.com/",
    logo: "5c91284e8de2c93f0b5f8f73_Landing Stock",
  },
  {
    id: 159,
    category: "stockimages",
    title: "Freephotos",
    description:
      "Find free beautiful stock photos with Creative Commons (CC) licensing.",
    link: "https://freephotos.cc/",
    logo: "5b7c8fab9cd09be8840d8c75_Freephotos",
  },
  {
    id: 160,
    category: "stockimages",
    title: "Barn Images",
    description:
      "Beautiful high-resolution photography for everyone. Free for personal and commercial use.",
    link: "https://barnimages.com/",
    logo: "5b7c85f4ac90f3ba526301d6_Barn images",
  },
  {
    id: 161,
    category: "stockimages",
    title: "Pixel Mob",
    description: "Find royalty-free stock photos from multiple sources.",
    link: "https://pixelmob.co/",
    logo: "5c3ca55d75f7c64ee0e904ec_Pixelmob",
  },
  {
    id: 162,
    category: "stockimages",
    title: "Visual Hunt",
    description:
      "High quality free stock photos in one place. 354 Million Free Stock Photos.",
    link: "https://visualhunt.com/",
    logo: "5b7eb6057d1cedc5991477b0_Visual hunt",
  },
  {
    id: 163,
    category: "stockimages",
    title: "Reshot",
    description:
      "Find tons of handpicked, non-stocky images. Free to use however you want.",
    link: "https://www.reshot.com/",
    logo: "5b7c79145c40246051931743_Reshot",
  },
  {
    id: 164,
    category: "stockimages",
    title: "Foodiesfeed",
    description: "Food photos that are completely free to download.",
    link: "https://www.foodiesfeed.com/",
    logo: "5b7c8948d7ae793b7df49750_Foodiesfeed",
  },
  {
    id: 165,
    category: "stockimages",
    title: "Makerbook",
    description: "A collection of free stock photos for startups.",
    link: "http://makerbook.net/stock-photos/",
    logo: "5b7c9a238e0e033fe9199158_Makerbook",
  },
  {
    id: 166,
    category: "stockimages",
    title: "Gratisography",
    description:
      "An eclectic mix of fun photos that can be used for personal projects.",
    link: "https://gratisography.com/",
    logo: "5b7c9ed99609724b00d9d4ca_Gratisography",
  },
  {
    id: 167,
    category: "stockimages",
    title: "Pixabay",
    description: "Free for commercial use ✓ No attribution required.",
    link: "https://pixabay.com/",
    logo: "5b7c700a7756a41d3a530538_Pixabay",
  },
  {
    id: 168,
    category: "stockimages",
    title: "CleanPNG",
    description:
      "6,395,593 transparent png's growing. Unlimited download. Absolutely free!",
    link: "https://www.cleanpng.com/",
    logo: "5b964ede7572f5677539e860_Kisspng",
  },
  {
    id: 169,
    category: "stockimages",
    title: "Stick PNG",
    description: "Catalogue of free transparent PNG's.",
    link: "http://www.stickpng.com/",
    logo: "5b966b0539ac890afc9f56af_Stickpng",
  },
  {
    id: 170,
    category: "stockimages",
    title: "FlyClipart",
    description: "Biggest collection of free transparent png clipart images.",
    link: "https://flyclipart.com/",
    logo: "5c9e13e6c7170a3396fa1fee_Fly Clip Art",
  },
  {
    id: 171,
    category: "stockimages",
    title: "remove.bg",
    description:
      "Remove the backgrounds of images with people or faces in them. Easy to use and 100% free.",
    link: "https://www.remove.bg/",
    logo: "5c1d500a84735d2a6962b6c7_remove.bg",
  },
  {
    id: 172,
    category: "stockimages",
    title: "Redacted",
    description: "Easily blur/pixelate/black out parts of an image.",
    link: "https://marky.space/redacted/",
    logo: "5cb09f7671c2a7bced6066c4_Retracted",
  },
  {
    id: 173,
    category: "stockimages",
    title: "UI Faces",
    description:
      "Free avatar headshots that you can use in your design mockups.",
    link: "https://uifaces.co/",
    logo: "5c4b21191252d56beb9cdfcf_UI Faces",
  },
];

const ImageCompressors = [
  {
    id: 174,
    category: "imagecompressors",
    title: "Tiny PNG",
    description: "TinyPNG optimizes your PNG and JPG images by 50-80%",
    link: "https://tinypng.com/",
    logo: "5abf82c8d0f2643830fb2d6b_q (2)",
  },
  {
    id: 175,
    category: "imagecompressors",
    title: "Optimizilla",
    description:
      "compress your JPEG and PNG images to the minimum possible size.",
    link: "http://optimizilla.com/",
    logo: "5abf7d45b3e0cb09b571e7b8_Optimizilla 2",
  },
  {
    id: 176,
    category: "imagecompressors",
    title: "Kraken.io",
    description:
      "Optimize your images with blazing speed using powerful API and online web interface.",
    link: "https://kraken.io/web-interface",
    logo: "5b894df1e60d4ff343ebe3cd_Kracken.io (1)",
  },
  {
    id: 177,
    category: "imagecompressors",
    title: "Compress JPG",
    description: "Compress JPEG images and photos.",
    link: "http://compressjpeg.com/",
    logo: "5abf7fc90c89185d79a35eb2_1-min (72)",
  },
];

const WireframingTools = [
  {
    id: 178,
    category: "wireframingtools",
    title: "Sketchsheets",
    description: "Ready to print device sketch sheets.",
    link: "http://sketchsheets.com/",
    logo: "5abeb066d0f264ae4afade50_1-min (52)",
  },
  {
    id: 179,
    category: "wireframingtools",
    title: "Sneakpeekit",
    description: "Printable grids for design wireframing.",
    link: "http://sneakpeekit.com/",
    logo: "5abeb02f61e3650d17ad2871_1-min (51)",
  },
  {
    id: 180,
    category: "wireframingtools",
    title: "Sketchize",
    description:
      "A free wireframing kit that contains a set of printable device sketch sheets.",
    link: "https://sketchize.com/",
    logo: "5b8c44d1012ec3e5e0c7167b_Sketchize",
  },
  {
    id: 181,
    category: "wireframingtools",
    title: "Gridzzly",
    description: "Create custom grid paper printable.",
    link: "http://gridzzly.com/",
    logo: "5abeafac61e365c603ad2834_1",
  },
  {
    id: 182,
    category: "wireframingtools",
    title: "inVision",
    description: "A free wireframe kit from InVision.",
    link: "https://www.invisionapp.com/",
    logo: "5bacdbe1fc4111751233f3f1_1 (85)",
  },
];

const MockupTools = [
  {
    id: 183,
    category: "mockuptools",
    title: "Shotsnapp",
    description:
      "Beautiful free device mockup presentation tool for your app and website design.",
    link: "https://app.shotsnapp.com/",
    logo: "5b72ec975ee5804d6823750a_1 (63)",
  },
  {
    id: 184,
    category: "mockuptools",
    title: "Animockup",
    description:
      "Create your free animated product mockups with videos and animated GIFs.",
    link: "https://animockup.com/",
    logo: "5e77d5559105fa6f73e4cc0b_ani",
  },
  {
    id: 185,
    category: "mockuptools",
    title: "Mock",
    description:
      "An app that lets you easily add device frames to your screen recordings to generate beautiful video mockups.",
    link: "https://www.mock.video/",
    logo: "5e787e244c71bd748b48f550_Mock",
  },
  {
    id: 186,
    category: "mockuptools",
    title: "Threed",
    description: "Generate custom 3D Device Mockups in your Browser.",
    link: "http://threed.io/",
    logo: "5bb1134fbf023492023a80c1_Threed",
  },
  {
    id: 187,
    category: "mockuptools",
    title: "Device Shots",
    description:
      "Get high-resolution device mockups with the screenshot of your website or mobile application, for free.",
    link: "https://deviceshots.com/",
    logo: "5f36db14f5400ecf1dbfe16e_Device SHots",
  },
  {
    id: 188,
    category: "mockuptools",
    title: "Store Previewer",
    description:
      "Preview your app on the App Store without the need for publishing it.",
    link: "https://www.storepreviewer.com/",
    logo: "5e654b4c415f1e84a748edff_Store Previewer",
  },
  {
    id: 189,
    category: "mockuptools",
    title: "Facebook Devices",
    description: "Images and Sketch files of popular devices.",
    link: "https://facebook.design/devices",
    logo: "5bb11240ace69c0e2db45fe1_FB Devices",
  },
  {
    id: 190,
    category: "mockuptools",
    title: "Frrames",
    description: "Your perfect design in perfect mockup frames.",
    link: "https://frrames.com/",
    logo: "5e655591098d4fb2bc868283_Frrames",
  },
  {
    id: 191,
    category: "mockuptools",
    title: "Dimmy.Club",
    description: "Device mockup generator for your screenshots.",
    link: "https://dimmy.club/",
    logo: "5abeb19e0c8918508ba2eb74_1-min (55)",
  },
  {
    id: 192,
    category: "mockuptools",
    title: "Rotato",
    description:
      "Drag and drop 3D mockups. macOS Sierra (10.3) or newer needed to download.",
    link: "https://rotato.xyz/",
    logo: "5c346fd138fadf6694b9e8ff_designcamera",
  },
  {
    id: 193,
    category: "mockuptools",
    title: "Veed",
    description: "A simple fast way to add subtitles to your videos online.",
    link: "https://veed.io/",
    logo: "5cf62d010270928ba6d2c1d8_Veed",
  },
  {
    id: 194,
    category: "mockuptools",
    title: "Screen Guru",
    description: "Take clean screenshots of any website.",
    link: "https://screen.guru/",
    logo: "5c1d55feabe9ec7ee845a5b4_Screenshotguru",
  },
  {
    id: 195,
    category: "mockuptools",
    title: "Screenly",
    description:
      "Instantly turn your screenshots into a beautiful desktop mockups.",
    link: "https://www.screely.com/",
    logo: "5b8c0475855584666e7c36c7_Screenly (1)",
  },
  {
    id: 196,
    category: "mockuptools",
    title: "Artboard Studio",
    description:
      "The first online graphic design app mainly focused on product mockups.",
    link: "https://artboard.studio/",
    logo: "5b8323769a8361b133f519e8_Artboard Studio (4)",
  },
];

const UIResources = [
  {
    id: 197,
    category: "uiresources",
    title: "LS Freebies",
    description: "Exclusive freebies for designers and developers.",
    link: "https://www.ls.graphics/free",
    logo: "5ac1577fb62e42ae6ccdd446_1 (52)",
  },
  {
    id: 198,
    category: "uiresources",
    title: "Freebiessupply",
    description:
      "Free, high quality design resources for Photoshop, Sketch and more.",
    link: "https://freebiesupply.com/",
    logo: "5b88d98f86d6047826c86bf0_FB",
  },
  {
    id: 199,
    category: "uiresources",
    title: "UI Bundle",
    description:
      "High-quality web and mobile resources for free to designers, agencies and companies around the globe.",
    link: "https://uibundle.com/",
    logo: "5c699c9a80da2a0f946d31ce_UI Bundle",
  },
  {
    id: 200,
    category: "uiresources",
    title: "UI Design Daily",
    description: "Free UI resources to download created by Ildiko.",
    link: "https://uidesigndaily.com/",
    logo: "5eb4068a8cf2c6e33f146a39_UIDesignDaily",
  },
  {
    id: 201,
    category: "uiresources",
    title: "Uplabs",
    description:
      "The best of design development inspiration, resources and freebies.",
    link: "https://www.uplabs.com/",
    logo: "5d76b8bd2b83858ad7f01b3b_Uplabs",
  },
  {
    id: 202,
    category: "uiresources",
    title: "Freebiesbug",
    description: "Free high-quality design resources.",
    link: "https://freebiesbug.com/",
    logo: "5abec54561e36534daad3fe6_1 (21)",
  },
  {
    id: 203,
    category: "uiresources",
    title: "Designermill",
    description: "Collection of free resources for designers.",
    link: "https://www.designermill.com/",
    logo: "5c699dd22e43da13bb3d28d0_Designermill",
  },
  {
    id: 204,
    category: "uiresources",
    title: "UI Space",
    description: "High quality hand-crafted design resources.",
    link: "https://uispace.net/",
    logo: "5abec4b8d0f2644f2ffae75c_1 (20)",
  },
  {
    id: 205,
    category: "uiresources",
    title: "Design DB",
    description: "A hand-curated database of the best freebies for designers.",
    link: "https://www.designdb.co/",
    logo: "5bad2deaef490d4d38d0e143_Design db",
  },
  {
    id: 206,
    category: "uiresources",
    title: "Freebies UI",
    description:
      "Download for free great freebies for Photoshop, Sketch, Principle XD.",
    link: "https://freebiesui.com/sketch-freebies/",
    logo: "5b88d9b5b9decaa5c2546259_FUI",
  },
  {
    id: 207,
    category: "uiresources",
    title: "UI Pixels",
    description:
      "A gallery of free psds and sketch resources that you can download and use freely.",
    link: "http://www.uipixels.com/",
    logo: "5abec420bd7b3bc99910a0dc_1 (18)",
  },
  {
    id: 208,
    category: "uiresources",
    title: "UI8",
    description: "UI Kits, Wireframes, Icons, Fonts and more.",
    link: "https://www.ui8.net/category/freebies",
    logo: "5b7ebcfb01bf97469cdf477c_UI8",
  },
  {
    id: 209,
    category: "uiresources",
    title: "The Mockup Club",
    description: "Get the best design mockups for free.",
    link: "https://themockup.club/mockups/",
    logo: "5b8079d6b402392d6311574d_The mockupclub",
  },
  {
    id: 210,
    category: "uiresources",
    title: "Mockuplove",
    description:
      "Free collection of PSD and Sketch files from independent creatives around the world.",
    link: "http://mockuplove.com/",
    logo: "5ac15630b62e42b775cdd3fc_Mockuplove1",
  },
  {
    id: 211,
    category: "uiresources",
    title: "Sketch App Sources",
    description: "Free device mockup resources (250+).",
    link: "https://www.sketchappsources.com/all-free-sources.html",
    logo: "5abec250bd7b3b6c4410a082_1 (15)",
  },
  {
    id: 212,
    category: "uiresources",
    title: "Sketch Repo",
    description:
      "A great place to discover Sketch App resources for your next design project.",
    link: "https://sketchrepo.com/",
    logo: "5abec2e5b3e0cb83607196b4_1 (16)",
  },
  {
    id: 213,
    category: "uiresources",
    title: "Sketch For Designrs",
    description: "A growing collection of the best Sketch resources.",
    link: "https://sketch.fordesignrs.com/",
    logo: "5b76a58b7bed409426a4afe7_1 (73)",
  },
  {
    id: 214,
    category: "uiresources",
    title: "FDR.",
    description:
      "Handpicked free mockups to make your presentations stand out.",
    link: "https://freedesignresources.net/category/free-mockups/",
    logo: "5ac1663a7e9bbe04267504bd_fdr",
  },
  {
    id: 215,
    category: "uiresources",
    title: "UI Place",
    description: "Free UI design resources.",
    link: "https://uiplace.com/free-resources",
    logo: "5cc5a32ed9da33147d819943_UI Place",
  },
  {
    id: 216,
    category: "uiresources",
    title: "PSD Repo",
    description:
      "PSD files designed by creatives who share their work for free with the rest of the community.",
    link: "https://psdrepo.com/tag/free-psd-app-design/",
    logo: "5ac1577fb62e42ae6ccdd446_1 (52)",
  },
  {
    id: 217,
    category: "uiresources",
    title: "Just Free Mockups",
    description: "Hundreds of best free and legal photo realistic PSD mockups.",
    link: "https://www.justfreemockups.com/all-free-mockups/",
    logo: "5bd4a18b408ea63d253b8ab8_Just Free Mockups",
  },
  {
    id: 218,
    category: "uiresources",
    title: "Mockups For Free",
    description: "Free PSD mockups to download.",
    link: "https://mockupsforfree.com/",
    logo: "5b7fefe81bb9999fe204b71f_Mockupsforfree",
  },
  {
    id: 219,
    category: "uiresources",
    title: "Good Mockups",
    description: "High quality, hand-picked and absolutely free mockups.",
    link: "http://goodmockups.com/",
    logo: "5b7dd05cba73ba0a02d7425e_Good mockups",
  },
  {
    id: 220,
    category: "uiresources",
    title: "Mockupworld",
    description:
      "Tons of free and legal, fully layered, easily customisable photo realistic PSDs.",
    link: "https://www.mockupworld.co/",
    logo: "5abec17e7e9bbe1b3d73c92d_1 (13)",
  },
  {
    id: 221,
    category: "uiresources",
    title: "Pixeden",
    description:
      "Free web graphics, background graphics, textures, psd mockup, text effects graphics and more.",
    link: "https://www.pixeden.com/free-graphics",
    logo: "5abec126d0f2642913fae65a_1 (12)",
  },
  {
    id: 222,
    category: "uiresources",
    title: "Original Mockups",
    description: "Discover a huge collection of exclusive premium mockups.",
    link: "https://originalmockups.com/free-mockups",
    logo: "5ac167a9bd7b3b2cb512025a_1 (53)",
  },
  {
    id: 223,
    category: "uiresources",
    title: "Figma Freebies",
    description: "A collection of design resources for the figma community.",
    link: "http://www.figmafreebi.es/",
    logo: "5b884a04e81729823fc21ba1_Figma Freebies",
  },
  {
    id: 224,
    category: "uiresources",
    title: "Xd resources",
    description: "Free design resources for Adobe Experience Design.",
    link: "https://xdresources.co/",
    logo: "5b996d7bd8697e6b5c09cf96_XD",
  },
];

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [section, setSection] = useState("all");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const AllSection = () => (
    <>
      <UIInspirationSection />
      <IconsIllustrationsSection />
      <FontsSection />
      <FontRecognitionSection />
      <ColoursGradientsSection />
      <StockVideosSection />
      <StockImagesSection />
      <ImageCompressorsSection />
      <WireframingToolsSection />
      <MockupToolsSection />
      <UIResourcesSection />
    </>
  );

  const UIInspirationSection = () => (
    <Row>
      <h4 className={HomeStyle.listSectionTitle}>UI Inspiration</h4>
      {UIInspiration
        ? UIInspiration.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="UI Inspiration"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const IconsIllustrationsSection = () => (
    <Row>
      <h4 className={HomeStyle.listSectionTitle}>Icons Illustrations</h4>
      {IconsIllustrations
        ? IconsIllustrations.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Icons Illustrations"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const FontsSection = () => (
    <Row>
      <h4 className={HomeStyle.listSectionTitle}>Fonts</h4>
      {Fonts
        ? Fonts.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Fonts"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const FontRecognitionSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>Font Recognition</h4>
      {FontRecognition
        ? FontRecognition.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Font Recognition"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const ColoursGradientsSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>Colours Gradients</h4>
      {ColoursGradients
        ? ColoursGradients.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Colours Gradients"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const StockVideosSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>Stock Videos</h4>
      {StockVideos
        ? StockVideos.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Stock Videos"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const StockImagesSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>Stock Images</h4>
      {StockImages
        ? StockImages.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Stock Images"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const ImageCompressorsSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>Image Compressors</h4>
      {ImageCompressors
        ? ImageCompressors.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="ImggCompressors"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const WireframingToolsSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>Wireframing Tools</h4>
      {WireframingTools
        ? WireframingTools.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Wireframing Tools"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const MockupToolsSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>Mockup Tools</h4>
      {MockupTools
        ? MockupTools.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="Mockup Tools"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const UIResourcesSection = () => (
    <Row >
      <h4 className={HomeStyle.listSectionTitle}>UI Resources</h4>
      {UIResources
        ? UIResources.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <div
                className={HomeStyle.categoryCard}
                style={{ cursor: "pointer" }}
                onClick={() => openInNewTab(item.link)}
              >
                <div className={HomeStyle.categoryImageContainer}>
                  <img
                    className={HomeStyle.categoryImage}
                    src={require(`../../assets/images/${item.logo}.png`)}
                    alt="UI Resources"
                  />
                </div>
                <div className={HomeStyle.categoryCardInfo}>
                  <p className={HomeStyle.categoryTitle}>{item.title}</p>
                  <p className={HomeStyle.categorySubTitle}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Col>
          ))
        : null}
    </Row>
  );

  const TechYoutubersSection = () => (
    <Row>
      <h4 className={HomeStyle.listSectionTitle}>Tech Youtubers</h4>
      <div className={HomeStyle.youtuberSection}>
        <img src={PageNotFound} width={300} height={300} alt="Tech Youtuber" />
        <p>This section under construction...</p>
      </div>
    </Row>
  );

  const onFilter = (filterName) => {
    setSection(filterName);
  };

  return (
    <>
      <Row className={HomeStyle.headerSection}>
        <Col>
          <h3 className={HomeStyle.headerTitle}>Dev Assist</h3>
          <p className={HomeStyle.headerSubTitle}>
            A Collection of free resources for product developer and designers.
          </p>
        </Col>
      </Row>
      <Row className={HomeStyle.SwiperContainer}>
        <h4 className={HomeStyle.swiperTitle}>Filter</h4>
        <Col>
          <Swiper
            spaceBetween={windowWidth <= 500 ? 3 : 10}
            slidesPerView={windowWidth <= 500 ? 2 : 7.3}
            autoplay
            speed={500}
            effect={"fade"}
            navigation
            fadeEffect={{
              crossFade: true,
            }}
          >
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("all")}
              >
                <ImHome2 size={24} />
                <p className={HomeStyle.filterTitle}>All</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("uiinspiration")}
              >
                <GiConqueror size={24} />
                <p className={HomeStyle.filterTitle}>
                  UI <br /> Inspiration
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("iconsillustrations")}
              >
                <FaUsersCog size={24} />
                <p className={HomeStyle.filterTitle}>
                  Icons & <br />
                  Illustrations
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("fonts")}
              >
                <ImFont size={24} />
                <p className={HomeStyle.filterTitle}>Fonts</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("fontrecognition")}
              >
                <ImSearch size={24} />
                <p className={HomeStyle.filterTitle}>
                  Font <br /> Recognition
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("coloursgradients")}
              >
                <ImPencil size={24} />
                <p className={HomeStyle.filterTitle}>
                  Colours <br /> Gradients
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("stockvideos")}
              >
                <ImPlay size={24} />
                <p className={HomeStyle.filterTitle}>
                  Stock <br /> Videos
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("stockimages")}
              >
                <ImImage size={24} />
                <p className={HomeStyle.filterTitle}>
                  Stock <br /> Images
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("imagecompressors")}
              >
                <ImCogs size={24} />
                <p className={HomeStyle.filterTitle}>
                  Image <br /> Compressors
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("wireframingtools")}
              >
                <ImWrench size={24} />
                <p className={HomeStyle.filterTitle}>
                  Wireframing <br /> Tools
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("mockuptools")}
              >
                <MdMobileScreenShare size={24} />
                <p className={HomeStyle.filterTitle}>
                  Mockup <br /> Tools
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("uiresources")}
              >
                <ImDatabase size={24} />
                <p className={HomeStyle.filterTitle}>
                  UI <br /> Resources
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={HomeStyle.filter}
                style={{ cursor: "pointer" }}
                onClick={() => onFilter("techyoutubers")}
              >
                <SiYoutubestudio size={24} />
                <p className={HomeStyle.filterTitle}>
                  Tech <br /> Youtubers
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
      {loading === true ? (
        <div className={HomeStyle.spinnerStyle}>
          <Spinner animation="grow" />
        </div>
      ) : (
        <Row className={HomeStyle.listContainer}>
          {
            {
              all: <AllSection />,
              uiinspiration: <UIInspirationSection />,
              iconsillustrations: <IconsIllustrationsSection />,
              fonts: <FontsSection />,
              fontrecognition: <FontRecognitionSection />,
              coloursgradients: <ColoursGradientsSection />,
              stockvideos: <StockVideosSection />,
              stockimages: <StockImagesSection />,
              imagecompressors: <ImageCompressorsSection />,
              wireframingtools: <WireframingToolsSection />,
              mockuptools: <MockupToolsSection />,
              uiresources: <UIResourcesSection />,
              techyoutubers: <TechYoutubersSection />,
            }[section]
          }
        </Row>
      )}
    </>
  );
};

export default Home;
