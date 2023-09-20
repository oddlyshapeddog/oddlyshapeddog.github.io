import { SlateTextContent } from '@/slate-react-components/src/components'
import React from 'react'
import Heading from '../components/Heading'
import styles from '../page.module.css'

export default function Home() {
  return (
    <>
      <form
        action="https://formspree.io/f/xnqkzvld"
        method="POST"
      >
        <SlateTextContent centered>
          <header>
            <Heading tag='h2' text='Contact form'/>
          </header>
          <section
            className={styles.sectionBody}
          >
            <p>
              <label>
                <strong>Your email:</strong><br />
                <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                <strong>Your message:</strong><br />
                <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </section>
        </SlateTextContent>
      </form>
    </>
  )
}
