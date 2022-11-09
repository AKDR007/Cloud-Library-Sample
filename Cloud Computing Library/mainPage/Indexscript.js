var Data;
var menuB = document.querySelector("#menuB");
var menu = document.querySelector("#menu");
var exit = document.querySelector("#exit");

function toggleMenu(){
    if(menu.style.width == "45vw"){
        menu.style.width = "0px";
    }else{
        menu.style.width = "45vw";
    }
}
menuB.addEventListener("click",toggleMenu);
var searchIn = document.body.querySelector("#searchBar");
function search(key){
    console.log(key);
}
searchIn.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        search(e.target.value);
    }
})
document.body.querySelector("#search").querySelector("button").addEventListener("click",()=>{
    search(searchIn.value)
})

exit.addEventListener("click",()=>{
    //sendData("",Data);
    console.log(Data);
    window.close();
})
var url = "./genre.json"; //enter url to get data from server
function getData(url,loc){
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        Data = data;
        createSub(data);
    })
}

getData(url,Data);


function sendData(data,url){
    const option = {
        method : "POST",
        headers : {
            "content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }
    console.log(`sending data : ${data}`);
    fetch(url,option)
    .then((response)=>{

    })
}

function createSub(data){
    var main = document.querySelector("#main");
    main.innerHTML = "";
    data.list.forEach((e,i,j) => {
        console.log(e,i);
        var sub = document.createElement("button");
        sub.innerText = e.topic;
        sub.onclick = ()=>{
            console.log(e);
            createSub(e);
        };
        main.appendChild(sub);
    })
}

