import { SlateBlock, SlateTextContent } from '@/slate-react-components/src/components'
import React from 'react'

export default function Home() {
  return (
    <SlateBlock
      colorPalette='inverted'
      withBackground
    >
      <SlateTextContent
        align='center'
        centered
      >
        <p>&copy; Oddly Shaped Dog</p>
      </SlateTextContent>
    </SlateBlock>
  )
}
