
const yesButton = document.querySelector('.yesBtn');
const noButton = document.querySelector('.noBtn');
const outputShow = document.querySelector('.output');
const outputshowTow = document.querySelector('.output-r');

// function yesbtn(){
//     //yesButton.innerText = "hi";

// }
noButton.addEventListener("click", function (){
    const temp = yesButton.innerText;
    yesButton.innerText = noButton.innerText;
    noButton.innerText = temp;
   
    //change or enter test style or color
     outputShow.innerText = "YES";
     outputShow.style.color = '#d5ab9c';
     outputShow.style.display = 'block';
     outputshowTow.style.display = 'none';
     outputShow.style.background = '#18224b';
     outputshowTow.style.background = 'none';
    //  outputShow.style.transform  = 'rotateY(360deg)';

});


yesButton.addEventListener("click", function (){
    const temp = yesButton.innerText;
   
    yesButton.innerText = noButton.innerText;
    noButton.innerText = temp;
   
    //outputshowTow.innerText = "yes";

     //change or enter test style or color
    outputshowTow.innerText = "YES";
    outputshowTow.style.color = '#f5f5dc';
    outputShow.style.display = 'none';
    outputshowTow.style.display = 'block';
    outputShow.style.background = 'none';
    outputshowTow.style.background = '#3524df';
    // outputshowTow.style.transform = 'rotateX(360deg)';

     
});

    function submit(){
        const submitButton = document.querySelector('.poppup');
        // const cancenButton = document.querySelector('.canBtn');
        submitButton.style.display = "block";
    }
    function canbtn(){
        // const submitButton = document.querySelector('.poppup');
        const cancenButton = document.querySelector('.poppup');
        cancenButton.style.display = "none";
    }


// function nobtn(){
//     //yesButton.innerText = "hi";

// }


// noButton.addEventListener("click", function (){
//     const temp = yesButton.innerText;
   
//     yesButton.innerText = noButton.innerText;
//     noButton.innerText = temp;
    

   
// });

//test not perfect code

// noButton.addEventListener("click", function (){
  
//     const tempY = noButton.innerText;
//     noButton.innerText = yesButton.innerText;
//     yesButton.innerText = tempY;


//     outputShow.innerText = "yes";
// });



