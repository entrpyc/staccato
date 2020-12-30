import './styles/staccato/Global.scss';

import Carousel from './components/Carousel';
import TitleText from './components/TitleText';
import WhiteBlock from './components/WhiteBlock';

function App() {
  const intelectualProperty = (
    <div className="text">
      <p>Registration, renewal and representation in the procedure for all types of applied and registered industrial property: trademarks; industrial designs; inventions; useful models, geographic indications.</p>
      <p>The services includes:</p>
      <ul>
        <li>Filing of application for trademark registration</li>
        <li>Filing, examination and publication of trademark application – up to 3 classes goods and services</li>
        <li>Registration of trademark</li>
        <li>Registration of European mark which obtained protection in all 28 EU Members states</li>
        <li>Registration of International mark</li>
      </ul>
    </div>
  )
  const realEstateAndInvestment = (
    <div className="text">
      <ul>
        <li>Research, drafting and execution of all notary verified real estate transactions</li>
        <li>Detailed analysis of all legal aspects of legal status of property and successful completion of transactions</li>
        <li>Drafting of preliminary and final contracts for transactions, with careful analysis of all the legal aspects and conditions of the contracts</li>
        <li>Drafting notary deeds, powers of attorney and various types of declarations</li>
      </ul>
    </div>
  )

  const nonProfitAssociations = (
    <div className="text">
      <ul>
        <li>Registration of non-profit legal entities (associations, including sports organizations and foundations)</li>
        <li>Drafting of documents and recording changes in circumstances subject to entry in the Register of Non-Profit Legal Entities. Complete legal service for non-profit legal entities</li>
        <li>Entry in the BULSTAT Register at the Registry Agency</li>
        <li>Entry in the Central Register of Non-Profit Legal Entities for Public Benefit Activities at the Ministry of Justice</li>
      </ul>
    </div>
  )
  
  return (
    <div className="main">
      <Carousel />
      <WhiteBlock 
        title="COMMERCIAL LAW"
        subTitle="Company registration in Bulgaria and all accompanying services with no complications"
        orientation="ltr"/>
      <TitleText
        title="INTELLECTUAL PROPERTY"
        text={intelectualProperty}
        orientation="rtl"
        bgImage="images/trial-ready-bg.jpg"
      />
      <TitleText
        title="REAL ESTATE AND INVESTMENT"
        text={realEstateAndInvestment}
        orientation="ltr"
      />
      <TitleText
        title="NON-PROFIT ASSOCIATIONS"
        text={nonProfitAssociations}
        orientation="rtl"
        bgImage="images/trial-ready-bg.jpg"
      />
    </div>
  );
}

export default App;
