function changeImage(){
    if(document.getElementById('a')){
        document.getElementById('special-circle').style.background = 'url(goat.jpg)';
        
    }

    else if(document.getElementById('b')){
        document.getElementById('special-circle').style.background = 'url(goat.jpg)';
    }

    else if(document.getElementById('c')){
        document.getElementById('special-circle').style.background = 'url(goat.jpg)';
    }
}

//credit to Victor Singh for correcting my mistake here! Thank you!

function returnToOriginal(){
    if(document.getElementById('a')){
        document.getElementById('special-circle').style.background = 'url(blackSquir.png)';
    }
}