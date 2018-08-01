var beers = [];

function addBear(name, category, rate) {
    var newBear = {name: name, category: category, rate: rate};
    beers.push(newBear);
}

function renderBeers() {
    $('.beers-list').find('li').remove();//clearing beer list
    for (let element of beers) {
        $('.beers-list').append('<li>' + element.category + ' ' + 
        element.name + ' ' + element.rate + '</li>');
    }  
}

$('.post-beer').on('click', function () {
    var beerInput = $('.beer-input').val();
    var categoryInput = $('.category-input').val();
    var rate = $('#inputGroupSelect01').val();
    addBear(beerInput, categoryInput, rate);
    renderBeers();
});



$('.sort-beer').on('click', function(){
    function compare(a,b) {
        if (a.rate < b.rate)
          return -1;
        if (a.rate > b.rate)
          return 1;
        return 0;
      }
      
      beers.sort(compare);
      renderBeers();
});




