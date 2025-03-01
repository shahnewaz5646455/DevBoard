function getId(id) {
    return document.getElementById(id);
}
function getIdText(id) {
    
    return parseInt(document.getElementById(id).innerText);
}


const backToDesk=getId('backToDesk');
backToDesk.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href='index.html';
});