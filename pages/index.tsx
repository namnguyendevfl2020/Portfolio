import { About } from "@/components/per-page"
import { Badge, BadgeHeading, BadgeSpacing } from "@/components/shared/Badge"
import { Header } from "@/components/shared/Header"
import { Layout } from "@/components/shared/Layout"
import type { ReactElement } from 'react'
export default function Home() {
  return (
    <>
    <section>
      <About />
    </section>
    </>
  )
}

// export async function getStaticProps({params}) {
//   return 
// }

// Home.getLayout = function getLayout(page: ReactElement) {
//   console.log(page)
//   return (
//     <Layout type = "about">
//       <div className='d-flex' >
//         <Badge />
//         <BadgeSpacing />
//         <BadgeHeading />
//         <div className='w-100'>
//           <Header type = "About"/>
//           <div >
//             {page}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }