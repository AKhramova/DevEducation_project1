function modal() {
    var questions = document.querySelector('.input-question__field-text');
    var buttonCreate = document.querySelector('.buttons__group-create');
    var fileSystem = document.querySelectorAll('.checkBox__choose-input');
    
    var isChangedFs = true;

    questions.addEventListener('input', function () {
        if (this.value !== '' && isChangedFs) {
            buttonCreate.disabled = false;
        }
        else if (this.value === '' || !isChangedFs) {
            buttonCreate.disabled = true;
        }
    })

    for (let i = 0; i < fileSystem.length; i++) {
        fileSystem[i].addEventListener('input', function () {
        for (let k = 0; k < fileSystem.length; k++) {
            if (fileSystem[k].checked) {
            isChangedFs = true;
            break
            }
            isChangedFs = false;
        }
        if (isChangedFs && questions.value !== '') {
            buttonCreate.disabled = false
        }
        else if (!isChangedFs || questions.value !== '') {
            buttonCreate.disabled = true
        }
        })
    }
}


export default modal; 

// var isChecked = false;
//         for(var i = 0; i < fileSystem.length; i++) {
//             if(fileSystem[i].checked){
//                 isChecked = true;
//             }
//     }