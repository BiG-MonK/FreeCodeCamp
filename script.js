$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(json) {
//http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", function(json) {
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
/*
$('#quoteGETJSON').click(function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
    .done(update)
    .fail(handleErr);
});

$('#quoteAJAX').click(function() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      }
    })
    .done(update)
    .fail(handleErr);
});

function update(response) {
  $('#log').prepend('<pre>' + $('#response').html() + '</pre>');
  $('#response').html(JSON.stringify(response));
}

function handleErr(jqxhr, textStatus, err) {
  console.log("Request Failed: " + textStatus + ", " + err);
}*/