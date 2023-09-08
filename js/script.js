function newItem(){
    //1. Adding a new item to the list of items: 
    let inputValue = $('input').val();
    let liItem = $('<li></li>');
    liItem.text(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(liItem);
    }

    //2. Crossing out an item from the list of items:
    function strikeOut() {
        $(liItem).toggleClass('strike');
    }

    liItem.on('dblclick', strikeOut);

}

$('#button').on('click', () =>{
    newItem();
});