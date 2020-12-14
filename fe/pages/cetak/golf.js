import React from 'react'

class Page extends React.Component {
  static async getInitialProps(ctx) {
    const res = await fetch('http://localhost:8000/api/datamurid/20?format=json')
    const json = await res.json()
    return { nama: json.nama}
  }

  render() {
    return
          <div>{nama}</div>
  }
}

export default Page
