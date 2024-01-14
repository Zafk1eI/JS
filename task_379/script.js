let List = document.getElementById('List');
let Button = document.getElementById('Button');

Button.addEventListener('click', function() {
    let listItems = List.getElementsByTagName('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.cssFloat = 'left';
    }
});