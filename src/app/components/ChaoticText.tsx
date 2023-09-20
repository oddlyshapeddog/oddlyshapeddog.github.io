import React, { PropsWithChildren } from 'react'
import styles from './chaotic-text.module.css'

export interface ChaoticTextProps {
  text?: string
  words?: string[]
  className?: string
  classNames?: string[]
}

function StringToSpans({text}: {text: string}) {
  return (
    text.split('').map(
      (letter: string, i: number) => (
        <span key={i}>{
          letter === ' ' ?
          <>&nbsp;</> :
          letter
        }</span>
      )
    )
  )
}

export default function ChaoticText({
  text,
  words,
  className,
  classNames,
}: ChaoticTextProps) {
  const actualClassNames = [
    styles.chaoticText
  ]
  if (className) {
    actualClassNames.push(className)
  }
  if (classNames) {
    classNames.forEach((className: string) => {
      actualClassNames.push(className)
    })
  }
  return (
    <div className={actualClassNames.join(' ')}>
      {
        words ? (
          words.map((word: string, i: number) => (
            <span key={i}>
              <StringToSpans text={word} />
            </span>
          ))
        ) : (
          text ? (
            <span><StringToSpans text={text} /></span>
          ) : null
        )
      }
    </div>
  )
}
