import Image from 'next/image'
import styles from './page.module.css'
import { SlateBlock, SlateGridLayout, SlateHero, SlateRoot, SlateTextContent } from '@/slate-react-components/src/components'
import Logo from './components/logo'
import ChaoticText from './components/ChaoticText'
import SketchyThumbnail from './components/SketchyThumbnail'
import vertexShadersIcon from '../content/posts/retroshaderpack/N64ShadersCoverIcon.png'
import vertexShadersVideo from '../content/posts/retroshaderpack/moth.mp4'
import FeaturedPost from './components/FeaturedPost'
import Heading from './components/Heading'

export default function Home() {
  return (
    <>
      <SlateTextContent
        centered
        colorPalette='secondary'
      >
        <header>
          <Heading tag='h2' text='Releases'/>
        </header>
        <section className={styles.sectionBody}>
          {/* <p>Soon</p> */}
          <FeaturedPost
            title={
              [
                'Vertex-Lit &',
                'Vertex-Colored',
                'Shader Pack'
              ]
            }
            iconSrc={vertexShadersIcon.src}
          >
            <video
              src={vertexShadersVideo}
              autoPlay
              loop
            ></video>
          </FeaturedPost>
        </section>
        {/* <SlateBlock align='center'>
          <p><em>More to come...</em></p>
        </SlateBlock> */}
      </SlateTextContent>
      <SlateTextContent
        centered
        colorPalette='tertiary'
      >
        <header>
          <Heading tag='h2' text='Blog'/>
        </header>
        <section className={styles.sectionBody}>
          <p>Soon</p>
        </section>
      </SlateTextContent>
      <SlateTextContent centered>
        <header>
          <Heading tag='h2' text='About'/>
        </header>
        <section className={styles.sectionBody}>
          <SlateGridLayout
            columns={[
              (
                <SlateTextContent noGutters key={1}>
                  <h3>What we do</h3>
                  <p>
                    Oddly Shaped Dog creates
                    retro-inspired
                    game assets and media.
                  </p>
                </SlateTextContent>
              ),
              (
                <SlateTextContent noGutters key={2}>
                  <h3>Contact</h3>
                  <p>
                    <strong>Mastodon</strong><br />
                    <a
                      href='https://mastodon.gamedev.place/@OddlyShapedDog'
                      target='_blank'
                    >@OddlyShapedDog</a>
                  </p>
                  <p>
                    <strong>Email</strong><br />
                    <a
                      href='/contact'
                    >Contact form</a>
                  </p>
                </SlateTextContent>
              ),
            ]}
            gutters
          />
        </section>
      </SlateTextContent>
    </>
  )
}
