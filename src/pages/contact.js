import React from 'react'
import Layout from '../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout id="contact">
        <h2>Let us talk!</h2>
        <p className="itim">you can mail me at <a href="mailto:binfaisal.ammar@gmail.com">binfaisal.ammar@gmail.com</a></p>
      </Layout>
    )
  }
}