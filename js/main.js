import Service from './service.js';

const service = new Service();

document.getElementById('search-button')
        .addEventListener('click', () => {
            const text = document.getElementById('search-word').value;
            const sel = document.getElementById('type');
            const type = sel.options[sel.selectedIndex].value;

            service.get(text, type)
                   .then(response => {

                       const table = document.getElementById('table')
                                             .getElementsByTagName('tbody')[0];
                       table.innerHTML = '';
                       response.data.forEach(row => {
                           const newRow = table.insertRow();
                           let name = '';
                           let description = '';
                           let urlImg = '';
                           const img = new Image();

                           switch(type) {
                               case 'person':
                                   name = row.Name;
                                   urlImg = 'img/person.png'
                               break;
                               case 'show':
                                   name = row.name;
                                   description = row.summary
                                   urlImg = 'img/tv.jpeg';
                               break;
                               case 'movie':
                                   name = row.trackName
                                   description = row.shortDescription;
                                   urlImg = 'img/music.jpeg'; 
                               case 'music':
                                   name = row.trackName
                                   description = row.collectionName;
                                   urlImg = 'img/music.jpeg';
                               break;
                           }

                           img.src = urlImg;
                           img.width = 40;

                           newRow.insertCell(0).appendChild(document.createTextNode(name));
                           newRow.insertCell(1).appendChild(document.createTextNode(description));
                           newRow.insertCell(2).appendChild(img);
                       })
                    });
        });