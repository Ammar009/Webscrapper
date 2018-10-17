var request = require('request');
var cheerio = require('cheerio');

var url="https://cert.gov.om/advisory.aspx";

request(url, function(err, response, html)
{
    if(!err){
        var $ = cheerio.load(html);
        var allItems = $("#ContentPlaceHolder1_UpdatePanel1").children();
        var items= [];
        allItems.each(function(index)
    {
        items.push($("#ContentPlaceHolder1_UpdatePanel1").children.eq(1).children().eq(1).children.eq(1).children.eq(1).find("a.title").text())
    });
       console.log(items); 
    
    }

});