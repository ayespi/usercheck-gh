var userName = '/ayespi';
var type = 'GET';
var url = 'https://api.github.com/users';
var isAsync = false;
var request = new XMLHttpRequest();
var url2 = url+userName;

request.open(type, url2, isAsync);
request.send();
var data = request.response;
data = JSON.parse(data);
// var itemCount = data.length;
      var output = "";
        output += "<div class=\"col-md-3\">";
        output += "<p><img src=\""+data.avatar_url+"\"></p>";
        output += "<h4>GitHub Login: "+data["login"]+"</h4>";
        output += "<h4>Email: "+data["email"]+"</h4><hr/>";
        output += "</div>";

$("#results").append(output);
// console.log('Item Count: ' + itemCount);
console.log(request.status);
console.log(request.statusText);
