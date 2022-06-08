import React, { useState, useEffect } from 'react';
import style from './../styles/styles.less';

// https://d3js.org/
// import * as d3 from 'd3';

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
  const [data, setData] = useState(false);
  
  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-ukraine_brief_2.json' : './data/data2020.json';
    try {
      d3.json(data_file).then((json_data) => {
        setData(json_data);
      });
    }
    catch (error) {
      console.error(error);
    }
  }, []);


  return (
    <div className={style.app}>

      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
};

export default App;
