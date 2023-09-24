import { PropsWithChildren } from "react";
import styles from './tv.module.css'

export interface TVProps extends PropsWithChildren {
  flipped?: boolean
}

export default function TV({
  children,
  flipped
}: TVProps) {
  return (
    <div
      className={styles.tv}
      data-flipped={!!flipped ? 'true' : 'false'}
    >
      <div className={styles.tvBody}></div>
      <div className={styles.tvContent}>
        {children}
      </div>
    </div>
  )
}