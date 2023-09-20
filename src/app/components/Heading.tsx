import React, { PropsWithChildren } from 'react'
import styles from './featured-post.module.css'
import ChaoticText from './ChaoticText'
import { SlateBlock, SlateTextContent } from '@/slate-react-components/src/components'

const WORDMARK_WORDS: string[] = [
  'Oddly',
  'Shaped',
  'Dog',
]

export interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4'
  text: string
}

export default function Heading({
  tag,
  text
}: HeadingProps) {
  const content = <ChaoticText text={text}/>
  let output: React.ReactNode = ''
  switch (tag) {
    case 'h1':
      output = <h1>{content}</h1>
      break
    case 'h2':
      output = <h2>{content}</h2>
      break
    case 'h3':
      output = <h3>{content}</h3>
      break
    case 'h4':
      output = <h4>{content}</h4>
      break
  }
  return output
}
