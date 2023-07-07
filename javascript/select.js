var PhoneOne = {
    phone: "/images/iphone11.jpg",
    name: "Iphone 11",
    price: 58499,
    originalPrice: 60459,
    itemId: "I001"
}

var PhoneTwo = {
    phone: "/images/iphone12.jpg",
    name: "Iphone 12",
    price: 99499,
    originalPrice: 122999,
    itemId: "I002"
}

var PhoneThree = {
    phone: "/images/iphone13.jpg",
    name: "Iphone 13",
        price: 198499,
        originalPrice: 254590,
        itemId: "I003"
}

var PhoneFour = {
    phone: "/images/iphone14.jpg",
    name: "Iphone 14",
        price: 298499,
        originalPrice: 354590,
        itemId: "I004"
}
var selectId=decodeURIComponent(window.location.search)
var selectedItem=selectId.substring(1)

if(selectedItem==PhoneOne.itemId) {
    document.getElementById("iphone11").src=PhoneOne.phone
    document.getElementById("name1").innerText=PhoneOne.name
    document.getElementById("price1").innerText=PhoneOne.price
    document.getElementById("original1").innerText=PhoneOne.originalPrice
    var cost = PhoneOne.price
    qty(cost)
}

else if(selectedItem==PhoneTwo.itemId) {
    document.getElementById("iphone11").src=PhoneTwo.phone
    document.getElementById("name1").innerText=PhoneTwo.name
    document.getElementById("price1").innerText=PhoneTwo.price
    document.getElementById("original1").innerText=PhoneTwo.originalPrice
    var cost = PhoneTwo.price
    qty(cost)
}

else if(selectedItem==PhoneThree.itemId) {
    document.getElementById("iphone11").src=PhoneThree.phone
    document.getElementById("name1").innerText=PhoneThree.name
    document.getElementById("price1").innerText=PhoneThree.price
    document.getElementById("original1").innerText=PhoneThree.originalPrice
    var cost = PhoneThree.price
    qty(cost)
}

else if(selectedItem==PhoneFour.itemId) {
    document.getElementById("iphone11").src=PhoneFour.phone
    document.getElementById("name1").innerText=PhoneFour.name
    document.getElementById("price1").innerText=PhoneFour.price
    document.getElementById("original1").innerText=PhoneFour.originalPrice
    var cost = PhoneFour.price
    qty(cost)
}

function qty(cost) {
    document.getElementById("quantity").onkeyup = function() {
        let quantity = document.getElementById("quantity").value;
        let amount = cost
        if (quantity > 1) {
            total = quantity*amount;
            document.getElementById("total").innerText = total;
            UserLocation(total);
        }
        else if (quantity == 1) {
            total = amount;
            document.getElementById("total").innerText = total;
            UserLocation(total);
        }
    }
}

function UserLocation(total) {
    document.getElementById("location").onchange = function(){
        let derivery = document.getElementById("location").value
        let Karen = 500
        let Rongai = 1000
        let Kilimani = 400
        if (derivery == "Karen") {
            document.getElementById("total").innerText = Karen + total
        }
        else if (derivery == "Rongai") {
            document.getElementById("total").innerText = Rongai + total
        }
        else if (derivery == "Kilimani") {
            document.getElementById("total").innerText = Kilimani + total
        }
        if (derivery == " ") {
            document.getElementById("total").innerText = total
        }
    }
    
} 