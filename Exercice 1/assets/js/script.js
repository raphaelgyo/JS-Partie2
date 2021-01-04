//Affecte la nouvelle image lorsque la souris survole l'élément
function overPicture(element) {
    element.setAttribute('src', 'images/image1_2.jpg');
}
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function outPicture(element) {
    element.setAttribute('src', 'images/image1.jpg');
}