function createNode(element){
    return document.createElement(element);
}

function append(parent ,el){
    return parent.appendChild(el);
}

const staffContainer = document.getElementById("staff");
const url = 'https://randomuser.me/api/?results=12' ;

fetch(url)
    .then((resp) => resp.json())
    .then(function(data)
    {
        console.log(data);

        var staff = data.results;
        return staff.map(function(staff)
        {
            var img = createNode('img');
            var h5 = createNode('h5');
            var p = createNode('p');
            var column = createNode('div');
            var card = createNode('div');
            var cardBody = createNode('div');
            cardBody.classList.add("card-body");
            card.classList.add("card")
            card.classList.add("mt-3");
            column.classList.add("col-4");
            img.src = staff.picture.large;
            img.classList.add("card-img-top");
            h5.innerHTML = staff.name.first+ " " +staff.name.last;
            h5.classList.add("card-title");
            p.innerHTML = staff.email;
            p.classList.add("card-text");

            append(card, img);
            append(cardBody, h5);
            append(cardBody, h5);
            append(cardBody, p);
            append(card, cardBody);
            append(column, card);

            append(column, img);
            append(column, h5);
            append(column, p);
            append(staffContainer, column);
        })
    })
    .catch(function(error){
        console.log(error);
    });