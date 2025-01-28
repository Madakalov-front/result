const funcToClass = () => {
    class Student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.technologies = [];
            this.status = 'Junior';
        }

        setTechnologies(technologies) {
            this.technologies.push(...technologies)
        }
        setNewStatus(newStatus) {
            this.status = newStatus;
        }
    }

    const student = new Student('Maxim', 20);
    student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
    student.setNewStatus('Middle');
    console.log(student);
}

const compareClass = () => {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        compareAge(person) {
            const compare = this.age > person.age;
            if (compare) {
                alert(`${this.name} старше, чем ${person.name}`)
            } else {
                alert(`${this.name} младше, чем ${person.name}`)
            }
        }
    }

    const person1 = new Person('Максим', 24);
    const person2 = new Person('Светлана', 36);
    const person3 = new Person('Ирина', 23);

    person1.compareAge(person2); // Максим младше, чем Светлана 
    person2.compareAge(person3); // Светлана старше, чем Ирина 
    person3.compareAge(person1); // Ирина младше, чем Максим
}

const dictionary = () => {
    class Dictionary {
        constructor(name) {
            this.name = name;
            this.words = {}
        }
        add(word, description) {
            if(word in this.words) return;
            this.words[word] = {
                word,
                description,
            }
        }
        remove(keyRemove) {
            delete this.words[keyRemove];
        }
        get(getKey) {
            return this.words[getKey];
        }
        showAllWords() {
            for (const word of Object.entries(this.words)) {
                console.log(`${word[1].word} - ${word[1].description}`)
            }
        }
    }

    const dictionary = new Dictionary('Толковый словарь');
    dictionary.add('JavaScript', 'популярный язык программирования');
    dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');

    dictionary.remove('JavaScript');
    dictionary.showAllWords();

    class HardWordsDictionary extends Dictionary {
        constructor(name) {
            super(name);
        }
        add(word, description, isDifficult) {
            if (word in this.words) return
            this.words[word] = {
                word,
                description,
                isDifficult,
            }
        }
    }

    const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

    hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

    hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

    hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

    hardWordsDictionary.remove('неологизм');

    hardWordsDictionary.showAllWords();
}


const createDeveloper = () => {
    class Developer {
        constructor(fullName, age, position = 'Junior') {
            this.fullName = fullName;
            this.age = age;
            this.position = position;
            this.technologies = []
        }
        code() { }
        learnNewTechnologies(technology) {
            this.technologies.push(technology)
        }
    }
    
    class JuniorDeveloper extends Developer {
        constructor(fullName, age) {
            super(fullName, age);
            this.technologies = ['HTML', 'CSS', 'JavaScript'];
        }
        code() {
            console.log(`Junior разработчик пишет код...`)
        }
    }
    
    class MiddleDeveloper extends Developer {
        constructor(fullName, age) {
            super(fullName, age, 'Middle');
            this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
        }
        code() {
            console.log(`Middle-разработчик пишет код...`)
        }
    }
    class SeniorDeveloper extends Developer {
        constructor(fullName, age) {
            super(fullName, age, 'Senior');
            this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
        }
        code() {
            console.log(`Senior-разработчик пишет код...`)
        }
    }
    
    const juniorDeveloper = new JuniorDeveloper('Анастасия', 20);
    const middleDeveloper = new MiddleDeveloper('Игорь', 25);
    const seniorDeveloper = new SeniorDeveloper('Максим', 30);
    
    juniorDeveloper.code(); // Junior разработчик пишет код...
    middleDeveloper.code(); // Middle разработчик пишет код...
    seniorDeveloper.code(); // Senior разработчик пишет код...
    
    seniorDeveloper.learnNewTechnologies('Docker');
    
    console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position, juniorDeveloper.technologies); 
    // 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']
    
    console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position, middleDeveloper.technologies); 
    // 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']
    
    console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position, seniorDeveloper.technologies); 
    // 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
}