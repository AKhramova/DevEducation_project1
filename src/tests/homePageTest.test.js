import homeModule from '../modules/homePage/home-page-request';
import inputsValidation, { validateName, validatePersonNumbers, validateHobby, validateBirthDate } from '../modules/homePage/inputsValidation';
import homePageSupport from '../modules/homePage/homePageSupport';

describe('homeModule', function () {
    it('should be defined', function () {
        expect(homeModule).toBeDefined();
    })
    it('should be function', function () {
        expect(typeof homeModule).toBe('function');
    })

    it('should validate name', function () {
        expect(typeof validateName).toBe('function');
        expect(validateName('')).toBe(false);
        expect(validateName('Superlong name that contains more than 24 symbols should be invalid')).toBe(false);
        expect(validateName('Valid Name')).toBe(true);
        expect(validateName('')).not.toBe(true);
        expect(validateName('Superlong name that contains more than 24 symbols should be invalid')).not.toBe(true);
        expect(validateName('Valid Name')).not.toBe(false);
    })

    it('should validate person numbers', function () {
        expect(typeof validatePersonNumbers).toBe('function');
        expect(validatePersonNumbers('')).toBe(false);
        expect(validatePersonNumbers('1234')).toBe(false);
        expect(validatePersonNumbers('-98')).toBe(false);
        expect(validatePersonNumbers('')).toBe(false);
        expect(validatePersonNumbers('172')).toBe(true);
        expect(validatePersonNumbers('1234')).not.toBe(true);
        expect(validatePersonNumbers('-98')).not.toBe(true);
        expect(validatePersonNumbers('')).not.toBe(true);
        expect(validatePersonNumbers('172')).not.toBe(false);
    })
    it('should validate person hobby', function () {
        expect(typeof validateHobby).toBe('function');
        expect(validateHobby('Superlong hobby that contains more than 38 symbols should be invalid')).toBe(false);
        expect(validateHobby('')).toBe(false);
        expect(validateHobby('singing and dancing')).toBe(true);
        expect(validateHobby('Superlong hobby that contains more than 38 symbols should be invalid')).not.toBe(true);
        expect(validateHobby('')).not.toBe(true);
        expect(validateHobby('singing and dancing')).not.toBe(false);
    })
    it('should validate person date of birth', function () {
        expect(typeof validateBirthDate).toBe('function');
        expect(validateBirthDate('')).toBe(false);
        expect(validateBirthDate('2020.12.12')).toBe(false);
        expect(validateBirthDate('2020.31.01')).toBe(false);
        expect(validateBirthDate('02.28.2020')).toBe(false);
        expect(validateBirthDate('02/28/2020')).toBe(false);
        expect(validateBirthDate('21/02/2020')).toBe(false);
        expect(validateBirthDate('32.01.2020')).toBe(false);
        expect(validateBirthDate('31.13.2020')).toBe(false);
        expect(validateBirthDate('31.1.2020')).toBe(false);
        expect(validateBirthDate('31.0.2020')).toBe(false);
        expect(validateBirthDate('1.01.2020')).toBe(false);
        expect(validateBirthDate('0.01.2020')).toBe(false);
        expect(validateBirthDate('01.01.1820')).toBe(false);
        expect(validateBirthDate('01.01.94')).toBe(false);
        expect(validateBirthDate('01.01.02')).toBe(false);
        expect(validateBirthDate('01.01.2120')).toBe(false);

        expect(validateBirthDate('01.01.2020')).toBe(true);
        expect(validateBirthDate('01.01.1920')).toBe(true);
        expect(validateBirthDate('01.01.1920')).toBe(true);
        expect(validateBirthDate('01.10.1920')).toBe(true);
        expect(validateBirthDate('01.11.1920')).toBe(true);
        expect(validateBirthDate('10.01.1920')).toBe(true);
        expect(validateBirthDate('20.01.1920')).toBe(true);
        expect(validateBirthDate('30.01.1920')).toBe(true);
        expect(validateBirthDate('01.10.1920')).toBe(true);
        expect(validateBirthDate('20.10.1920')).toBe(true);
        expect(validateBirthDate('30.10.1920')).toBe(true);

        expect(validateBirthDate('2020.12.12')).not.toBe(true);
        expect(validateBirthDate('2020.31.01')).not.toBe(true);
        expect(validateBirthDate('02.28.2020')).not.toBe(true);
        expect(validateBirthDate('02/28/2020')).not.toBe(true);
        expect(validateBirthDate('21/02/2020')).not.toBe(true);
        expect(validateBirthDate('32.01.2020')).not.toBe(true);
        expect(validateBirthDate('31.13.2020')).not.toBe(true);
        expect(validateBirthDate('31.1.2020')).not.toBe(true);
        expect(validateBirthDate('31.0.2020')).not.toBe(true);
        expect(validateBirthDate('1.01.2020')).not.toBe(true);
        expect(validateBirthDate('0.01.2020')).not.toBe(true);
        expect(validateBirthDate('01.01.1820')).not.toBe(true);
        expect(validateBirthDate('01.01.94')).not.toBe(true);
        expect(validateBirthDate('01.01.02')).not.toBe(true);
        expect(validateBirthDate('01.01.2120')).not.toBe(true);

        expect(validateBirthDate('01.01.2020')).not.toBe(false);
        expect(validateBirthDate('01.01.1920')).not.toBe(false);
        expect(validateBirthDate('01.01.1920')).not.toBe(false);
        expect(validateBirthDate('01.10.1920')).not.toBe(false);
        expect(validateBirthDate('01.11.1920')).not.toBe(false);
        expect(validateBirthDate('10.01.1920')).not.toBe(false);
        expect(validateBirthDate('20.01.1920')).not.toBe(false);
        expect(validateBirthDate('30.01.1920')).not.toBe(false);
        expect(validateBirthDate('01.10.1920')).not.toBe(false);
        expect(validateBirthDate('20.10.1920')).not.toBe(false);
        expect(validateBirthDate('30.10.1920')).not.toBe(false);
    })
    it('should be valid team data', function () {
        var nameInput = document.createElement('input');
        var heightInput = document.createElement('input');
        var weightInput = document.createElement('input');
        var yoInput = document.createElement('input');
        var birthdayInput = document.createElement('input');
        var hobbyInput = document.createElement('input');

        nameInput.value = '';
        heightInput.value = '';
        weightInput.value = '';
        yoInput.value = '';
        birthdayInput.value = '';
        hobbyInput.value = '';

        var mockData = {
            fullName: nameInput,
            height: heightInput,
            weight: weightInput,
            yo: yoInput,
            dateOfBirth: birthdayInput,
            hobby: hobbyInput
        };

        expect(inputsValidation).toBeDefined();
        expect(inputsValidation(mockData)).toBe(false);
        expect(mockData.fullName.classList.contains('error')).toBe(true);
        expect(mockData.height.classList.contains('error')).toBe(true);
        expect(mockData.weight.classList.contains('error')).toBe(true);
        expect(mockData.yo.classList.contains('error')).toBe(true);
        expect(mockData.dateOfBirth.classList.contains('error')).toBe(true);
        expect(mockData.hobby.classList.contains('error')).toBe(true);

        mockData.fullName.value = 'Marina';
        mockData.height.value = '172';
        mockData.weight.value = '55';
        mockData.yo.value = '17';
        mockData.dateOfBirth.value = '19.041994';
        mockData.hobby.value = 'ukulele';

        inputsValidation(mockData);
        expect(mockData.fullName.classList.contains('error')).toBe(false);
        expect(mockData.height.classList.contains('error')).toBe(false);
        expect(mockData.weight.classList.contains('error')).toBe(false);
        expect(mockData.yo.classList.contains('error')).toBe(false);
        expect(mockData.dateOfBirth.classList.contains('error')).toBe(true);
        expect(mockData.hobby.classList.contains('error')).toBe(false);

    })
    it('should be removing error state', function () {
        var errorState = document.createElement('div');
        errorState.classList.add('error');

        expect(homePageSupport.removeErrorState).toBeDefined();
        expect(errorState.classList.contains('error')).toBe(true);
        homePageSupport.removeErrorState(errorState);
        expect(errorState.classList.contains('error')).toBe(false);
        expect(errorState.classList.contains('error')).not.toBe(true);
    })
    it('should be setting error state', function () {
        var setError = document.createElement('input');
        var mockMessage = 'some message';

        expect(homePageSupport.setErrorState).toBeDefined();
        expect(setError.classList.contains('error')).toBe(false);
        homePageSupport.setErrorState(setError, mockMessage);
        expect(setError.placeholder).toEqual(mockMessage);
        expect(setError.classList.contains('error')).toBe(true);
        expect(setError.classList.contains('error')).not.toBe(false);
    })
    it('should be cursor', function () {
        var fn = homePageSupport.cursorTextHandler;
        var mockArr = [];
        var mockInput = document.createElement('input');
        mockArr.push(mockInput);
        expect(fn).toBeDefined();
        fn(mockArr);
        expect(mockInput.classList.contains('cursor-default')).toBe(false);
        expect(mockInput.classList.contains('cursor-text')).toBe(true);
    })
    it('should not be cursor', function () {
        var fn = homePageSupport.cursorDefaultHandler;
        var mockArr = [];
        var mockInput = document.createElement('input');
        mockArr.push(mockInput);
        expect(fn).toBeDefined();
        fn(mockArr);
        expect(mockInput.classList.contains('cursor-default')).toBe(true);
        expect(mockInput.classList.contains('cursor-text')).toBe(false);
    })
    it('should be underline', function () {
        var fn = homePageSupport.addUnderline;

        var fullName = document.createElement('input');
        var height = document.createElement('input');
        var weight = document.createElement('input');
        var yo = document.createElement('input');
        var dateOfBirth = document.createElement('input');
        var hobby = document.createElement('input');

        var mockData = {
            fullName,
            height,
            weight,
            yo,
            dateOfBirth,
            hobby
        };
        expect(fn).toBeDefined();
        fn(mockData);
        expect(mockData.fullName.classList.contains('content__group-style')).toBe(true);
        expect(mockData.height.classList.contains('content__group-style')).toBe(true);
        expect(mockData.weight.classList.contains('content__group-style')).toBe(true);
        expect(mockData.yo.classList.contains('content__group-style')).toBe(true);
        expect(mockData.dateOfBirth.classList.contains('content__group-style')).toBe(true);
        expect(mockData.hobby.classList.contains('content__group-style')).toBe(true);

        fn(mockData);

        expect(mockData.fullName.classList.contains('content__group-style')).toBe(false);
        expect(mockData.height.classList.contains('content__group-style')).toBe(false);
        expect(mockData.weight.classList.contains('content__group-style')).toBe(false);
        expect(mockData.yo.classList.contains('content__group-style')).toBe(false);
        expect(mockData.dateOfBirth.classList.contains('content__group-style')).toBe(false);
        expect(mockData.hobby.classList.contains('content__group-style')).toBe(false);
    })
    it('should remove attribute readonly', function () {
        var fn = homePageSupport.editInfo;

        var fullName = document.createElement('input');
        var height = document.createElement('input');
        var weight = document.createElement('input');
        var yo = document.createElement('input');
        var dateOfBirth = document.createElement('input');
        var hobby = document.createElement('input');

        fullName.readOnly = true;
        height.readOnly = true;
        weight.readOnly = true;
        yo.readOnly = true;
        dateOfBirth.readOnly = true;
        hobby.readOnly = true;

        var mockData = {
            fullName,
            height,
            weight,
            yo,
            dateOfBirth,
            hobby
        };
        expect(fn).toBeDefined();
        expect(mockData.fullName.readOnly).toBe(true);
        expect(mockData.height.readOnly).toBe(true);
        expect(mockData.weight.readOnly).toBe(true);
        expect(mockData.yo.readOnly).toBe(true);
        expect(mockData.dateOfBirth.readOnly).toBe(true);
        expect(mockData.hobby.readOnly).toBe(true);

        fn(mockData);

        expect(mockData.fullName.readOnly).toBe(false);
        expect(mockData.height.readOnly).toBe(false);
        expect(mockData.weight.readOnly).toBe(false);
        expect(mockData.yo.readOnly).toBe(false);
        expect(mockData.dateOfBirth.readOnly).toBe(false);
        expect(mockData.hobby.readOnly).toBe(false);
    })
    it('should add attribute readonly', function () {
        var fn = homePageSupport.saveInfo;

        var fullName = document.createElement('input');
        var height = document.createElement('input');
        var weight = document.createElement('input');
        var yo = document.createElement('input');
        var dateOfBirth = document.createElement('input');
        var hobby = document.createElement('input');

        fullName.readOnly = false;
        height.readOnly = false;
        weight.readOnly = false;
        yo.readOnly = false;
        dateOfBirth.readOnly = false;
        hobby.readOnly = false;

        var mockData = {
            fullName,
            height,
            weight,
            yo,
            dateOfBirth,
            hobby
        };
        expect(fn).toBeDefined();
        expect(mockData.fullName.readOnly).toBe(false);
        expect(mockData.height.readOnly).toBe(false);
        expect(mockData.weight.readOnly).toBe(false);
        expect(mockData.yo.readOnly).toBe(false);
        expect(mockData.dateOfBirth.readOnly).toBe(false);
        expect(mockData.hobby.readOnly).toBe(false);

        fn(mockData);

        expect(mockData.fullName.readOnly).toBe(true);
        expect(mockData.height.readOnly).toBe(true);
        expect(mockData.weight.readOnly).toBe(true);
        expect(mockData.yo.readOnly).toBe(true);
        expect(mockData.dateOfBirth.readOnly).toBe(true);
        expect(mockData.hobby.readOnly).toBe(true);
    })
    it('should do render', function () {
        var fn = homePageSupport.render;
        var item =
        {
            id: 1,
            fullName: "Малик Алексей",
            photo: "./img/team/AlexM.jpg",
            dateOfBirth: "27.06.1994",
            yo: '26',
            height: '183',
            weight: '70',
            post: "Front-end developer",
            hobby: "компютерные игры, книги, музыка"
        };

        var pic = document.createElement('image');
        var nameInput = document.createElement('input');
        var roleInput = document.createElement('span');
        var heightInput = document.createElement('input');
        var weightInput = document.createElement('input');
        var yoInput = document.createElement('input');
        var birthdayInput = document.createElement('input');
        var hobbyInput = document.createElement('input');
        var mockData = {
            pic: pic,
            fullName: nameInput,
            role: roleInput,
            height: heightInput,
            weight: weightInput,
            yo: yoInput,
            dateOfBirth: birthdayInput,
            hobby: hobbyInput
        };
        expect(fn).toBeDefined();
        fn(mockData, item);
        expect(mockData.pic.src).toBe(item.photo);
        expect(mockData.fullName.value).toBe(item.fullName);
        expect(mockData.role.textContent).toBe(item.post);
        expect(mockData.height.value).toBe(item.height);
        expect(mockData.weight.value).toBe(item.weight);
        expect(mockData.yo.value).toBe(item.yo);
        expect(mockData.dateOfBirth.value).toBe(item.dateOfBirth);
        expect(mockData.hobby.value).toBe(item.hobby);
    })
})