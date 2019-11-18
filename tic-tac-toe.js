window.onload = ()=>{
    let a = document.querySelectorAll("div#board div");
    let button = document.querySelector(".btn");
    let status = document.getElementById("status");
    let statusInitialText = status.innerHTML;
    let isX = true;
    let game = Array(9).fill(0);
    a.forEach((i,n)=>{
        i.classList.add("square");
        
        i.addEventListener("click",()=>{
           if ( game[n] === 0 ){
                if (isX === true){
                    i.classList.add("X")
                    i.innerHTML = "X"
                    isX = false;
                    game[n] = "X";
                }else{
                    i.classList.add("O")
                    i.innerHTML = "O"
                    isX = true;

                    game[n] = "O";
                }

        }
        
            

        //    console.log(game);

            let top = [game[0],game[1],game[2]];
            let mid = [game[3],game[4],game[5]];
            let low = [game[6],game[7],game[8]];

            let topVert = [game[0],game[3],game[6]]
            let midVert = [game[1],game[4],game[7]]
            let lowVert = [game[2],game[5],game[8]]

            let diag1 = [game[0],game[4],game[8]]
            let diag2 = [game[2],game[4],game[6]]
            // if ([])
            let result = ""
            let isOHor = top.every((x)=>x === "O") || mid.every((x)=>x === "O") || low.every((x)=> x === "O")
            // console.log(top.every((x)=> x === "O"))
            let isXHor = top.every((x)=>x === "X") || mid.every((x)=>x === "X") || low.every((x)=>x === "X")

            let isOVert = topVert.every((x)=> x === "O") || midVert.every((x)=> x === "O") || lowVert.every((x)=>x === "O")
            let isXVert = topVert.every((x)=>x === "X") || midVert.every((x)=>x === "X") || lowVert.every((x)=>x === "X")

            let isODiag = diag1.every((x)=> x === "O") || diag2.every((x)=> x === "O") 
            let isXDiag = diag1.every((x)=> x === "X") || diag2.every((x)=> x === "X") 

            
            if (isOHor){
                result = "Congratulations! O is the Winner!"
            }
            else if (isXHor){
                result = "Congratulations! X is the Winner!"
            }
            else if (isOVert){
                result = "Congratulations! O is the Winner!"
            }
            else if (isXVert){
                result = "Congratulations! X is the Winner!"
            }
            else if (isODiag){
                result = "Congratulations! O is the Winner!"
            }
            else if (isXDiag){
                result = "Congratulations! X is the Winner!"
            }

            if (result != ""){
                status.innerHTML = result;
               
            }

            
        })

        i.addEventListener("mouseover",()=>{
            i.classList.add("hover")
        })

        i.addEventListener("mouseleave",()=>{
            i.classList.remove("hover")
        })
        
        
        

    
    })

    button.addEventListener("click",()=>{
        a.forEach((e)=>{
            e.innerHTML = ""
            game = Array(9).fill(0);
            status.innerHTML = statusInitialText;
        })
    })

}