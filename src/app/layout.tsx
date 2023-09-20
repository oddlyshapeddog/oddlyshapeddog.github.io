import { SlateBlock, SlateHero, SlateRoot, SlateTextContent } from '@/slate-react-components/src/components'
import './globals.css'
import type { Metadata } from 'next'
import Logo from './components/logo'
import styles from './page.module.css'
import OSDHero from './components/OSDHero'

export const metadata: Metadata = {
  title: 'Oddly Shaped Dog',
  description: 'Indie developer, asset packs, art, stuff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SlateRoot>
          <div className={styles.pageMain}>
            <SlateBlock
              colorPalette='primary'
              className={styles.pageMainInner}
            >
              <OSDHero />
              {children}
              <SlateBlock
                colorPalette='inverted'
                className={styles.footer}
              >
                <SlateTextContent
                  align='center'
                  centered
                >
                  <p>&copy; Oddly Shaped Dog</p>
                </SlateTextContent>
              </SlateBlock>
            </SlateBlock>
          </div>
        </SlateRoot>
      </body>
    </html>
  )
}
