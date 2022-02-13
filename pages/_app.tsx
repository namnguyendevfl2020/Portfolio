import '@/styles/global.css'
import { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/shared/Layout'
import { Badge, BadgeHeading, BadgeSpacing } from '@/components/shared/Badge'
import { Header } from '@/components/shared/Header'
import { Provider } from 'react-redux';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

export default function MyApp({ Component,pageProps }: AppPropsWithLayout) {
  return (
      <Layout >
      <div className='d-flex' >
        <Badge />
        <BadgeSpacing />
        <BadgeHeading />
        <div className='w-100'>
          <Header/>
          <div >
          <Component {...pageProps} />;
          </div>
        </div>
      </div>
    </Layout>
  );}