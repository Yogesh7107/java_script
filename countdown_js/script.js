
    //  Setting Up the Timer Controls
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn")


// Start Button Functionality

startBtn.addEventListener("click", () => {
    let sec = 60;
    timer = setInterval(() => {
        let time = document.querySelector("p").innerHTML = '00: 00: ' + sec;
        if (sec <= 0) {
            clearInterval(timer);
        }
        sec--;
    },1000)
})


// Pause Button Functionality
pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
});

// Reset Button Functionality

resetBtn.addEventListener("click", () => {
    sec = 0;
    time.innerHTML = '00: 00: 0' + sec;
})

// Displaying Quotes

let arr = [
    "क़ामयाब होने के लिए नहीं, क़ाबिल होने के लिए पढ़ो…  — बाबा रणछोड़दास",
    "लाइफ एक रेस है, अगर तेज नहीं भागोगे तो लोग तुम्हें कुचलकर आगे निकल जाएंगे…' — बाबा रणछोड़दास",
    "जिस चीज को आप चाहते हैं, उसमें असफल होना, जिस चीज को आप नहीं चाहते उसमें सफल होने से बेहतर है। — जॉर्ज बर्न्स",
    "जो सभी का मित्र होता है, वो किसी का मित्र नहीं होता — अरस्तू",
    "जीवन की लंबाई नहीं गहराई मायने रखती है। — राल्फ वाल्डो इमर्सन",
    "बिना रुके, एक लक्ष्य का पालन करना: यही सफलता का रहस्य है। — अन्ना पावलोवा",
    "बड़ा काम करने का एकमात्र रास्ता है, वह है आपके काम से प्यार करना। — स्टीव जॉब्स",
    "अंधेरे को अंधेरे से नहीं निकाला जा सकता। नफरत को नफरत से नहीं निकाला जा सकता, केवल प्यार ही इसे निकाल सकता है — मार्टिन लुथर किंग जूनियर",
    "विश्वास करो कि आप कर सकते हो, तब आप आधी यात्रा पूर्ण कर चुके हो ― थेडोर रूजवेल्ट",
    ];

let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex+1)%arr.length;
    document.querySelector("#quote").innerText = arr[currentIndex];
},2000);