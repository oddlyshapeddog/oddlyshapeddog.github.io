import React, { PropsWithChildren } from 'react'
import styles from './featured-post.module.css'
import ChaoticText from './ChaoticText'
import { SlateBlock, SlateTextContent } from '@/slate-react-components/src/components'

const WORDMARK_WORDS: string[] = [
  'Oddly',
  'Shaped',
  'Dog',
]

export interface FeaturedPostProps extends PropsWithChildren {
  title: string | string[],
  description?: React.ReactNode
  iconSrc: string
}

export default function FeaturedPost({
  title,
  description,
  iconSrc,
  children
}: FeaturedPostProps) {
  return (
    <div className={styles.featuredPost}>
      <SlateBlock
        className={styles.iconContainer}
      >
        <div className={styles.iconWrapper}>
          <img
            className={styles.icon}
            src={iconSrc}
            role='presentational'
            alt=''
          />
        </div>
      </SlateBlock>
      <SlateBlock
        className={styles.header}
        padded
      >
        <h3>
          {
            typeof title === 'string' ?
            (
              <ChaoticText
                text={title}
              />
            ) :
            (
              <ChaoticText
                words={title}
              />
            ) 
          }
        </h3>
        {
          description ? (
            <div className={styles.description}>
              {description}
            </div>
          ) : null
        }

      </SlateBlock>
      <SlateBlock
        className={styles.body}
      >
        {children}
      </SlateBlock>
    </div>
  )
}
