//Affecte la nouvelle image lorsque la souris survole l'élément
function overPicture(element) {
    element.setAttribute('src', 'images/' + element.id + '_2.jpg');
    // console.log(element);
}
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function outPicture(element) {
    element.setAttribute('src', 'images/' + element.id + '.jpg');
}