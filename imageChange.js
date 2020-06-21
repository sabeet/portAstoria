function changeImage(){
    if(document.getElementById('a')){
        document.getElementById('special-circle').style.background = 'url(websiteAnimationMain.png)';
    }
}

function changeImage2(){
    if(document.getElementById('b')){
        document.getElementById('special-circle').style.background = 'url(websiteCodeMain.png)';
    }
}

function changeImage3(){
    if(document.getElementById('c')){
        document.getElementById('special-circle').style.background = 'url(websiteArtMain.png)';
    }
}

//credits to Victor Singh for correcting my mistake here! Thank you!
//credits to Wadgma Masab for pointing out why the function didn't work! Thank you!

function returnToOriginal(){
    if(document.getElementById('a') || document.getElementById('b') || document.getElementById('c')){
        document.getElementById('special-circle').style.background = 'url(SACMain.png)';
    }
}

