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

    //3(i). Adding the delete button "X":
    let myBtn = $('<button></button>');
    myBtn.text('X');
    myBtn.addClass('btn');
    liItem.append(myBtn);
    
    myBtn.on('click', deleteItem);
    //3(ii). Removing the selected element and its child elements with remove() method:
    function deleteItem(){
        liItem.remove();
    }

    // 4. Reordering the items: 
    $('#list').sortable();
}

$('#button').on('click', () =>{
    newItem();
});