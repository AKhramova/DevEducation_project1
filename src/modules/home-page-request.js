// const { template } = require("@babel/core");
const homeModule = () => {
    let pic = document.getElementById('team-photo');
    let fullName = document.getElementById('team-name');
    let height = document.getElementById('team-height');
    let weight = document.getElementById('team-weight');
    let yo = document.getElementById('team-age');
    let dateOfBirth = document.getElementById('team-birthday');
    let hobby = document.getElementById('team-hobby');
    let nextPhoto = document.getElementById('next-photo');
    let previousPhoto = document.getElementById('previous-photo');
    let i = 0;
    let data;

    nextPhoto.addEventListener('click', function() {
        if (i === data.length - 2) {
            nextPhoto.classList.add('hidden');
        } else {
            previousPhoto.classList.remove('hidden');
        }
        ++i;
        render(data[i]);
    })
    previousPhoto.addEventListener('click', function() {
        if (i === 1) {
            previousPhoto.classList.add('hidden');
        } else {
            nextPhoto.classList.remove('hidden');
        }
        --i;
        render(data[i]);
    })

    function req() {
        const request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/team', true);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();
        request.addEventListener('load', function() {
            if (request.status === 200) {
                data = JSON.parse(request.response);
                if (data.length === 0) {
                    alert('Empty data');
                    return;
                }
                render(data[0]);
                previousPhoto.classList.add('hidden');
            } else {
                console.error('error');
            }
        })
    }

    req();
    function render(item) {
            pic.src = item.photo;
            fullName.textContent = item.fullName;
            height.textContent = item.height;
            weight.textContent = item.weight;
            yo.textContent = item.yo;
            dateOfBirth.textContent = item.dateOfBirth;
            hobby.textContent = item.hobby;
    }
};

export default homeModule;