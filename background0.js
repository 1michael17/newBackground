const body = document.querySelector('#body');
const header = document.querySelector('header');
const colorInput1 = document.querySelector('#color1');
const colorInput2 = document.querySelector('#color2');

/*Background Title */
const number = document.querySelector('#number');
const typeTitle = document.querySelectorAll('.coT');
const spanOutcome = document.querySelectorAll('.outcome');

/* For Radio Tags*/
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('#opt2');

//) ********** GLOBAL SETTINGS ****************

typeTitle.forEach(e=>e.style.display = 'none');
spanOutcome.forEach(e=>e.style.display = 'none');

const spanShow = ()=>{
   typeTitle.forEach(e=>e.style.display = 'flex');
   spanOutcome.forEach(e=>e.style.display= 'flex');
}

// ** For Title

const setColor1 = (a,b)=> { return `${b.value}, ${a.value}`; }

const namer = ()=> {
   spanOutcome.forEach(()=>{
      spanOutcome[0].textContent = body.style.background;
      spanOutcome[1].textContent = header.style.background;
     spanShow();
   });
}
const dNamer = ()=> {
   spanOutcome.forEach(()=>{
      spanOutcome[0].textContent = `${ll}: ${number.value}deg ${setColor1(colorInput2, colorInput1)}`;
      spanOutcome[1].textContent = `${ll}: ${number.value}deg ${setColor1(colorInput1, colorInput2)}`;
   });
   spanShow();   
}
const dNamerR = ()=> {
   spanOutcome.forEach(()=>{
      spanOutcome[0].textContent = `${ll}: ${setColor1(colorInput2, colorInput1)}`;
      spanOutcome[1].textContent = `${ll}: ${setColor1(colorInput1, colorInput2)}`;
   });
   spanShow();   
}

// ** For Box Shadow
const headBoxShadow = ()=>{
   header.style.boxShadow = 
    `${1}px ${1}px ${1}px ${2}px ${colorInput2.value},
    ${1}px ${1}px ${1}px ${4}px  ${colorInput1.value}`;
}
// ** Gradient Variables
let gradOption;
let gradOptionL = `linear-gradient(${number.value}deg,`;
let gradOptionR = `radial-gradient(`;


// ** OPTION 1 === Linear Gradient
const setGradL = ()=>{ 
   // ** Number Settings   
   if(number.value == '')number.value = 0;
   gradOptionL = `linear-gradient(${number.value}deg,`;
   gradOption = gradOptionL;
   // ** Number Settings
   body.style.background = `${gradOption}${setColor1(colorInput2, colorInput1)}`;
   number.style.display = 'flex';
   ll = 'Linear - Gradient';
   dNamer();
   // dNamer();

}

// ** OPTION 2 == Radial Gradient
const setGradRa = ()=>{
   gradOption = gradOptionR;
   body.style.background = `${gradOption}${setColor1(colorInput2, colorInput1)}`;
   ll = 'Radial - Gradient';
   dNamerR();
   // namer();
   number.style.display = 'none';

}
const setGrad = ()=>{
   dNamer();
   // namer();
   headBoxShadow();
   if(gradOption == gradOptionR){setGradRa();}
   else if(gradOption != gradOptionR){setGradL();}

   // console.log(header.style.background);
   
}
//* Default Function
   
headBoxShadow();
const setDef=()=>{
   setGradL();
   dNamer();
   // namer();
   typeTitle.forEach(e=>e.style.display = 'none');
   spanOutcome.forEach(e=>e.style.display = 'none');

}
setDef();


//) ********** END OF GLOBAL SETTINGS ****************


//) EVENT LISTENERS

colorInput1.addEventListener('input', setGrad);
colorInput2.addEventListener('input', setGrad);
number.addEventListener('input', setGradL);
option1.addEventListener('click', setGradL);
option2.addEventListener('click', setGradRa);

//*) END of EVENT LISTENERS


/* grNamer1 & grNamer2
const grNamer1 = ()=>{
   spanOutcome.forEach(()=>{
      if(gradOption == gradOptionR){
         // gradOption = 'Radial - Gradient';
         spanOutcome[0].textContent = `'Radial - Gradient': ${colorInput2.value}, ${colorInput1.value}`;

         spanOutcome[1].textContent = `'Radial - Gradient': ${colorInput1.value}, ${colorInput2.value}`;    
      }
      else if(gradOption != gradOptionR){
         // gradOption == 'Linear - Gradient';
         spanOutcome[0].textContent = `'Linear - Gradient': ${colorInput2.value}, ${colorInput1.value}`;

         spanOutcome[1].textContent = `'Linear - Gradient': ${colorInput1.value}, ${colorInput2.value}`; 
      }
       

      typeTitle.forEach(e=>e.style.display = 'flex');
      spanOutcome.forEach(e=>e.style.display= 'flex');
   });
}
const grNamer2 = ()=>{
   spanOutcome.forEach(()=>{
      if(gradOption == gradOptionR){
         gradOption = 'Radial - Gradient';
      }
      else if(gradOption != gradOptionR){
         gradOption = 'Linear - Gradient';
      }
      spanOutcome[0].textContent = `${gradOption}: ${colorInput2.value}, ${colorInput1.value}`;

      spanOutcome[1].textContent = `${gradOption}: ${colorInput1.value}, ${colorInput2.value}`; 

      typeTitle.forEach(e=>e.style.display = 'flex');
      spanOutcome.forEach(e=>e.style.display= 'flex');
   });
}
// const radNamer = ()=> {
//    spanOutcome.forEach(()=>{
//       spanOutcome[0].textContent = `Radial - Gradient: ${setColor1(colorInput2, colorInput1)}`;
//       spanOutcome[1].textContent = `Radial - Gradient: ${setColor1(colorInput1, colorInput2)}`;
//    });spanShow();}
**/
/* 
) unCompleted Task
 * 1) Seeing as both 'for' and 'forEach' both performed the same task, Find out the difference, Why and which is better
 **
 //) Completed Task
 * 2) Add numbers in the commented html select tag for choosing linear gradient '${...}deg' value.
 * OR
 * 2a)   Add input box - that accepts Number and returns it as the value of linear gradient '${...}deg'.
 * 3) Find if there is any other way to decrease the file size.
 ** 
 * IT WAS A GOOD RIDE: SEE YOU ON THE BETTER '''PAGE'''....
 */

 /*
 ??? To FINDOUT:
  * Why in line gradOption = gradOptionL failed to work  in    setGradL(); setas it did in    setGradR();?
 
  * Why grNamer1 is not working?
  */

 //) Solved

