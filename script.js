$.getJSON("https://talaikis.com/api/quotes/random/", function(json) {
	//var myStr = JSON.stringify(json);
  //myStr = JSON.parse(myStr);
  var html = "";
  //$("#test").html(JSON.stringify(json));
  console.log(json);
  json.forEach(function(val) {             //перебор каждого элемента в json
    var keys = Object.keys(val);
    html += "<div class = 'cat'>";
    keys.forEach(function(key) {
      html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
    });
    html += "</div><br>";
  });
 // alert(myStr[1]);
 $(".message").html(html);
 $(".ETH").html(json.symbol.price_usd);
 //$("#test").html(Object.keys[1]);
}); 


//	var html = "<strong>" + "key" + "</strong>: " + "val" + "<br>";
	//$("#test").html(html);