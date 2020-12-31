import React from 'react'

export default function CarouselSlide(props) {
  const { title, text } = props

  return (
    <div className="slide-bg">
      <div className="container-split jc-end">
        <div className="split bg-image slide-1 flex ai-center jc-center">
          <h1>{title}</h1>
        </div>
        <div className="section text-box flex column ai-center jc-center split">
          {text}
        </div>
      </div>
    </div>
  )
}
