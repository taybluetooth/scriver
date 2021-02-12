// external stylesheets
import '@animated-burgers/burger-squeeze/dist/styles.css'
import 'react-responsive-modal/styles.css'
// page stylesheets
import '../styles/index.scss'
// component stylesheets
import '../styles/header.scss'
import '../styles/modal.scss'
import '../styles/layout.scss'
import '../styles/login.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
