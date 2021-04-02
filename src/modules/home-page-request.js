// const { template } = require("@babel/core");
const homeModule = () => {
    function req() {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/team', true);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('load', function () {
            if (request.status === 200) {
                let data = JSON.parse(request.response);
                console.log(data);

                data.forEach(item => {
                    let teamMate = document.createElement('div');
                    teamMate.classList.add('information');
                    // let name, height, weight, yo, dateOfBirth, hoddy;

                    teamMate.innerHTML = `
                    <h6 class="information__name">${item.fullName}</h6>
                    <p class="information__height">Рост: ${item.height}</p>
                    <p class="information__weight">Вес: ${item.weight}</p>
                    <p class="information__age">Возраст: ${item.yo}</p>
                    <p class="information__birthday">Дата Рождения: ${item.dateOfBirth}</p>
                    <p class="information__hobby">Хобби: ${item.hobby}</p>
                    `;
                    document.getElementById('team-mate-info').appendChild(teamMate);
                })
            } else {
                console.error('error');
            }
        })
    }
    req();
};

export default homeModule;