let text = document.getElementById("addtxt")
let title = document.getElementById("addtitle")
let addbtn = document.getElementById("addbtn")
// it gives here so all notes not be remove when we refresh page
shownotes();

addbtn.addEventListener("click", func1)


function func1(x) {

    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesobj = [];
    }
    else {
        // we parse value means string ko  array bna dia fir se because stringify  hmne array ko string me convert krke save kiya tha
        notesobj = JSON.parse(notes);
    }
    notesobj.push(text.value)



    localStorage.setItem("notes", JSON.stringify(notesobj))
    text.value = "";
    title.value = "";
    // we make a function for show notes on display and we call this funciton here
    shownotes();

}






function shownotes() {



    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesobj = [];
    }
    else {

        notesobj = JSON.parse(notes);
    }


    let html = "";
    notesobj.forEach(function (element, index) {

        html +=
            `<div class="card my-2 mx-2" style="width: 18rem;">
   <div class="card-body card-data" >
       <h5 class="card-title">note ${index}</h5>
       <p class="card-text">${element}</p>
       <button class="btn btn-primary" id="${index}" onclick="deleteNode(this.id)" > Delete </button>
   </div>
   </div>`
    });


    let noteselm = document.getElementById("notes")

if (notesobj.length != 0) {
    
    noteselm.innerHTML = html
}

else{
    noteselm.innerHTML = "please  write notes in notes box and add notes for show here all notes."
}

}



// it is function it call when we click on delete buton because we give it onclick.this.id
function deleteNode(index){
   


    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesobj = [];
    }
    else {

        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);

    localStorage.setItem("notes",JSON.stringify(notesobj))
    shownotes();

}



let searchtxt = document.getElementById("searchtxt")


searchtxt.addEventListener("input",func3)


function func3(){
    let input = searchtxt.value;
 
 let data = document.getElementsByClassName("card-data")
  
 let arrdata = Array.from(data);
 
 arrdata.forEach(element => {
     let cardata = element.getElementsByTagName("p")[0].innerText;
   

     if (cardata.includes(input)) {
        element.style.display = "block";
        
    }
    else{
         element.style.display = "none";

     }
 })


}

let search = document.getElementById('searchbtn')
search.addEventListener("click",function(e){
    searchtxt.value = "";

})