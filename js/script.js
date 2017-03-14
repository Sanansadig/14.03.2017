function mouseIn() {
    document.getElementById('photo').style.border = '1px solid black';
}


function mouseOut() {
    document.getElementById('photo').style.border = 'none';
}
// document.getElementById('main').addEventListener('dblclick', function(event) {
//     event.target.style.border = '1px solid black';
//     console.log(event.target);
// });

document.getElementById('fname').addEventListener('keydown', function(event) {
    if (event.which < 58 && event.which > 47) {
        return true;
    } else {
        event.preventDefault();
        return false;
    }

});
var count = 0;
document.querySelector('.link').addEventListener('click', function(event) {
    count++;
    console.log(count);
    if (count > 5) {
        return true;
    }
    event.preventDefault();
});


// document.getElementById('change').addEventListener('click', function(event) {
//     this.innerText = 'click olundu';
//     document.getElementById('photo').src = 'img/logo2.jpg';
// });

// document.getElementById('photo').addEventListener('mouseout', function(event) {
//     // console.log(event);
//     event.target.style.border = 'none';
// });

// document.getElementById('photo').addEventListener('mouseover', function(event) {
//     // console.log(event);
//     event.target.style.border = '1px solid black';
// });