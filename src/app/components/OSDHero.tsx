import { SlateBlock, SlateHero, SlateNav } from "@/slate-react-components/src/components";
import Logo from "./logo";

import bg960 from '../bgs/osd_bg_960w_60q.jpg'
import bg1920 from '../bgs/osd_bg_1920w_60q.jpg'
import styles from './osd-hero.module.css'
import { HERO_SUBTITLE } from "../constants";

export default function OSDHero() {
  const srcSet = [
    `${bg960.src} 1x`,
    `${bg1920.src} 2x`,
  ].join(',')
  return (
    <SlateHero
      align='center'
      className={styles.osdHero}
    >
      <SlateNav
        ariaLabel={'navigation'}
        className={styles.nav}
        compact
      >
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </SlateNav>
      <img
        className={styles.bg}
        src={bg960.src}
        srcSet={srcSet}
        role='presentation'
      />
      <SlateBlock
        className={styles.content}
      >
        <Logo subtitle={HERO_SUBTITLE} />
      </SlateBlock>
    </SlateHero>
  )
}