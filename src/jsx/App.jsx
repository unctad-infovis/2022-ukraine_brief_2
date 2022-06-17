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

// Load images.
import figure1 from '../../media/img/figure1.png';
import figure2 from '../../media/img/figure2.png';
import figure3 from '../../media/img/figure3.png';
import figure4 from '../../media/img/figure4.png';
import figure5 from '../../media/img/figure5.png';
import figure6 from '../../media/img/figure6.png';
import figure7 from '../../media/img/figure7.png';
import figure8 from '../../media/img/figure8.png';
import figure9 from '../../media/img/figure9.png';
import figure10 from '../../media/img/figure10.png';
import figure11 from '../../media/img/figure11.png';
import figure12 from '../../media/img/figure12.png';
import figure13 from '../../media/img/figure13.png';
import figure14 from '../../media/img/figure14.png';
import figure15 from '../../media/img/figure15.png';
import figure16 from '../../media/img/figure16.png';
import figure17 from '../../media/img/figure17.png';
import figure18 from '../../media/img/figure18.png';
import un_logo from '../../media/img/un_logo.svg';

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
          <img src={un_logo} className={style.un_logo} />
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
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.left} src={figure1} />}
          </IsVisible>
          <h5>Countries are also weaker to cope with this new crisis</h5>
          <ul>
            <li>The UNCTAD global gross domestic product (GDP) growth forecasts for 2022 have been revised downwards by a full percentage point since the start of the war, while the IMF has revised downwards their growth forecasts for 143 countries.</li>
            <li>In developing economies, public debt levels increased from 55.7 to 65.1 per cent of GDP between 2019 and 2021 and, in 2022, these economies are estimated to require $311 billion to service public external debt, a figure that amounts to 13.6 per cent of government revenues.</li>
            <li>Globally, 60 per cent of the poorest countries are in debt distress or at a high risk of debt distress.</li>
            <li>ILO has estimated that the social protection financing gap is $1.2 trillion per year in developing countries.</li>
          </ul>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)} src={figure2} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && ' ' + style.notransition)} src={figure3} />}
          </IsVisible>
          <h3>2. Impacts of the cost-of-living crisis on people</h3>
          <p>The crisis is rapidly constraining household budgets. This has important implications in terms of poverty levels, real incomes, educational attainment, as well as food and energy access. These impacts are also highly regressive, as they affect poorest households, as well as women and girls, the most. Its effects on food insecurity, malnutrition and hunger are particularly alarming in the current context.</p>
          <h4>Impact of the war on poverty, incomes and energy access</h4>
          <p>According to the World Bank, taking into account only the price increases for corn and wheat, the average household has lost 1.5 per cent in real income since the start of the war a figure that varies greatly by country. Figure 1 shows that averages can hide more than they reveal when the impacts are disaggregated.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.right} src={figure4} />}
          </IsVisible>
          <h5>High food prices will affect the most vulnerable in society the most</h5>
          <ul>
            <li>High food and energy prices will affect the most vulnerable in society the most, especially in developing countries, in which more than 50 per cent of the income of the poorest households is spent on food (figure 2).</li>
            <li>But a great portion of the groups considered “non poor” are also very vulnerable due to their close proximity to the poverty line. It is very important to include these groups, that are also hard hit by the crisis, in the safety nets and social protection networks, not only to help the poor but also to preclude further impoverishment from these vulnerable group. Many of these vulnerable groups are in urban areas and thus often form the base of social instability processes.</li>
            <li>A 10 per cent increase in food prices erodes the buying power of these households by more than 5 per cent, or about as much as poor families in developing countries spend on average on health.</li>
            <li>Steep rises in the cost of living will increase poverty worldwide. The pandemic already caused a tremendous rollback in poverty reduction. The challenge is further exacerbated by further rises inflation resulting fromthe war in Ukraine. The World Bank suggests that the war in Ukraine may bring up to 95 million people into extreme poverty, making 2022 the second-worst year ever for poverty alleviation, behind only 2020. In general, 10 million people are pushed into extreme poverty for every percentage point increase in food prices.</li>
            <li>ILO estimates that all of the partial recovery in paid hours of work witnessed globally in 2021 may be erased by the second quarter of 2022.</li>
            <li>The rising energy prices will increase energy poverty, leading people to return to using biomass, which can disproportionately affect women. When energy resources are too expensive or scarce, women spend more time fulfilling the energy needs of households. Access to energy also plays a key role in women’s small-scale income-earning activities in the informal sector.</li>
          </ul>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.left} src={figure5} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.left} src={figure6} />}
          </IsVisible>
          <h4>Impact of the war on food security</h4>
          <ul>
            <li>Fast-growing numbers of hungry people are at the leading edge of the cost-ofliving crisis.</li>
            <li>In 2022, between 179 and 181 million people are expected to face Crisis or worse conditions (IPC/CH Phase 3 or higher) in 41 out of the 53 countries where data are monitored by the Global Network Against Food Crises.</li>
            <li>The increase in hunger since the start of the war may in fact be higher and more widespread. In planning ahead for its operations in 81 countries, as of now WFP estimates that in just two years, the number of severely food insecure people doubled from 135 million pre-pandemic to 276 million at the start of 2022. The ripple effects of the war in Ukraine are expected to drive this number up to 323 million in 2022.</li>
            <li>36 million people are forecasted to face Emergency conditions or worse (IPC/CH Phase 4 or higher) in 36 countries in 2022, according to the Global Network Against Food Crises. Because of the shock of the war, among other factors, the number of chronically undernourished people are expected to increase in 2022, according to FAO. Under a moderate shock scenario, the global number of undernourished people in 2022 would increase by 7.6 million. Under a severe shock scenario, the number of undernourished people will increase by 13.1 million.</li>
            <li>Simulating the export shortfall expected from Ukraine and the Russian Federation during 2022 and 2023, and assuming no increase in the global availability of food as a result of increased food production elsewhere, FAO expects the number of undernourished people will increase by close to 19 million in 2023.</li>
          </ul>
          <p>The livelihoods of more than 2 billion small producers, farm labourers, rural workers and their families are at risk, not least because they already cannot afford a healthy diet</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.right} src={figure7} />}
          </IsVisible>
          <ul>
            <li>Women comprise 43 per cent of the agricultural labour force in developing countries and account for two thirds of the world’s 600 million poor livestock keepers.</li>
            <li>At particular risk are young informal workers contributing to family farms, home-based micro-level entrepreneurs and unskilled workers, as well as the poor in rural and urban areas, particularly those whose incomes depend on the agri-food economy, including many refugees and displaced people.</li>
          </ul>
          <p>People are coping with the crisis on a day-to-day basis through actions with worrying long-term consequences for nutrition and early childhood development therefore converting what can be a short-term crisis into a long-term protracted crisis with severe consequences on long term poverty, income distribution and development outcomes for decades to come if immediate actions are not taken. Some of the most worrying signs of these are:</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.left} src={figure8} />}
          </IsVisible>
          <ul>
            <li>People are already reducing food purchases, and may be reducing the number of nutritious items, skipping meals or eating smaller portions. Women and girls who often eat less and eat last are particularly affected.</li>
            <li>Families are cutting back on health visits and cooking fuel. Children are being taken out of school and put to work.</li>
            <li>Working animals are being sold and families are taking on more debt, at higher interest rates.</li>
          </ul>
          <p>Even before the war, food import bills across developing countries had risen due to higher prices in global markets. In particular:</p>
          <ul>
            <li>By the end of 2021, the global food import bill was $268 billion higher than pre-pandemic levels, with nearly two thirds of the increase concentrated in developing countries. In most cases, the bulk of these increases were due to price effects, as opposed to higher quantities imported, especially in Africa, Asia and Europe.</li>
            <li>The cost of food imports in 2020–2021 grew most quickly in Latin America and the Caribbean and in the least developed countries (figure 3).</li>
          </ul>
          <h3>3. A fertilizer crisis and trade restrictions threaten to exacerbate the crisis</h3>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.right} src={figure9} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.right} src={figure10} />}
          </IsVisible>
          <h4>A fertilizer crisis and a rise in trade restrictions threaten to exacerbate the crisis into 2023</h4>
          <p>Two factors – declining fertilizer affordability and rising export restrictions – may worsen the medium-term outlook. Both act by disrupting markets and accelerating the ‘distributional’ component of this crisis: fertilizers may not arrive on time and in the right quantities and prices to the fields where they are needed, and export restrictions may complicate the delivery of essential food supplies to the most vulnerable. In combination, they threaten to transform the current crisis of access into a future crisis of availability.</p>
          <h4>The fertilizer crunch leads to the threat of a broader and longer crisis</h4>
          <p>One out of every two people worldwide depend on agricultural products that use fertilizers. Higher energy costs and a loss of supply from the Russian Federation and Belarus have led to fertilizer prices rising even faster than food prices (figure 4).</p>
          <h5>Rising fertilizer costs mean many farmers can no longer afford to use fertilizers on crops and cannot increase production to meet global demand</h5>
          <p>Instead, farmers use much less fertilizer, resulting in lower yields and leading to an overall decrease in food production and availability in coming seasons.</p>
          <ul>
            <li>The decline in fertilizer affordability among farmers is even more significant with regard to crops for which there have not been price increases, such as rice (figure 5).</li>
            <li>The price of rice is 4.6 per cent lower than in the same period in 2021. Rice farmers are therefore finding it more difficult to offset rising fertilizer costs with higher sell-side prices. If high fertilizer prices persist into the next planting season, the present crisis in wheat and vegetable oils could extend to a crisis in rice, affecting billions more people in the Americas and Asia.</li>
            <li>Rice is the most consumed staple worldwide, feeding more than 3 billion people. The clock is ticking on fertilizer availability and procurement for the coming growing seasons across developing countries (figure 6).</li>
            <li>Among regions currently lacking adequate fertilizer sources, the situation in West Africa is the most time sensitive, as the planting season begins in May and June. Planting will begin in other regions in the coming months, and the increase in fertilizer prices can have different effects depending on the region, compromising the livelihoods of millions of people (figure 7). New fertilizer plants tend to take 2–5 years to become operational, meaning that fertilizer suppliers are unable to react quickly to higher levels of global demand. The issue is therefore distributional in nature because market forces will take too long to correct it. Due to this critical fertilizer issue, without appropriate multilateral action, food prices may continue to increase, including for a wider range of staples.</li>
          </ul>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure11} />}
          </IsVisible>
          <h4>Export restrictions on food and fertilizers have surged since the start of the war</h4>
          <ul>
            <li>The scale of current restrictions has now surpassed that experienced during the food price crisis in 2007/08, affecting 17.3 per cent of total calories traded globally.</li>
            <li>This further aggravates the crisis; export restrictions during the food price crisis in 2007/08 contributed to 40 per cent of the increase in agricultural prices over the period.</li>
            <li>Since 24 February 2022, more than 200 trade-related policy measures have been recorded, both trade-facilitating measures and trade-restricting measures.35 About 80 per cent of these measures affect agricultural products or fertilizers. Of these, 109 measures are export restricting measures such as bans on the export of fertilizers and certain food products, taken by 63 countries.</li>
          </ul>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure12} />}
          </IsVisible>
          <p>The situation is critical and strong cooperation is required to avoid more restrictions. The crisis in food and fertilizers will worsen quickly if the international community does not act now. Without immediate preventative steps, current disruptions in food systems will heighten the risk of social unrest in many countries, such as the unrest that occurred in several countries following the food price crisis in 2007/08.</p>
          <h3>4. This is a global crisis, not confined to any one region</h3>
          <p>As a follow-up to the initial UN Global Crisis Response Group analysis, the United Nations regional economic commissions have looked at the capacity of countries to cope, confirming that between 1.6 billion and 1.7 billion people live in countries severely exposed to at least one of the three transmission channels of the crisis, namely, rising food prices, rising energy prices and tightening finances. Of greatest concern, 1.2 billion people live in countries exposed to a “perfect storm” of all three dimensions at once. However, not all regions and subregions are exposed in the same way.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure13} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure14} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure15} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure16} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure17} />}
          </IsVisible>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full} src={figure18} />}
          </IsVisible>
          <h3>5. Policy recommendations</h3>
          <p>Given the systemic nature of this crisis, strong political will is needed. Piece-meal approaches will not work. The vicious cycle dynamics this brief highlights show that to solve just the food dimension of this crisis, important efforts will also be needed in energy and finance. Just as a family may skip a meal to pay for a minimum of electricity, a country may be forced to reduce food imports if their currency devalues, or debt service payments increase. <span className={style.highlight}>The FAO’s recent proposal of a Food Import Financing Facility is a good example of the kind of comprehensive multi-dimensional, multi-stakeholder, quickly deployable policies needed at this time.</span></p>
          <p>Policies should be structural and consider the medium-term to prevent an even worse crisis, especially on food. The fertilizer issue is key in this regard. <span className={style.highlight}>Restoring fertilizer availability and ensuring smallholder access with close monitoring of fertilizer supplies everywhere for the next 6 to 18 months will be critical</span> to ensure food prices do not increase further and spread to other food commodities, like rice, in coming seasons.</p>
          <p>The humanitarian response is key for those already in need, but <span className={style.highlight}>a preventative approach is needed to avoid a larger and more general crisis. Policymakers must target wider groups of vulnerable people around the poverty line, and support not only lives but livelihoods</span>. This includes poor families but also other vulnerable groups, such as informal workers, women and girls, smallholders and other populations already weakened by the socio-economic impacts of the COVID-19 pandemic and adverse climate events, such as drought and extreme heat. This also includes immediate direct support for MSMEs in the agri-food sectors going out of business due to the crisis across the developing world. Without swift attention to this wider group of at-risk populations, the future cost of humanitarian relief for an eventual larger crisis will be far greater.</p>
          <p>Even though consensus building is more difficult today, as shown by the lack of joint communiques at recent global fora, it is important policymakers continue their endeavours in producing truly needed coordinated and multilateral efforts in the areas which call for urgent treatment.</p>
          <p><span className={style.highlight}>To break the vicious cycles that feed into and accelerate this cost-of-living crisis, two broad approaches are required, namely, mitigating the impacts of the shock and increasing the capacity of people and countries to cope.</span></p>
          <ul>
            <li>To break the vicious cycles that feed into and accelerate this cost-of-living crisis, two broad approaches are required, namely, mitigating the impacts of the shock and increasing the capacity of people and countries to cope.
              <ul>
                <li>Other measures to improve availability, while also building resilience, can include: increasing local production of different food commodities (encouraging consumption of unfamiliar varieties); diversify sources of imported foods (receiving support, when available, for higher food import bills), reducing food loss and waste; improving availability of, and farmer access to fertilizer; and sustaining the transition to sustainable production as promoted by the 2021 UN Food Systems Summit.</li>
                <li>To boost energy security, efforts can be made to significantly scale up renewable energy investments across technologies like solar, wind, hydrogen etc. Current global supply chain issues, amongst others, are impacting availability and costs of materials for renewable energy systems, and interventions such as investments in localized manufacturing/assembly plants in regional hubs.</li>
                <li>Demand management measures should also be explored for energy markets. For Europe in particular, energy demand management practices and technologies should be piloted over the coming months in preparation for the winter.</li>
                <li>This crisis shows the importance of developing energy transition plans and integrated energy plans including ending energy poverty goals.</li>
              </ul>
            </li>
            <li>To increase the capacity of people and countries to cope, social protection systems and safety nets must be widened and strengthened for urgent use and fiscal space must beincreased. Both social protection measures and fiscal space are in fact linked – countries need support from the financial institutions to increase their fiscal space to in turn increase social protection spending, including cash transfers to the most vulnerable. The international community needs to support countries protect their poor and vulnerable. It is important governance issues are addressed to ensure that these resources are well spent. Emergency social protection policies should be targeted, time-bound, consistent with sustainable development goals and not allocated universally.
              <ul>
                <li>Special attention must be given to the nutritional needs of the vulnerable, as well as women and children.</li>
                <li>Vulnerable energy consumers must be shielded from soaring prices, including through relief measures funded by windfall taxes on energy companies.</li>
                <li>As part of the effort to increase fiscal space countries must commit to improving the governance of the seeds and fertilizer distribution mechanisms. Historical inefficiencies and weak governance have been costly and undermined efficient and effective markets.</li>
                <li>Humanitarian assistance is also needed and should be provided early on, in collaboration with development actors, with cash as well as food and other essentials, in ways that strengthen local capabilities and minimise dependence on external groups. In this context, it is critical that countries reconsider proposed cuts to Official Development Assistance commitments, which ought instead to be respected and increased.</li>
              </ul>
            </li>
          </ul>
          <p><span className={style.highlight}></span>There is no answer to the cost-of-living crisis without an answer to the finance crisis in developing countries.</p>
          <ul>
            <li>Existing international financing mechanisms to support strong national fiscal responses need to be fully funded and operationalized quickly. During the recent Spring Meetings of the International Monetary Fund (IMF) and the World Bank Group (WBG) not enough commitments were made available for the international finance institutions to use all their capacity to act quickly. Albeit, important commitments to the Poverty Reduction and Growth Trust and the newly created Resilience and Sustainability Trust, which should be allocated immediately. All available rapid disbursement mechanisms at international financial institutions must be reactivated with raised access limits.</li>
            <li>Multilateral development banks (MDBs) must be capitalized and apply more flexible lending ratios. MDBs should also use all tools to increase access to finance for countries including applying more flexible and concessional lending rates and expanding borrowing limits, as well as triggering any and all crisis lending instruments such as the crisis response window of the World Bank. Given tightening financial conditions, bond markets are closed to many countries, and those that can borrow must do so at rates that compromise the sustainability of their debts.</li>
            <li>Given the global nature of the present crisis, IMF interest rate surcharges should be suspended for at least two years.</li>
            <li>A new emission of Special Drawing Rights, as well more pledges to recycle them from countries with strong foreign reserve positions, is urgently needed.</li>
          </ul>
          <p><span className={style.highlight}></span>The global debt architecture is not ready to face the current crisis</p>
          <ul>
            <li>The current crisis arrives during a moment of record-high debt levels and rising interest rates. At the start of the COVID-19 pandemic, debt levels were much lower. During the crisis, monetary policy was also much more supportive, with major central banks slashing interest rates and dramatically increasing liquidity in global markets. Current tighter monetary conditions increase the risk of a systemic debt crisis.</li>
            <li>The G20’s Debt Service Suspension Initiative should be renewed, and maturities should be pushed back by two to five years.</li>
            <li>The Common Framework for Debt Treatment, which is still to show its use to the few countries that have requested it, needs to be improved.</li>
            <li>A systematic approach to multilateral debt restructuring and relief which includes vulnerable middle-income countries must also be pursued to ensure long-term solutions to current challenges.</li>
          </ul>
          <p>In pursuing this ambitious agenda, policymakers should consider the distributional nature of this crisis. Global food and energy markets are under severe stress and market-driven solutions are extremely limited. As the case of fertilizer affordability shows, price rises do not automatically lead to increases in production, which shows how the market may require more time to react than is available. Unprecedented disruptions in global supply chains, marked by unviable transport routes and destroyed infrastructure in Ukraine, are a major component of the recent price rises. These cannot be solved in the short-term.</p>
          <p>Policymakers should understand the full complexity of recent rises to the cost of living – in the current context, inflation is more a description than a cause. Actions aimed at containing itby reducing demand, such as increasing interest rates, will not mitigate these supply-led disruptions. At the same time, attempts to preserve limited supply in the face of these disruptions, such as export bans, may also accelerate price volatility and prolong the crisis. The global community should avoid a commodity scramble at all costs. Though there is enough food, energy and resources in the system, record-high prices imply supplies reach only those able to afford them. Concrete efforts should be made to ensure critical supplies of food and energy reach the most vulnerable. Access, price and timing have to be considered together if an integral solution is going to be provided. Today, the world faces a <em>crisis of access</em>, where there is enough of everything but at the wrong price, the wrong place, and the wrong time. Tomorrow, the world may face a <em>crisis of availability</em>, where essential supplies arrive either too late or in too few a quantity, even despite high prices.</p>
          <p>Time is of the essence and it is running out. This Brief aims to show the vicious cycle and tradeoff dynamics that sustain and exacerbate this crisis, which will snowball into a wider crisis, if not enough action is taken today. There is still scope to prevent most of the damage from this crisis, and to support countries deal with it before it is too late. The cost of doing this later will be much higher than it is now.</p>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
};

export default App;
