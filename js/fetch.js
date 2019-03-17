fetch("data.json".then(function(response){
  return response.json();
}).then(function(data){
  console.log(data);
});
//Arrow functions
fetch("data.json").then(response=>response.json()).then(data=> {
  console.log(data);
});
