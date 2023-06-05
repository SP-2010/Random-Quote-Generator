var quote_author;
var quote_text;

function quote() {
    fetch("https://type.fit/api/quotes")
        .then((response) => response.json())
        .then((json) => {
            var randomQuoteNumber = Math.floor(Math.random() * json.length);
            quote_author = json[randomQuoteNumber].author;
            quote_text = json[randomQuoteNumber].text;
            if (quote_author == "null") {
                document.getElementById("quote").innerHTML =
                    "❝" + quote_text + "❞";
            } else {
                document.getElementById("quote").innerHTML =
                    "❝" + quote_text + "❞ -" + quote_author;
            }
        });
}

window.onload = quote;

function Refresh() {
    quote();
}
