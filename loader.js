function loader(status){
    var loader = document.getElementById('loaderDiv')
    if(status){
        loader.style.display = 'block'
    }
    else{
        loader.style.display = 'none'
    }
}