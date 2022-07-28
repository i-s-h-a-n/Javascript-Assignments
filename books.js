import fetch from "node-fetch";

const baseUrl = "http://localhost:8080/books";

export function getbooks() {
    fetch("http://localhost:8080/books")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
}

export function createBook(){
    const newBook = {
        name:"Thapa Strength",
        authorName:"it",
        price:{
            currency:"USD",
            amount:"1000"
        }
    }
    fetch("http://localhost:8080/books",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBook)
    }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error);
        })
}

export function updateBook(id){
    const updatedBook = {
        name:"Thapa Story",
        authorName:"thapa",
        price:{
            currency:"rupees",
            amount:"70"
        }
    }
    fetch('http://localhost:8080/books/'+id, {
        method: 'PUT',
        body: JSON.stringify(updatedBook),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export function deleteBook(id){
    fetch('http://localhost:8080/books/'+id,{
        method : 'DELETE'
    }).then((data)=>{
            console.log("Delete successfully");
        })
        .catch((error)=>{
            console.log(error);
        })
}
//createBook();
//deleteBook(3);
//getbooks();
//updateBook(4);