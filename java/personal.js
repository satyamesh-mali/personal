// side bar go
let sideBar = document.getElementById('bar');
let leftcontent = document.getElementsByClassName('left-content')[0];
let rightcontent = document.getElementsByClassName('right-content')[0];
sideBar.addEventListener('click',function(){
    console.log('despacito')
    leftcontent.classList.toggle('sidebargo')
    rightcontent.classList.toggle('right-content-size')
})

