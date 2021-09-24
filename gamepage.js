player1name=localStorage.getItem("player1");
player2name=localStorage.getItem("player2");
player1score="0";
player2score="0";
document.getElementById("player1name").innerHTML=player1name;
document.getElementById("player2name").innerHTML=player2name;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="qustoin turn"+player1name;
document.getElementById("playeranswer").innerHTML="asnwer turn"+player2name;

function send(){
    word=document.getElementById("word").value;
    word=word.toLowerCase();
    a=word.charAt(1);
    mid=Math.floor(word.length/2);
    b=word.charAt(mid);
    l=word.length-1;
    c=word.charAt(l);
    ra=word.replace(a,"_");
    rb=ra.replace(b,"_");
    rc=rb.replace(c,'_');
    Qw="<h4 id='guss'>"+rc+"</h4>";
    inputbox="<input type='text' id='answer'>";
    button="<br><button class='btn btn-info' onclick='ck()'>check</button>";
    row=Qw+inputbox+button;
    document.getElementById("output").innerHTML=row;
}