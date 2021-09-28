import Layout from '../Comps/Layout'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp
