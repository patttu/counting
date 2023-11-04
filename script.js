countL=0

function add(){
    countL+=1
    document.getElementById("count").innerHTML=(countL)
}

function sub(){
    countL-=1
    document.getElementById("count").innerHTML=(countL)
}

sv = " "
function save(){
    sv= sv+ countL +"-"
    document.getElementById("sv").innerHTML=sv
    countL=0
    document.getElementById("count").innerHTML=(countL)


}

function reset(){
countL=0
sv=" "
document.getElementById("count").innerHTML=(countL)
document.getElementById("sv").innerHTML=sv

}
