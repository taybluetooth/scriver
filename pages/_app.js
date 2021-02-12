// external stylesheets
import '@animated-burgers/burger-squeeze/dist/styles.css'
import 'react-responsive-modal/styles.css'
// page stylesheets
import '../styles/index.scss'
// component stylesheets
import '../styles/header.scss'
import '../styles/modal.scss'
import '../styles/layout.scss'
// next modules
import Provider from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
