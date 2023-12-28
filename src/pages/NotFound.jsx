import React from 'react'
import notFound from './../assets/notfound.jpg'
export default function NotFound() {
  return (
    <div style={{textAlign:'center', marginTop:'70px'}}>
      <img src={notFound} alt='not-found-img' />
    </div>
  )
}
