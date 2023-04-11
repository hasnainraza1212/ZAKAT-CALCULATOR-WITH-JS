{
  var typed = new Typed('#typed-element', {
    strings: ["أستغفر الله", "أستغفر الله"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: '',
  });
}
let totalAmount;
function zakatCalculate() {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
  })
  var silverQuantity = 0;
  var goldQuantity = 0;
  var propertyAmount = 0
  var investmentAmount = 0
  var cashDebtAmount = 0;
  var zakatForGold = 0;


  var goldInput = document.getElementById("gold");
var silverInput = document.getElementById("silver");
var propertyInput = document.getElementById("property");
var investmentInput = document.getElementById("investment");
var cashDebtInput = document.getElementById("cashDebt");

  var silver = document.querySelector('#silver');
  silver.defaultValue = 0
  silverQuantity = silver.value;
  silverQuantity = parseFloat(silverQuantity);

  silverInput.addEventListener("blur", function() {
    if (silverInput.value.trim() === "") {
      silverInput.value = 0;
    }
  });


  var gold = document.querySelector('#gold');
  gold.defaultValue = 0
  goldQuantity = gold.value;
  goldQuantity = parseFloat(goldQuantity);

  goldInput.addEventListener("blur", function() {
    if (goldInput.value.trim() === "") {
      goldInput.value = 0;
    }
  });





  var property = document.querySelector('#property');
  property.defaultValue = 0
  var propertyAmount = property.value;
  propertyAmount = parseFloat(propertyAmount);

  propertyInput.addEventListener("blur", function() {
    if (propertyInput.value.trim() === "") {
      propertyInput.value = 0;
    }
  });


  var investment = document.querySelector('#investment');
  investment.defaultValue = 0
  var investmentAmount = investment.value;
  investmentAmount = parseFloat(investmentAmount);

  investmentInput.addEventListener("blur", function() {
    if (investmentInput.value.trim() === "") {
      investmentInput.value = 0;
    }
  });


  var cashDebt = document.querySelector('#cashDebt');
  cashDebt.defaultValue = 0
  var cashDebtAmount = cashDebt.value;
  cashDebtAmount = parseFloat(cashDebtAmount)

  
  cashDebtInput.addEventListener("blur", function() {
    if (cashDebtInput.value.trim() === "") {
      cashDebtInput.value = 0;
    }
  });
  
  
  
  
  
  
 




  var goldLivePrice = 18056;
  var silverLivePrice = 219.7;
  var SilverFinalPrice = parseFloat(silverQuantity) * parseFloat(silverLivePrice);
  var goldFinalPrice = parseFloat(goldQuantity) * parseFloat(goldLivePrice);
  var finalPropertyOwnedAmount = parseFloat(propertyAmount);
  var finalDebtAmount = parseFloat(cashDebtAmount);
  var finalInvest = parseFloat(investmentAmount);
  netAssets = parseFloat(finalPropertyOwnedAmount + finalInvest - finalDebtAmount);
  totalAmount = parseFloat(SilverFinalPrice + goldFinalPrice + finalPropertyOwnedAmount + finalInvest - finalDebtAmount);
  zakatForGold = parseFloat(goldFinalPrice / 40).toFixed(2);
  zakatForSilver = parseFloat(SilverFinalPrice / 40).toFixed(2);
  goldFlag = false;
  silverFlag = false;


  if (goldQuantity >= 87.48) {
    goldFlag = true;
    Swal.fire({
      iconHtml: '<img src="images/charity.png">',
      title: `  PKR ${zakatForGold} <br> <br>آپ کی زکوٰۃ کی رقم ہے۔  <br>  `,
      text: `دوسروں کے دکھ دور کرنے کا سب سے بہترین طریقہ؟ آپ کی زکوٰة۔ آج ہی اپنے زکوٰة ادا کریں اور کسی کے زندگی کو تبدیل کریں۔`,
      buttonsStyling: false,
      confirmButtonClass: "my-ok-button",
      confirmButtonText: "Donate Now!",
      buttons: true,
      
    })
    .then((result) => {
      if (result.isConfirmed) {
        window.open("https://www.saylaniwelfare.com/en/donate", "_blank");

      }
    });


  }

  else if (silverQuantity >= 612.36) {
    silverFlag = true;
    Swal.fire({
      iconHtml: '<img src="images/charity.png">',
      title: `  PKR ${zakatForSilver} <br> <br>آپ کی زکوٰۃ کی رقم ہے۔  <br>  `,
      text: `دوسروں کے دکھ دور کرنے کا سب سے بہترین طریقہ؟ آپ کی زکوٰة۔ آج ہی اپنے زکوٰة ادا کریں اور کسی کے زندگی کو تبدیل کریں۔`,
      buttonsStyling: false,
      confirmButtonClass: "my-ok-button",
      confirmButtonText: "Donate Now!",
      buttons: true,
      
    })
    .then((result) => {
      if (result.isConfirmed) {
        window.open("https://www.saylaniwelfare.com/en/donate", "_blank");


      }
    });

  }
  else if (((totalAmount >= 100000) )) {
    var estimatedZakat = (totalAmount * 0.025).toFixed(2);
    Swal.fire({
      iconHtml: '<img src="images/charity.png">',
      title: `  PKR ${estimatedZakat} <br> <br>آپ کی زکوٰۃ کی رقم ہے۔  <br>  `,
      text: `دوسروں کے دکھ دور کرنے کا سب سے بہترین طریقہ؟ آپ کی زکوٰة۔ آج ہی اپنے زکوٰة ادا کریں اور کسی کے زندگی کو تبدیل کریں۔`,
      buttonsStyling: false,
      confirmButtonClass: "my-ok-button",
      confirmButtonText: "Donate Now!",
      buttons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://www.saylaniwelfare.com/en/donate", "_blank");


      }
    });
  }
  else if (totalAmount < 100000) {
    Swal.fire({
      iconHtml: '<img src="images/charity.png">',
      title: '',
      text: 'آپ زکوٰۃ ادا کرنے کے اہل نہیں ہیں۔',
      buttonsStyling: false,
      confirmButtonClass: "my-ok-button-cancel",
      confirmButtonText: "جزاك اللهُ خيراً",
      buttons: true,
     

    })
  }


}

window.addEventListener("scroll", function () {
  var nav = document.querySelector(".nav-scroll");
  if (window.pageYOffset > 0) {
    nav.classList.add("nav-colored");
  } else {
    nav.classList.remove("nav-colored");
  }
});

var menuBtn = document.querySelector(".btn-parent");
var navLinks = document.querySelector(".navLinks")
var menuOpen = false;
menuBtn.addEventListener('click', () => {

});
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        navLinks.classList.add("open");
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        navLinks.classList.remove("open");
        menuOpen = false;
    }

});

var now = new Date();
var year = now.getFullYear();
var copyright = document.querySelector(".copyright");
copyright.innerHTML = ` Copyright © ${year} Mr. Hasnain Raza. All rights reserved`;


window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
});

  // console.log( propertyInput.value );
  // console.log("a");
