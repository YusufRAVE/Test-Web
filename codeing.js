function UserURL(event) {
    event.preventDefault();

    let URL = document.getElementById('userURL').value;
    if (!URL.startsWith('https://') && !URL.startsWith('http://')) {
        URL = 'https://' + URL;
    }
    window.open(URL);
}

function CheckProfile() {
    var Div  = document.getElementById('Open-Profile');
    let video = document.getElementById('Video')
    if (Div.classList.contains('Open-Profile')){
        Div.classList.remove('Open-Profile');
        Div.classList.add('Hidden-Profile');
        NotPlayVideo(video);
    }
    else {
        Div.classList.remove('Hidden-Profile');
        Div.classList.add('Open-Profile');
        PlayVideo(video);
    }
}

function PlayVideo(video) {
    //video.muted = false;
    video.currentTime = 0;
    video.play();
}

function NotPlayVideo(video) {
    //video.muted = true;
    video.pause();
}

function ChecksListen(Div, ButtonId) {
    CheckProfile();
    CheckInfo(Div);
    listen(Div, ButtonId);
}

function CheckInfo(Div) {
    if (Div.classList.contains('Hidden-Info')) {
        Div.classList.remove('Hidden-Info');
        Div.classList.add('Open-Info');
    }
    else {
        Div.classList.remove('Open-Info');
        Div.classList.add('Hidden-Info');
    } 
}

function listen(Div, ButtonId) {
    document.getElementById(ButtonId).addEventListener('click', function() {
        X(Div) },{once:true});
}

function X(Div) {
    CheckInfo(Div);
    CheckProfile();
}

function OpenProfile() {
    CheckProfile();    
}

function Personal() {
    var Div = document.getElementById('Personal');
    var ButtonId = 'BPersonal';
    ChecksListen(Div, ButtonId);
}

function HiddenUpTape() {
    var Div = document.getElementById('Up-Tape');
    Div.classList.toggle('Disappear');
}

function WokingOn() {
    var Div = document.getElementById('Woking-On');
    Div.classList.toggle('Open-Tape');
}

function Skills() {
    var Div = document.getElementById('Skills');
    var ButtonId = 'BSkills';
    ChecksListen(Div, ButtonId);
}

function Projects() {
    var Div = document.getElementById('Projects');
    var ButtonId = 'BProjects';
    ChecksListen(Div, ButtonId);
}

function Codes() {
    var Div = document.getElementById('Personal');
    var ButtonId = 'BPersonal';
    ChecksListen(Div, ButtonId);
}


function Goals() {

}

function KnowageIGaind() {

}

function Shear() {

}


function GetTime() {
    const now = new Date();
    var hours = String(now.getHours());
    if (Number(hours) >= 13) {
       var hours =  Number(hours) - 12;
       var hours = String(hours);
    }
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('Clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function GetDate() {
    const name = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const now = new Date();
    const date = String(now.getDate());
    const day = String(now.getDay())
    const month = String((now.getMonth()+1));
    const year = now.getFullYear();
    let nameDay = name[day];
    document.getElementById('Date').textContent = `${nameDay}, ${month}-${date}`;
}

GetTime();
setInterval(GetTime,  1000);
GetDate();