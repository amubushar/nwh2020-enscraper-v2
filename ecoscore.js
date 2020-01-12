window.onload = function(){
    var materials = [
        "cotton", "Cotton",
        "glass", "Glass",
        "plastic", "Plastic",
        "steel", "Steel",
        "paper", "Paper"
    ];
    var impact = [
        "30", "30",
        "80", "80",
        "50", "50",
        "100", "100",
        "10", "10"
    ];

    const re = new RegExp(materials.join("|"), 'gi');
    var matches = document.documentElement.innerHTML.match(re);

    var propertyList = ['Material', 'Product Dimensions', 'Number of Items', 'Item Weight', 'Parcel Dimensions', 'Shipping Weight'];
    var x = document.getElementsByClassName("pdTab");
    for (var j = 0; j < x.length; j++) {
        labels = x[j].getElementsByClassName("label");
        for (var i = 0; i < labels.length; i++) {
            propertyLoc = propertyList.indexOf(labels[i].innerText);
            if(propertyList[propertyLoc] == "Item Weight"){
                var weight = labels[i].parentElement.getElementsByClassName("value")[0].innerText;
                var number_weight = weight.replace(/[^0-9,.]/g,'');
                var gOrKg = weight.search("Kg");
                if(gOrKg != -1){
                    number_weight *= 1000;
                }
                alert(number_weight);
            }
        }
    }

    if(matches != null){

        var unique = matches.filter(function(element, index, self){
            return index === self.indexOf(element);
        });

        var position = materials.indexOf(unique[0]);

        var ecoscore = impact[position] * number_weight;

        alert("Ecoscore is:" + ecoscore)
    }
    else{
        alert("No material found");
    }

}