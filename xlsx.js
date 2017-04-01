if (typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('Roadmap Pivot.xlsx');

var sheet_name_list = workbook.SheetNames;
sheet_name_list.forEach(function (y) { /* iterate through sheets */
  var worksheet = workbook.Sheets[y];

  var json = XLSX.utils.sheet_to_json(worksheet);
 


  //   const data = [{
  //             label: 'Patient Safety',
  //             data: [{
  //                 label: 'MedStar Findings',
  //                 type: TimelineChart.TYPE.POINT,
  //                 at: new Date([2017, 3, 1])
  //             },
  //             {
  //                 label: 'Research',
  //                 type: TimelineChart.TYPE.INTERVAL,
  //                 from: new Date([2017, 1, 1]),
  //                 to: new Date([2017, 2, 12]),
  //                 customClass: 'blue-interval'
  //             }
  //             ]
  //         }, {
  //             label: 'Phys Doc Quality',
  //             data: [{
  //                 type: TimelineChart.TYPE.POINT,
  //                 at: new Date([2017, 2, 10]),
  //                 label: 'V1 - TAT, Doc Sim'
  //             },
  //             {
  //                 label: 'CCL and R&D',
  //                 type: TimelineChart.TYPE.INTERVAL,
  //                 from: new Date([2017, 1, 1]),
  //                 to: new Date([2017, 2, 1]),
  //                 customClass: 'blue-interval'
  //             }
  //             ]}];
  //   //

  // });

  console.log('Done!');
