"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import bg1 from "/1.png";
// import bg2 from "../assets/imgs/2.png";
// import bg3 from "../assets/imgs/3.png";
// import bg4 from "../assets/imgs/4.png";
// import bg5 from "../assets/imgs/5.png";
// import bg6 from "../assets/imgs/6.png";
// import bg7 from "../assets/imgs/7.png";
// import bg8 from "../assets/imgs/8.png";
// import bg9 from "../assets/imgs/9.png";
// import bg10 from "../assets/imgs/10.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/1.png" alt="Opa" />
      <img src="/2.png" alt="Opa" />
      <img src="/11.png" alt="Opa" />
      <img src="/3.png" alt="Opa" />
      <img src="/4.png" alt="Opa" />
      <img src="/5.png" alt="Opa" />
      <img src="/12.png" alt="Opa" />
      <img src="/6.png" alt="Opa" />
      <img src="/7.png" alt="Opa" />
      {/* <img src="/8.png" alt="Opa" /> */}
      <img src="/9.png" alt="Opa" />
      <img src="/10.png" alt="Opa" />
    </div>
  );
}
