var PhoneOne = {
    phone: "/images/iphone11.jpg",
    name: "Iphone 11",
    price: 58499,
    originalPrice: 60459,
    itemId: "I001"
}
document.getElementById("iphone11").src = PhoneOne.phone;
document.getElementById("name1").innerText = PhoneOne.name;
document.getElementById("price1").innerText = PhoneOne.price;
document.getElementById("original1").innerText = PhoneOne.originalPrice;

var PhoneTwo = {
    phone: "/images/iphone12.jpg",
    name: "Iphone 12",
    price: 99499,
    originalPrice: 122999,
    itemId: "I002"
}

document.getElementById("iphone12").src = PhoneTwo.phone;
document.getElementById("name2").innerText = PhoneTwo.name;
document.getElementById("price2").innerText = PhoneTwo.price;
document.getElementById("original2").innerText = PhoneTwo.originalPrice;

var PhoneThree = {
    phone: "/images/iphone13.jpg",
    name: "Iphone 13",
        price: 198499,
        originalPrice: 254590,
        itemId: "I003"
}

document.getElementById("iphone13").src = PhoneThree.phone;
document.getElementById("name3").innerText = PhoneThree.name;
document.getElementById("price3").innerText = PhoneThree.price;
document.getElementById("original3").innerText = PhoneThree.originalPrice;

var PhoneFour = {
    phone: "/images/iphone14.jpg",
    name: "Iphone 14",
        price: 298499,
        originalPrice: 354590,
        itemId: "I004"
}

document.getElementById("iphone14").src = PhoneFour.phone;
document.getElementById("name4").innerText = PhoneFour.name;
document.getElementById("price4").innerText = PhoneFour.price;
document.getElementById("original4").innerText = PhoneFour.originalPrice;



document.getElementById("phone1").onclick = function() {
    window.location.href = "select.html" + "?" + PhoneOne.itemId
}

document.getElementById("phone2").onclick = function() {
    window.location.href = "select.html" + "?" + PhoneTwo.itemId
}

document.getElementById("phone3").onclick = function() {
    window.location.href = "select.html" + "?" + PhoneThree.itemId
}

document.getElementById("phone4").onclick = function() {
    window.location.href = "select.html" + "?" + PhoneFour.itemId
}
