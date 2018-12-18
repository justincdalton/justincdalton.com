import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Justin C Dalton</h1>
    <p>I'm a Lead Web Application Engineer bringing</p>
    <p>STRUCTURE</p>
    <p>and</p>
    <p>ORGANIZATION</p>
    <p>to</p>
    <ul>
      <li>teams</li>
      <li>code</li>
      <li>product</li>
      <li>spotify playlists</li>
    </ul>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
