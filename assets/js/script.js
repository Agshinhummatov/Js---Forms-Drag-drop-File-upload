
"use strict";

// let formElem = document.querySelector("form");
// console.log(formElem);

// formElem.addEventListener("submit",function(e){
//     e.preventDefault();
//     if (document.getElementById("exampleInputEmail1").value != "") {
//         document.querySelector("span").classList.add("d-none");
//         writeWord(document.getElementById("exampleInputEmail1").value);
//     }else{
//         document.querySelector("span").classList.remove("d-none")
//     }

// })


// function writeWord(word) {
//     document.querySelector("h1").innerText = word;
// }


// document.querySelector("a").addEventListener("click",function(e){
//     e.preventDefault();
//     console.log("clicked a");
// })


// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.getElementById("drop-elem");





// dragElem.ondrag = () => {
//     console.log("dragging");
// }

// dragElem.ondragend = () => {
//     console.log("drag end");
// }


// for ile hell yolu

// let dragElems = document.querySelectorAll(".item");
// let dropElem = document.getElementById("drop-elem");


// dragElems.forEach(element => {

//     element.ondragstart = (e) => {

//         e.dataTransfer.setData("_id",element.getAttribute("id"))
//     }
// });



// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }


// dropElem.ondrop = (e) =>{

//     let id = e.dataTransfer.getData("_id");
//     let elem = document.getElementById(id);
//     dropElem.append(elem);
// }


// 2ci hell yolu


// dropElem.ondragover = (e) => {
//     e.preventDefault();
// }

// dragElems.forEach(element => {
//     element.addEventListener("dragstart",function () {
//         dropElem.ondrop = () =>{
//             dropElem.append(element)
//         }
//     })

// })





//  homework file upload 



let uploadIcon = document.querySelector(".upload-area i")

let table = document.querySelector(".table")



uploadIcon.addEventListener("click", function () {
    this.nextElementSibling.click();                    
})




uploadIcon.nextElementSibling.addEventListener("change", function (e) {   
    for (const file of e.target.files) {
        let reader = new FileReader();    

        reader.onloadend = (event) => {     

            let fileBase64 = event.currentTarget.result;  

            table.innerHTML += `<tr>
              <th scope="row">${file.name}</th>
              <td>${file.size / 1024} Kb</td>
              <td>
              <div class="img">
              <img src="${fileBase64}"alt="">
              </div>
              </td>
              </tr>`

            table.classList.remove("d-none")

        }

        reader.readAsDataURL(file)   




    }

})







let file;

let dropArea = document.querySelector(".drag-upload-area");



dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); 
  dropArea.classList.add("active");
 
});


dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
});


dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); 
 
  file = event.dataTransfer.files[0];
  let fileType = file.type; 
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
  if(validExtensions.includes(fileType)){ 
   
    let reader = new FileReader();    

    reader.onloadend = (event) => {     

        let fileBase64 = event.currentTarget.result;  

        table.innerHTML += `<tr>
          <th scope="row">${file.name}</th>
          <td>${file.size / 1024} Kb</td>
          <td>
          <div class="img">
          <img src="${fileBase64}"alt="">
          </div>
          </td>
          </tr>`

        table.classList.remove("d-none")

    }

    reader.readAsDataURL(file)   

  }

  
});

 
  