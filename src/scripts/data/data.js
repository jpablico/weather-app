fetch(
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Mckinney,Tx/?key=CK8PXYBKEK687PAUVQAXREQWH'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
