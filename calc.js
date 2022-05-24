function display(val){
    document.getElementById("textval").value+=val
    console.log(document.getElementById("textval").value)
}

function solve(){
  let x =  document.getElementById("textval").value
  let y = eval(x)
 document.getElementById("textval").value = y
 console.log(document.getElementById("textval").value)
}

function clr(){
  document.getElementById("textval").value = ""
  console.log(document.getElementById("textval").value)
}