import homePageSupport from "./homePageSupport";
import inputsValidation from "./inputsValidation";

var homeModule = function () {
    var pic = document.getElementById('team-photo');
    var role = document.getElementById('team-role');
    var fullName = document.getElementById('team-name');
    var height = document.getElementById('team-height');
    var weight = document.getElementById('team-weight');
    var yo = document.getElementById('team-age');
    var dateOfBirth = document.getElementById('team-birthday');
    var hobby = document.getElementById('team-hobby');
    var nextPhoto = document.getElementById('next-photo');
    var previousPhoto = document.getElementById('previous-photo');
    var informationEdit = document.getElementById('information-edit');
    var informationSave = document.getElementById('information-save');
    var contentGroupInput = document.querySelectorAll('.content__group-input');
    var users;
    var i = 0;
    var data;
    var currentId;
    var params = { pic, fullName, role, height, weight, yo, dateOfBirth, hobby }
    var infoParams = { fullName, height, weight, yo, dateOfBirth, hobby }

    nextPhoto.addEventListener('click', function () {
        if (i >= 7) {
            return;
        }
        if (i === data.length - 2) {
            nextPhoto.classList.add('visible');
        } else {
            previousPhoto.classList.remove('visible');
        }
        ++i;
        currentId = i;
        homePageSupport.render(params, data[i]);
    })
    previousPhoto.addEventListener('click', function () {
        if (i <= 0) {
            return;
        }
        if (i === 1) {
            previousPhoto.classList.add('visible');
        } else {
            nextPhoto.classList.remove('visible');
        }
        --i;
        currentId = i;
        homePageSupport.render(params, data[i]);
    })
    informationEdit.addEventListener('click', function () {
        nextPhoto.classList.add('visible');
        previousPhoto.classList.add('visible');

        homePageSupport.addUnderline(infoParams);
        homePageSupport.editInfo(infoParams);
        informationEdit.classList.add('hidden');
        informationSave.classList.remove('hidden');
        homePageSupport.cursorTextHandler(contentGroupInput);
    });
    informationSave.addEventListener('click', function () {
        if (i === 0) {
            nextPhoto.classList.remove('visible');
        } else if (i === data.length - 1) {
            previousPhoto.classList.remove('visible');
        } else {
            nextPhoto.classList.remove('visible');
            previousPhoto.classList.remove('visible');
        }
        if (!inputsValidation(infoParams, homePageSupport)) {
            nextPhoto.classList.add('visible');
            previousPhoto.classList.add('visible');
            return;
        }
        users = [
            ...data
        ];
        users[currentId].fullName = fullName.value;
        users[currentId].height = height.value;
        users[currentId].weight = weight.value;
        users[currentId].yo = yo.value;
        users[currentId].dateOfBirth = dateOfBirth.value;
        users[currentId].hobby = hobby.value;
        var jsonNew = JSON.stringify(users, null, 2);

        var postRequest = new XMLHttpRequest();
        postRequest.open('POST', 'http://localhost:3000/team', true);
        postRequest.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        postRequest.send(jsonNew);
        postRequest.addEventListener('load', function () {
            if (postRequest.status === 200) {
                homePageSupport.addUnderline(infoParams);
                homePageSupport.saveInfo(infoParams);
                informationEdit.classList.remove('hidden');
                informationSave.classList.add('hidden');

            } else {
                console.error('error');
            }
        })
        homePageSupport.cursorDefaultHandler(contentGroupInput);
    })

    function req() {
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:3000/team', true);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        document.body.classList.add('loaded__hiding');

        request.addEventListener('load', function () {
            if (request.status === 200) {
                document.body.classList.add('loaded');
                document.body.classList.remove('loaded__hiding');
                data = JSON.parse(request.response);
                if (data.length === 0) {
                    alert('Empty data');
                    return;
                }
                homePageSupport.render(params, data[0]);
                previousPhoto.classList.add('visible');
                currentId = 0
            } else {
                console.error('error');
            }
        })
    }
    req();
};

export default homeModule;

