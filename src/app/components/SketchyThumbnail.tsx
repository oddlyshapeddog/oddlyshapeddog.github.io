import React, { PropsWithChildren } from 'react'
import styles from './sketchy-thumbnail.module.css'

export interface SketchyThumbnailProps extends PropsWithChildren {

}

export default function SketchyThumbnail({
  children
}: SketchyThumbnailProps) {
  return (
    <div className={styles.sketchyThumbnail}>
      {children}
    </div>
  )
}