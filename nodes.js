
let addbtn = document.getElementById("addbtn")
// it gives here so all notes not be remove when we refresh page
shownotes();

addbtn.addEventListener("click", func1)


function func1(x) {

    let text = document.getElementById("addtxt")
    let title = document.getElementById("addtitle")



    let getnotes = localStorage.getItem("notes")

    if (getnotes == null) {
        setobj = [];
    }
    else {
        setobj = JSON.parse(getnotes)
    }


    // we add  title and value in one variable 
    let title_text = { "title": title.value, "value": text.value };
    // we push this value in this setobj
    setobj.push(title_text)

    localStorage.setItem("notes", JSON.stringify(setobj))



    text.value = "";
    title.value = "";

    //  we call this funciton here because we show the value after refresh the page 
    shownotes();


}






function shownotes() {
    let getnotes = localStorage.getItem("notes")

    if (getnotes == null) {
        setobj = []
    }
    else {
        setobj = JSON.parse(getnotes)
    }



    let html = "";
    setobj.forEach(function (element, index) {




        html +=
            `<div class="card my-2 mx-2" style="width: 18rem;">
    <div class="card-body card-data" >
    <h5 class="card-title"> ${index + 1}. ${element.title}</h5>
    <p class="card-text">${element.value}</p>
    <button class="btn btn-primary" id="${index}" onclick="deleteNode(this.id)" > Delete </button>
    </div>
    </div>`

    });



    let shownotes = document.getElementById("notes")


    if (setobj.length != 0) {

        shownotes.innerHTML = html
    }

    else {
        shownotes.innerHTML = "please  write notes in notes box and add notes for show here all notes."
    }



}



// it is function it call when we click on delete buton because we give it onclick.this.id

function deleteNode(index) {

    let getnotes = localStorage.getItem("notes")

    if (getnotes == null) {
        setobj = []
    }
    else {
        setobj = JSON.parse(getnotes)
    }


    setobj.splice(index, 1);


    localStorage.setItem("notes", JSON.stringify(setobj))
    shownotes();

}



let searchtxt = document.getElementById("searchtxt")


searchtxt.addEventListener("input", func3)


function func3() {
    let input = searchtxt.value;

    let data = document.getElementsByClassName("card-data")

    let arrdata = Array.from(data);

    arrdata.forEach(element => {
        let cardata = element.getElementsByTagName("p")[0].innerText;


        if (cardata.includes(input)) {
            element.style.display = "block";

        }
        else {
            element.style.display = "none";

        }
    })


}

let search = document.getElementById('searchbtn')
search.addEventListener("click", function (e) {
    searchtxt.value = "";

})


