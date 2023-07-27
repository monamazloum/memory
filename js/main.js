var quotes = [{
    quote:"You miss 100% of the shots you don't take.",
Auther:"--Wayne Gretzy",

},
{
    quote:"It's not what happens to you, but how you react to it that matters.",

    
    Auther:"--Epictetus",
},
{
    quote:"Do not take life too seriously. You will not get out alive.",

    

    
    Auther:"--Elbert Hubbard",
},
{
    quote:"The best revenge is massive success.",

    

    

    
    Auther:"--Frank Sinatra",
},
{
    quote:"It's not what happens to you, but how you react to it that matters.",

    
    Auther:"----Epictetus",
},]

function addQuotes(){
    var numQuote = Math.floor(Math.random()*quotes.length)

   document.getElementById("quote").innerHTML=quotes[numQuote].quote;
   document.getElementById("auther").innerHTML=quotes[numQuote].Auther;

}