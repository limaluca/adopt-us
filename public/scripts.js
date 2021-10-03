const currentLocation = location.pathname

const navigationAnchors = document.querySelectorAll("#nav");

console.log(currentLocation)
if(currentLocation=='/dogs'){
    navigationAnchors[0].style.fontWeight = 'bold'
} else {
    navigationAnchors[1].style.fontWeight = 'bold'

}