// Define a markdown table string
const markdownTable = `
| Country | Last Q1/23 | Q2/23 | Q3/23 | Q4/23 |
| --- | --- | --- | --- | --- |
| Albania | 2.30 | 0.3 | 1.0 | 0.3 |
| Angola | 0.80 | 0.6 | 0.4 | 1.0 |
`;

// Remove leading and trailing white spaces and split by newline
const rows = markdownTable.trim().split('\n');

// Remove markdown table formatting from header row
const header = rows[0].replace(/[\|\s]/g, '').split('|').filter(Boolean);

// Remove markdown table formatting from data rows
const dataRows = rows.slice(2).map(row => row.replace(/[\|\s]/g, '').split('|').filter(Boolean));

// Create an array of time series objects
const timeSeriesData = dataRows.map(row => {
  const country = row[0];
  const timeSeriesValues = header.slice(1).map((period, index) => ({
    period: period.trim(),
    value: parseFloat(row[index + 1])
  }));
  return { country, timeSeriesValues };
});

// Convert the array of time series data to a JSON string
const json = JSON.stringify(timeSeriesData, null, 2);

// Output the JSON string
console.log(json);




// This script takes a markdown table string and converts it into an array of time series data in JSON format.

// 1. The markdown table string is defined and assigned to the variable markdownTable.
// 2. The markdown table string is split into an array of rows by newline characters and leading/trailing whitespace is removed. This array of rows is assigned to the variable rows.
// 3. The first row of the table, which contains the headers, is extracted and the markdown formatting is removed. The resulting array of header names is assigned to the variable header.
// 4. The remaining rows of the table, which contain the data, are extracted and the markdown formatting is removed. The resulting array of data rows is assigned to the variable dataRows.
// 5. An array of time series objects is created by iterating over the array of data rows. For each data row, an object is created with the country name and an array of time series values. The time series values are created by iterating over the header array and creating an object for each header name that contains the period and the value from the data row. The resulting array of time series objects is assigned to the variable timeSeriesData.
// 6. The JSON.stringify() method is used to convert the timeSeriesData array to a JSON string. The resulting JSON string is assigned to the variable json.
// 7. The JSON string is output to the console using the console.log() method.
