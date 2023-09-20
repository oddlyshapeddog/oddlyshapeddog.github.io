import React, { PropsWithChildren } from 'react'
import styles from './logo.module.css'
import osdLogo from '../../svg/osd-logo-main.svg'
import ChaoticText from './ChaoticText'
import { WORDMARK_WORDS } from '../constants'

export interface LogoProps {
  subtitle?: string[]
}

export default function Logo({
  subtitle
}: LogoProps) {
  return (
    <div className={styles.logoContainer}>
      <img
        className={styles.logo}
        src={osdLogo.src}
        role='presentational'
        alt=''
      />
      <h1
        className={styles.wordmarkContainer}
      >
        <a href='/'
        className={styles.wordmark}>
          <ChaoticText
            className={styles.wordmarkText}
            words={WORDMARK_WORDS}
          />
        </a>
      </h1>
      {
        subtitle ? (
          <div className={styles.subtitle}>
            <ChaoticText
              words={subtitle}
            />
            {/* {subtitle.map(s => <span>{s}</span>)} */}
          </div>
        ) : null
      }
    </div>
  )
}
