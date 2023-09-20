import React, { PropsWithChildren } from 'react'
import styles from './starburst.module.css'

export interface StarburstCalloutProps extends PropsWithChildren {

}

export default function StarburstCallout({
  children
}: StarburstCalloutProps) {
  return (
    <div className={styles.starburst}>
      {children}
    </div>
  )
}