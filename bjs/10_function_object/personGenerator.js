const personGenerator = {

    //JSON surname list
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    //JSON firstname male list
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    //JSON firstname female list
    firstNameFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрa",
            "id_2": "Татьяна",
            "id_3": "Наталья",
            "id_4": "Анастасия",
            "id_5": "Екатерина",
            "id_6": "Елизавета",
            "id_7": "Надежда",
            "id_8": "Ксения",
            "id_9": "Дарья",
            "id_10": "Валентина"
        }
    }`,

    //JSON father's name list
    fatherNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Алексеевич",
            "id_3": "Иванович",
            "id_4": "Васильевич",
            "id_5": "Дмитриевич",
            "id_6": "Андреевич",
            "id_7": "Михайлович",
            "id_8": "Данилович",
            "id_9": "Борисович",
            "id_10": "Валерьевич"
        }
    }`,

    //JSON profession male list
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Мастер",
            "id_2": "Сварщик",
            "id_3": "Крановщик",
            "id_4": "Водитель",
            "id_5": "Матрос",
            "id_6": "Механик",
            "id_7": "Шеф-повар",
            "id_8": "Телохранитель",
            "id_9": "Грузчик",
            "id_10": "Пожарный"
        }
    }`,

    //JSON profession female list
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Визажист",
            "id_2": "Учитель",
            "id_3": "Медсестра",
            "id_4": "Секретарь",
            "id_5": "Актриса",
            "id_6": "Балерина",
            "id_7": "Кассир",
            "id_8": "Бухгалтер",
            "id_9": "Судья",
            "id_10": "Диспетчер"
        }
    }`,

    //JSON months list
    monthsJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    //random gender function
    randomGender: function() {
        let randomInt = Math.round(Math.random());
        let gender = randomInt == 1 ? 'Мужчина' : 'Женщина';
        return this.gender = gender;
    },


    //random number function
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    //random value of selected JSON list
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    //random first name function
    randomFirstName: function(gender) {
         if (gender === 'Мужчина') {
             return this.randomValue(this.firstNameMaleJson);
         } else {
             return this.randomValue(this.firstNameFemaleJson);
         }
    },

    //random surname function
     randomSurname: function(gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    //random father's name function
    randomFatherName: function(gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.fatherNameJson);
        } else {
            return this.randomValue(this.fatherNameJson).slice(0,-2) + 'на';
        }
    },

    //random profession function
    randomProfession: function(gender) {
        if (gender === 'Мужчина') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    //random daote of birth function
    randomBirth: function() {
        let randomMonth = this.randomValue(this.monthsJson);
        let randomDay = 0;
        if (randomMonth == 'февраля') {
            randomDay = this.randomIntNumber(28, 1); //exception for february
        } else if (randomMonth == 'апреля' || randomMonth == 'июня' || randomMonth == 'сентября' || randomMonth == 'ноября') { //exception for 30 day's months
            randomDay = this.randomIntNumber(30, 1);
        } else {
            randomDay = this.randomIntNumber(31, 1);
        }

        let randomYear = this.randomIntNumber(2003, 1960); //selected range for people from 18yo.
        let dateOfBirth = randomDay + ' '+ randomMonth + ' ' + randomYear;
        return dateOfBirth
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.gender);
        this.person.surname = this.randomSurname(this.gender);
        this.person.fatherName = this.randomFatherName(this.gender);
        this.person.profession =  this.randomProfession(this.gender);
        this.person.birth = this.randomBirth();
        return this.person;
    }
};
