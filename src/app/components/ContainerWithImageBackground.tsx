import React, { PropsWithChildren } from "react";
import styles from './container-with-image-background.module.css'
import Image, { StaticImageData } from "next/image";

export interface ContainerWithImageBackgroundProps extends PropsWithChildren {
  imageBg?: StaticImageData
  imageAlt?: string
  align?: 'left' | 'right' | 'center'
  videoBg?: any 
}

export default function ContainerWithImageBackground({
  imageBg,
  imageAlt,
  align,
  videoBg,
  children
}: ContainerWithImageBackgroundProps) {
  return (
    <div className={styles.containerWithImageBackground}>
      {imageBg ? (
        <Image
          className={styles.bg}
          alt={imageAlt || 'unlabeled image'}
          src={imageBg.src}
          width={imageBg.width}
          height={imageBg.height}
        />
      ) : null}
      <div
        className={styles.overlay}
        data-align={align || 'left'}
      >
        {children}
      </div>
    </div>
  )
}