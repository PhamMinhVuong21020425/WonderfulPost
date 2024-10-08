/* Components */
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Navbarin from './components/Navbar';
import Footer from './components/Footer/Footer'
import Home from './home/components';
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';

export default async function IndexPage() {
  // const supabase = createServerComponentClient( {cookies} )
  // const { data } = await supabase.from("auth.users").select();

  return (
    <div>
      {/* <pre>{ JSON.stringify(data, null, 2) }</pre> */}
      {/* <Navbarin />
      <Banner />
      <Services />
      <Footer /> */}
      <Home />
    </div>
  )
}

export const metadata = {
  title: 'Home | Magic Post',
  description: 'The delivery service for your business',
}
