import '@/styles/global.css'
import { ReactElement, ReactNode, useState } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/shared/Layout'
import { Badge, BadgeHeading, BadgeSpacing } from '@/components/shared/Badge'
import { Header } from '@/components/shared/Header'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function MyApp({ Component,pageProps }: AppPropsWithLayout) {
  const [ displayBadge, setDisplayBadge ] = useState(false);
  const initialWidth = (() => {
    if (typeof window !== "undefined")
    return window.innerWidth
  })();

  const [viewWidth, setViewWidth] = useState(initialWidth);
  if (typeof window !== "undefined") {
      const handleResize = () => setViewWidth(() => window.innerWidth);
      window.addEventListener('resize', handleResize);
  }
  return (
      <Layout viewWidth = {viewWidth}>
      <div className='d-flex' >
        <Badge  displayBadge = {displayBadge} setDisplayBadge = {setDisplayBadge} 
                viewWidth = {viewWidth}
              />
        <BadgeSpacing />
        <BadgeHeading />
        <div className='w-100'>
          <Header displayBadge = {displayBadge} setDisplayBadge = {setDisplayBadge} viewWidth = {viewWidth}/>
          <div >
          <Component {...pageProps} viewWidth = {viewWidth}/>
          </div>
        </div>
      </div>
    </Layout>
  );}