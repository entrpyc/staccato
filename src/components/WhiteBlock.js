import React from 'react'

import "./Default.scss"

export default function WhiteBlock() {
  return (
    <section className="white-block">
      <div className="container">
        <div className="heading-text">
        <h2>COMMERCIAL LAW</h2>
        <p className="gap">Company registration in Bulgaria and all accompanying services with no complications</p>
        </div>
        <div className="content gap-xl">
          <div className="pane green">
            <h3>Advantages</h3>
            <ul className="special green gap">
              <li>Lowest administration costs in Europe and corporate tax of 10%. Now you can establish and manage companies abroad with no complications Good reputation and recognition</li>
              <li>Access to affordable SEPA bank accounts</li>
              <li>Often low-cost</li>
            </ul>
          </div>
          <div className="pane red gap-large ignore-rule">
            <h3>Disadvantages</h3>
            <ul className="special red gap">
              <li>For businesses with lower income</li>
              <li>VAT withheld</li>
              <li>Accounting costs</li>
              <li>Public register</li>
              <li>No anonymity</li>
              <li>Requires initial investment of capital</li>
            </ul>
          </div>
        </div>
        <p className="gap-xl line-below">The time frame for registration takes between 3-7 days after all the information has been presented correctly to us. We would need the following initial info from you:</p>
        <ul className="gap-large pane no-bullets expand">
          <li><strong>Bulgarian visa type C</strong> (Bulgarian visa for visiting only)</li>
          <li><strong>Bulgarian visa type D</strong> (Bulgarian visa if you plan to stay in Bulgaria for more than 3 months)</li>
          <li><strong>Bulgarian Residency permit</strong> (after Bulgarian visa type D)</li>
          <li><strong>Bulgarian citizenship</strong></li>
          <li><strong>Work permit for Bulgaria</strong> (for Bulgarian visa type D)</li>
          <li><strong>Non-profit permit for Bulgaria</strong> (for Bulgarian visa type D)</li>
        </ul>
      </div>
    </section>
  )
}
