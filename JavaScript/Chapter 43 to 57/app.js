

        

//  function checkAddress(fieldId) {
//      var val = document.getElementById(fieldId).value;
//      if (val === "") {
//      alert("Email address required.");
//      }
//      }



// function fillCity() {
//      var cityName;
//      var zipEntered = document.getElementById("zip").value;
//      switch (zipEntered) {
//      case "60608" :
//      cityName = "Chicago";
//      break;
//      case "68114" :
//      cityName = "Omaha";
//      break;
//      case "53212" :
//      cityName = "Milwaukee";
//      }
//      document.getElementById("city").value = cityName;
//      }



//  function expandLoris() {
//      var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which
//     make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
//     distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
//     adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
//     Slow lorises have a toxic bite, a rare trait among mammals.";
//      document.getElementById("slowLoris").innerHTML = expandedParagraph;
//      }


// var headingEl = document.getElementById('greet');
// headingEl.innerHTML = 'fdasfsda';



//  function greetUser(){


//       var userName = "ali"; 
//       console.log(userName);    

//  }

//  function greetAnotherUser(){
//          var userName = "Haider"; 
//          console.log(userName);
    
    
//      }



// function getProvidedEl(getProvidedEl) {
//     getProvidedEl.innerHTML = 'Hello Updated Event';
//  }







// function expendPara(providedEl) {
//          providedEl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius, ipsa voluptates quis officiis deserunt beatae nam numquam, quidem earum saepe possimus iusto accusamus, ut eligendi! Possimus in magni nostrum?';
//      }
    
//      function compress(providedEl) {
//          providedEl.innerHTML = 'Hello Events...';
//      }
    



//       var longParaFlag = false;
// var longPara = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius, ipsa voluptates quis officiis deserunt beatae nam numquam, quidem earum saepe possimus iusto accusamus, ut eligendi! Possimus in magni nostrum?';
// var shortPara = 'Hello Events...';
// function expendPara(providedEl) {
//     if(longParaFlag !== true){
//         providedEl.innerHTML = longPara;
//         longParaFlag = true;
//     }
//     else{
//         providedEl.innerHTML = shortPara;
//         longParaFlag = false;
//     }
// }







// var msgbox = document.getElementById('msgbox');
// var flagFirst = true;
// function showMsg() {
//     if (flagFirst === true) {
//         msgbox.innerHTML = 'Click the box to see the magic';
//         flagFirst = false;
//     }
// }


// function hideMsg() {
//     msgbox.innerHTML = '';
// }

// function changeColor(providedEl) {
//         var colorsArr = ['red', 'blue', 'green'];
//         var backColorsArr = ['yellow', 'orange', 'purple'];
//         var colorIndex = Math.floor(Math.random() * 3);
//         var backColorIndex = Math.floor(Math.random() * 3);
    
//         providedEl.style.color = colorsArr[colorIndex];
//         providedEl.style.backgroundColor = backColorsArr[backColorIndex];
//     }







// function makeFieldGrey(providedEl) {
//         providedEl.style.backgroundColor = 'grey';
//     }
    
//     function makeFieldWhite(providedEl) {
//         providedEl.style.backgroundColor = 'white';
//     }
    



// function makeItProm() {
//         var userInput = prompt('what is your name?');
    
//         var allPara = document.getElementsByTagName('p');
//         // var allDiv = document.getElementsByTagName('div');
//         // var allH1 = document.getElementsByTagName('h1');
//         // var abcdEl = document.getElementsByTagName('abcd');
//         // var lastParaMargin = allPara[allPara.length - 1].style.margin;
    
//         allPara[0].innerHTML = 'hello ' + userInput;
//         allPara[1].style.fontFamily = 'monospace';
    
//         for (var i = 0; i < allPara.length; i++) {
//             allPara[i].style.fontSize = '2em';
//             if (i % 2 === 0) {
//                 allPara[i].style.color = 'blue';
//             }
//             else {
//                 allPara[i].style.color = 'green';
//             }
//         }
//         // console.log(lastParaMargin);
//     }






// function assignColor(providedEl) {

//     providedEl.className += ' fontColor';
// }

// function getMargin(providedEl) {

//     // providedEl.style.margin = '0 auto'

//     var myMargin = providedEl.style.margin;
//     console.log(myMargin);

//     // var m = document.getComputedStyle("hello").margin;
//     // console.log(m);


// }



 function updateValue(cityID, provienceID) {
        var cityRef = document.getElementById(cityID);
        var provienceRef = document.getElementById(provienceID);
    
        if(cityRef.value.toLowerCase() === 'hyderabad'){
            provienceRef.value = 'Sindh'
        }
        else{
            provienceRef.value = 'Panjaab'
        }
    }
    