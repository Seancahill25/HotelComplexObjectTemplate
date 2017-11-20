var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxury Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
}
// console.log(document.getElementById("label").nodeName);

for (var i =0; i < hotel.rooms.length; i++){
    console.log("start");
    var radioBtn = document.createElement("INPUT");
    var radioLbl = document.createElement("LABEL");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name" , "rooms");
    radioBtn.setAttribute("value" , i);
    radioBtn.setAttribute("id", "rooms" + i);
    radioLbl.innerHTML = hotel.rooms[i].name;
    console.log("stop");
    
    document.getElementById("radialSection").appendChild(radioBtn);
    document.getElementById("radialSection").appendChild(radioLbl);
}
//display rooms as radio options
// on form submission confirm rado was selected
// and checkmark checked