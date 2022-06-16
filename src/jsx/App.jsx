import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import style from './../styles/styles.less';

// https://d3js.org/
import * as d3 from 'd3';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer'
import IsVisible from 'react-is-visible'

// https://www.highcharts.com/
// import Highcharts from 'highcharts';
// import highchartsAccessibility from 'highcharts/modules/accessibility';
// highchartsAccessibility(Highcharts);
// import highchartsExporting from 'highcharts/modules/exporting';
// highchartsExporting(Highcharts);

// Load helpers.
import formatNr from './helpers/formatNr.js';
import roundNr from './helpers/roundNr.js';

const App = () => {
  // Data states.
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const [y, setY] = useState(window.scrollY);
  const [anchorClicked, setAnchorClicked] = useState(false);
  const [data, setData] = useState(false);
  
  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-edar_report.json' : './data/data2020.json';
    try {
      d3.json(data_file).then((json_data) => {
        setData(json_data);
      });
    }
    catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 200) {
        setY(window.scrollY);
      }
    });
    return () => {
      // window.removeEventListener('scroll');
    };
  }, [y]);

  const anchorClick = (i) => {
    setAnchorClicked(i);
    sectionRefs[i].current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={style.app}>
      <div className={style.content_wrapper}>
        <div className={style.banner_container}>
          <h2>Brief No. 2</h2>
          <h1>Global impact of the war in Ukraine: Billions of people face the greatest cost-of-living crisis in a generation</h1>
          <h2>UN global crisis response group on food, energy and finance</h2>
          <h2>8 June 2022</h2>
        </div>
        <div className={style.container}>
          <div className={style.download_section}><a href="#">Download the full report in PDF format</a></div>
          <h2>A war is always a human tragedy, and the war in Ukraine is no exception. The ripple effects of the conflict are extending human suffering far beyond its borders. The war, in all its dimensions, has exacerbated a global cost-of-living crisis unseen in at least a generation, compromising lives, livelihoods, and our aspirations for a better world by 2030.</h2>
          <h3>1. The largest cost-of-living crisis of the twenty-first century to date</h3>
          <p>The largest cost-of-living crisis of the twenty-first century has come when people and countries have a limited capacity to cope. The war in Ukraine has trapped the people of the world between a rock and a hard place. The rock is the severe price shocks in food, energy and fertilizer markets due to the war, given the centrality of both the Russian Federation and Ukraine in these markets. The hard place is the extremely fragile context in which this crisis arrived; a world facing the cascading crises of the COVID-19 pandemic and climate change. A shock of this magnitude would have been a significant challenge no matter the timing; now, it is of historic, century-defining proportions.</p>
          <h4>A cost-of-living crisis due to severe price shocks</h4>
          <ul>
            <li>The FAO food price index is at near-record levels and 20.8 per cent higher than at this time last year.</li>
            <li>Energy market volatility has increased with recognition that a prolonged conflict will lead to higher energy prices in the medium to long term. Crude oil has now reached over $120 per barrel and energy prices overall are expected to rise by 50 per cent in 2022 relative to in 2021. The price of European natural gas in particular has risen ten-fold compared to 2020. Many large natural gas importers have committed to dramatically reducing reliance on Russian natural gas through higher imports of Liquified Natural Gas from other countries, which may potentially price out some developing countries from the Liquified Natural Gas market on which they rely for energy imports.</li>
            <li>Fertilizer prices are more than double the 2000–2020 average.</li>
            <li>Maritime transport costs are more than triple the pre-pandemic average,7 due to the lingering effects of the COVID-19 crisis and the destruction of the transport infrastructure (and especially the ports) of Ukraine, as well as higher volume of traffic and congestion related delays and other factors such as rising fuel costs. On North-South trade routes, the aggregated fuel cost increase of the last three months is estimated to already result in a 5-to-14% increase of total maritime transport costs.</li>
            <li>Rising interest rates and growing investor uncertainty has eroded both the value of developing countries’ currencies, as well as their capacity to borrow in foreign markets. After the first 100 days of the war, the currencies of 142 developing countries have depreciated, on average, by 2.8% against the US dollar (2.7% YTD), and their bonds yields have increased by an average of 77 basis points.</li>
            <li>Of greatest concern are the vicious cycles beginning to emerge along the transmission channels of the crisis. Higher energy prices, especially diesel and natural gas, increase the costs of fertilizers and transport. Both factors increase the costs of food production. This leads to reduced farm yields and to even higher food prices next season. These, in turn, add to inflation metrics, contributing to what were already increasing interest rate pressures and tightening financial conditions. Tighter financial conditions erode the buying power of the currencies of developing countries, further increasing the import costs of food and energy, reducing fiscal space and increasing the costs of servicing debt.</li>
            <li>And the story does not end there. The vicious cycles created by a cost-of-living crisis can also spark social and political instability. Higher inflation means higher food and energy prices, and a higher cost of living. This in turn reduces families’ real income, and with it, their living standards and their opportunities for a better future. Some families start making painful trade-offs: reducing meals or the quality of them, dropping out of schools, or reducing healthcare spending. Often these decisions affect women and girls the most. These decisions have worrying long-term effects, from higher poverty levels, to rising inequality, lower education, lower productivity and declining real wages. All this reduces the ability of people and governments to cope with a crisis, further fuelling social and political unrest.</li>
          </ul>
          <h4>The compounded crises of the pandemic and climate change have limited people’s and countries’ capacities to cope</h4>
          <h5>People’s capacity to cope is decreasing</h5>
          <ul>
            <li>Since 2019, the number of people living in extreme poverty has risen by 77 million and the number of people facing acute food insecurity has risen to 193 million.</li>
            <li>Worldwide, three out of five workers, mostly in developing countries, have lower real incomes than before the pandemic.</li>
            <li>In Africa, 58 million people living just above the poverty line are at risk of sliding into poverty due to the combined effects of the pandemic and the war in Ukraine.</li>
            <li>About 4.1 billion people lack social protection.</li>
            <li>The gender gap in global working hours has increased due to the pandemic; globally, women spend 18.9 hours weekly in employment, or 57 per cent of the average 33.4 hours worked by men.</li>
            <li>More than 20 million people are forcibly displaced each year due to climate change effects.</li>
            <li>Nearly 90 million people in Asia and Africa who had previously gained access to electricity, can no longer afford to pay for their basic energy needs.</li>
            <li>Globally, between 2019 and 2021, 30 million people lost access to clean cooking fuel and the global figure now stands at 2.4 billion who lack access.</li>
            <li>In 2020, 15 million people in sub-Saharan Africa who had recently gained tier-1 electricity access were no longer able to afford it and slipped back into energy poverty. About 568 million people in Sub-Saharan Africa lacked access to electricity in 2020.</li>
            <li>UNCTAD estimates that the annual financing gap for achieving the Sustainable Development Goals is $4.3 trillion, revised upwards from $2.5 trillion, which was estimated to be needed annually as of 2015, when the 2030 Agenda for Sustainable Development was adopted.</li>
            <li>Climate disasters cost the global economy around $520 billion per year20, with a disproportionate share of the adverse effect being borne by developing countries who are forced to redirect domestic public money towards adaptation and loss and damage efforts, as opposed to development spending.</li>
          </ul>
          <h5>Countries are also weaker to cope with this new crisis</h5>
          <ul>
            <li>The UNCTAD global gross domestic product (GDP) growth forecasts for 2022 have been revised downwards by a full percentage point since the start of the war, while the IMF has revised downwards their growth forecasts for 143 countries.</li>
            <li>In developing economies, public debt levels increased from 55.7 to 65.1 per cent of GDP between 2019 and 2021 and, in 2022, these economies are estimated to require $311 billion to service public external debt, a figure that amounts to 13.6 per cent of government revenues.</li>
            <li>Globally, 60 per cent of the poorest countries are in debt distress or at a high risk of debt distress.</li>
            <li>ILO has estimated that the social protection financing gap is $1.2 trillion per year in developing countries.</li>
          </ul>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)} src="https://baconmockup.com/1600/900" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.right + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)} src="https://baconmockup.com/200/300" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <blockquote>
            <span className={style.text}>Another hansom quote from an important person</span>
            <span className={style.author}>Teemo Tebest</span>
          </blockquote>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)} src="https://desk.zoho.com/portal/api/uploads/4004154208415/content?portalId=bf176ef04452afb226b71d032f1e8bd25fdf45fd13ed1e6d" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <div className={style.video_container + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)}><iframe src="https://www.youtube.com/embed/msizPweg3kE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen></iframe></div>}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.recommendations_container}>
            <h3>Policy recommendations</h3>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
          </div>
          <h3 id="section2" ref={sectionRefs[1]}>Section 2</h3>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.findings_container}>
            <h3>Key findings</h3>
            <ul>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
            </ul>
          </div>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && + style.notransition)} src="https://baconmockup.com/900/900" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)} src="https://desk.zoho.com/portal/api/uploads/4004154208415/content?portalId=bf176ef04452afb226b71d032f1e8bd25fdf45fd13ed1e6d" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.recommendations_container}>
            <h3>Policy recommendations</h3>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
          </div>
          <h3 id="section3" ref={sectionRefs[2]}>Section 3</h3>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.findings_container}>
            <h3>Key findings</h3>
            <ul>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
            </ul>
          </div>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)} src="https://desk.zoho.com/portal/api/uploads/4004154208415/content?portalId=bf176ef04452afb226b71d032f1e8bd25fdf45fd13ed1e6d" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <blockquote>
            <span className={style.text}>Yet another hansom quote from an important person</span>
            <span className={style.author}>Teemo Tebest</span>
          </blockquote>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <div className={style.video_container + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)}><iframe src="https://www.youtube.com/embed/msizPweg3kE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen></iframe></div>}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.recommendations_container}>
            <h3>Policy recommendations</h3>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
};

export default App;
