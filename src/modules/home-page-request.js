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
    let informationEdit = document.getElementById('information-edit');
    let informationSave = document.getElementById('information-save');
    let users;
    let i = 0;
    let data;
    let currentId;

    nextPhoto.addEventListener('click', function() {
        if (i === data.length - 2) {
            nextPhoto.classList.add('visible');
        } else {
            previousPhoto.classList.remove('visible');
        }
        ++i;
        currentId = i;
        render(data[i]);
    })
    previousPhoto.addEventListener('click', function() {
        if (i === 1) {
            previousPhoto.classList.add('visible');
        } else {
            nextPhoto.classList.remove('visible');
        }
        --i;
        currentId = i;       
        render(data[i]);
    })
    informationEdit.addEventListener('click', function() {
        addUnderline(data);
        editInfo(data);
        informationEdit.classList.add('hidden');
        informationSave.classList.remove('hidden');
    });
    informationSave.addEventListener('click', function() {
        users = [
            ...data
        ];
        users[currentId].fullName = fullName.value;
        users[currentId].height = height.value;
        users[currentId].weight = weight.value;
        users[currentId].yo = yo.value;
        users[currentId].dateOfBirth = dateOfBirth.value;
        users[currentId].hobby = hobby.value;
        let jsonNew = JSON.stringify(users, null, 2);

        console.log(currentId, users);
        const postRequest = new XMLHttpRequest();
        postRequest.open('POST', 'http://localhost:3000/team', true);
        postRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        postRequest.send(jsonNew);
        postRequest.addEventListener('load', function() {
            if (postRequest.status === 200) {
                addUnderline();
                saveInfo();
                informationEdit.classList.remove('hidden');
                informationSave.classList.add('hidden');  
        
            } else {
                console.error('error');
            }
        })
    })
console.log(users);
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
                currentId = data[0].id;
                previousPhoto.classList.add('visible');
            } else {
                console.error('error');
            }
        })
    }
    req();
    function render(item) {
            pic.src = item.photo;
            fullName.value = item.fullName;
            height.value = item.height;
            weight.value = item.weight;
            yo.value = item.yo;
            dateOfBirth.value = item.dateOfBirth;
            hobby.value = item.hobby;
    }
    function addUnderline() {
        fullName.classList.toggle('content__group-style');
        height.classList.toggle('content__group-style');
        weight.classList.toggle('content__group-style');
        yo.classList.toggle('content__group-style');
        dateOfBirth.classList.toggle('content__group-style');
        hobby.classList.toggle('content__group-style');
    }
    function editInfo() {
        fullName.removeAttribute('readonly');
        height.removeAttribute('readonly');
        weight.removeAttribute('readonly');
        yo.removeAttribute('readonly');
        dateOfBirth.removeAttribute('readonly');
        hobby.removeAttribute('readonly');
    }
    function saveInfo() {
        fullName.setAttribute('readonly', `readonly`);
        height.setAttribute('readonly', `readonly`);
        weight.setAttribute('readonly', `readonly`);
        yo.setAttribute('readonly', `readonly`);
        dateOfBirth.setAttribute('readonly', `readonly`);
        hobby.setAttribute('readonly', `readonly`);
    }

};

export default homeModule;