var lyricArray = [];
var engArray = [];

function translateLyrics(overId) {
     var id = overId;
    document.getElementById("line" + id).innerHTML = engArray[id];
    console.log(id);
    
    
}

function changeBack() {
    var display = document.getElementById("line1");
    display.innerHTML= "Der tisch gedeckt, der wein schon kalt";
    //
}
function getLyrics()  {
    var lyrics =
        "Der Tisch gedeckt der Wein schon kalt &&\
            Aber du bist noch nicht da &&\
            Es ist ja nicht das erste Mal &\
            Du hast viel zu tun, na klar&\
            Doch ich will dass du weißt was es heißt&\
            Immer nur zu warten&\
            Und ich brauch' das Gefühl du bist da&\
            Wenn mein Herz erfriert oh yeah&\
            Ich will immer wieder dieses Fieber spüren&\
            Immer wieder mich an dich verlieren&\
            Will das Leben leben&\
            Wie ein Tanz auf dem Vulkan&\
            Ich will immer wieder neue Sterne sehen&\
            Immer wieder mit dir tanzen gehen&\
            Wenn die Nacht beginnt dann brauch' ich dich&\
            Nimm dir Zeit für mich&\
            Was hast du nur mit mir gemacht&\
            Dass ich dir soviel verzeih'&\
            Ich brauch den Fels im Sturm der Zeit&\
            Doch nicht nur so nebenbei&\
            Ich will lachen und weinen&\
            Mit dir nicht nur davon träumen&\
            Und ich brauch' eine Hand die mich hält&\
            Wenn ich einsam bin oh oh&\
            Ich will immer wieder dieses Fieber spüren&\
            Immer wieder mich an dich verlieren&\
            Will das Leben leben&\
            Wie ein Tanz auf dem Vulkan&\
            Ich will immer wieder neue Sterne sehen&\
            Immer wieder mit dir tanzen gehen&\
            Wenn die Nacht beginnt dann brauch' ich dich&\
            Nimm dir Zeit für mich&\
            Ich will immer wieder dieses Fieber spüren&\
            Immer wieder mich an dich verlieren&\
            Will das Leben leben&\
            Wie ein Tanz auf dem Vulkan&\
            Ich will immer wieder neue Sterne sehen&\
            Immer wieder mit dir tanzen gehen&\
            Wenn die Nacht beginnt dann brauch' ich dich&\
            Nimm dir Zeit für mich";
        
    lyricArray = lyrics.split("&");
    
      var engLyrics = 
        "The table laid, the wine already cold&\
        but you aren't here yet&\
        It is not the first time,&\
        you have too much to do, of course.&\
        However, I want you to know what it means&\
        always to have to wait,&\
        And I need the feeling&\
        you are here when my heart freezes &\
        I want to feel this fever forever and again,&\
        to lose myself in you forever and again,&\
        want to live life like a dance on a volcano.&\
        I want to see new stars forever and again,&\
        to go dancing with you forever and again.&\
        When the night begins, then I need you.&\
        Have time for me.&\
        What have you done to me&\
        that I forgive you so much?&\
        I need a rock in the storm of the times,&\
        but not so by the way.&\
        I want to laugh and to cry with you,&\
        not only dream of doing it,&\
        And I need a hand to hold me when I'm lonely&\
        I want to feel this fever forever and again,&\
        to lose myself in you forever and again,&\
        want to live life like a dance on a volcano.&\
        I want to see new stars forever and again,&\
        to go dancing with you forever and again.&\
        When the night begins, then I need you.&\
        Have time for me.";
    
    engArray = engLyrics.split("&");
}

function addNewLine() {
    getLyrics();
    var display = document.getElementById("display");
    
    for (let i = 0; i < lyricArray.length; i++) {
        var para = document.createElement("p");
        para.setAttribute("id", "line" + i);
        para.addEventListener("mouseOver", translateLyrics(this.id));
        var node = document.createTextNode(lyricArray[i]);
        para.appendChild(node);
        display.appendChild(para); 
        
    }
   
    
}


function setTextOfId(text, id){
    document.getElementById(id).innerHTML = text;
}
