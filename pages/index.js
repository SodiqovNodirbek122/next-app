import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adoya | Bosh sahifa</title>
        <meta name="keyword" content="adoya" />
      </Head>
      <section className="slider-section container d-flex">
        <div className="slider"></div>
        <div className="top-products">
          <div className="row">
            <div className="col-lg-6">
              <div className="product"></div>
            </div>
            <div className="col-lg-6">
              <div className="product"></div>
            </div>
            {/* <div className="col-lg-6">
              <div className="product"></div>
            </div>
            <div className="col-lg-6">
              <div className="product"></div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
