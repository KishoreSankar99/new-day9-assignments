var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload =function(){
  var data = JSON.parse(request.response);
  let res = data.filter((item)=>item.population).map((item)=>item.population).reduce((acc,item)=>acc+item);
  console.log(res)
}