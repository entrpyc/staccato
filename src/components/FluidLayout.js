import React from 'react'

function FluidLayout() {
  return (
    <section className="home demo-section">
      <div className="container">
        <div className="block layout -sidebar">
          <div className="layout-wrap">
            <div className="column sidebar d-none-mobile"></div>
            <div className="column layout -listing fluid">
              <div className="layout-wrap">
                <div className="block"></div>  
                <div className="block"></div>  
                <div className="block"></div>  
                <div className="block"></div>  
                <div className="block"></div>  
                <div className="block"></div>  
                <div className="block"></div>  
                <div className="block"></div>  
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default FluidLayout
