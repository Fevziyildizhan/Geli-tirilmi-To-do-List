
var enterButton = document.getElementById('enter')
var input = document.getElementById('userInput')
var inputNum = document.getElementById('InputNum')
var select = document.getElementById('sportS')
var ul = document.querySelector('ul')
var item = document.getElementsByTagName('li')




function inputLength(){

return input.value.length
  
   
}

function InputNumLength(){

    return inputNum.value.length
}

/*function selectEdLength(){
    return select.value.length
}*/

function listLength(){
    return item.length
   
}



function createListElement(){
    var li = document.createElement('li') 
    

  // li.appendChild(document.createTextNode(input.value))

 // li.appendChild(document.createTextNode(`${input.value}  ${inputNum.value}  ${select.value}`))


var  checkboxes = document.querySelectorAll('input[name="color"]:checked');


 checkboxes.forEach((checkbox) => {
     li.appendChild(document.createTextNode(`${input.value} ${inputNum.value} ${select.value}   ${checkbox.value}`))
 });

    ul.appendChild(li)
   
  // input.value = ''
   // inputNum.value = ''

    function crossOut(){
        li.classList.toggle("done")
       
      
    }
    



    

    li.addEventListener('click',crossOut)

    var dBtn = document.createElement('button')

    dBtn.appendChild(document.createTextNode('X'))

    li.appendChild(dBtn)

    li.addEventListener('click',deleteListItem)
    function deleteListItem (){
        li.classList.add('delete') 
   
     
         
    }

}

function checked(){
  /*  var li = document.createElement('li') 
 var  checkboxes = document.querySelectorAll('input[name="color"]:checked');


 checkboxes.forEach((checkbox) => {
     li.appendChild(document.createTextNode(checkbox.value))
 });
ul.appendChild(li)


li.addEventListener('click',deleteListItem)
function deleteListItem (){
    li.classList.add('delete') 

 
     
}
*/
}



function seleced(){
  /* var li = document.createElement('li')

  
  li.appendChild(document.createTextNode(select.value))
   


ul.appendChild(li)


function crossOut(){
    li.classList.toggle("done")
   

}





li.addEventListener('click',crossOut)

var dBtn = document.createElement('button')

dBtn.appendChild(document.createTextNode('X'))

li.appendChild(dBtn)





li.addEventListener('click',deleteListItem)
function deleteListItem (){
    li.classList.add('delete') 

 
    
}
*/
}



function createNumElement(){
  /*  var li = document.createElement('li')  

    li.appendChild(document.createTextNode(inputNum.value))

  ul.appendChild(li)
    



    li.addEventListener('click',deleteListItem)
    function deleteListItem (){
        li.classList.add('delete') 
   
        

}*/
}




function addListAfterClick(){
  if(inputLength() > 0){
  createListElement()
  }
  createNumElement()
 
  if(InputNumLength() > 0){
    
  }
  
  if(seleced() > 0){
    createListElement()
  }
  if( checked() > 0){
  
  }
  
 
}

function addListAfterKeypress(event){
    if(inputLength() > 0 && event.which === 13){
        createListElement()
    }
    
    
   if( InputNumLength() > 0 && event.which === 13) {
    createListElement()
     }
   

}
enterButton.addEventListener('click',addListAfterClick)
input.addEventListener('keypress',addListAfterKeypress)
inputNum.addEventListener('keypress',addListAfterKeypress)
select.addEventListener('keypress',addListAfterKeypress)



