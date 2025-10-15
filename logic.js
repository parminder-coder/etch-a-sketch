const numberBtn=document.getElementById("blockNo");
let number=16;


numberBtn.onclick=function(){
    number=prompt("enter the number of blocks on one side");
    console.log('input taken');
    grid(number);
    console.log('grid made');
};

function grid(n){
    const container=document.querySelector(".container")

    container.innerHTML="";

    const width=container.offsetWidth-2;
    const height=container.offsetHeight-2;

    n=Number(n);


    console.log(`height is ${height/Number(n)} and width is ${width/Number(n)}`)


    for(let i=0; i<n; i++){

        for(let j=0; j<n; j++){
            const block=document.createElement("div");
            block.className="block";
            block.style.width = width / n -2+ "px";
            block.style.height = height / n -2+ "px";
            block.style.border="1px solid black";

            container.appendChild(block);

        }
        console.log("one row added")

    }
}


grid(number);