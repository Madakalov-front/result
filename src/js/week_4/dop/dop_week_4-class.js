const firstQuest = () => {
    class Dictionary {
        constructor(name) {
            this.name = name;
            this.words = {}
        }
        add(word, description) {
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
        #name;
        #words;
        constructor(name) {
            super(name);
            this.#name = name;
            this.#words = {};
    
        }
        get mainName() {
            return this.#name;
        }
        set mainName(name) {
            this.#name = name;
        }
        get allWords() {
            return this.#words;
        }    
        _addNewWord(wordKey, wordObj) {
            this.#words[wordKey] = wordObj;
        }
        add(word, description, isDifficult=null) {
            if(word in this.#words) return;
            this._addNewWord(word, {word, description, isDifficult})
        }
        remove(word) {
            delete this.#words[word]
        }
    }
    
    const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
        
    hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
        
    hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
        
    hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
        
    hardWordsDictionary.remove('неологизм');
        
    hardWordsDictionary.showAllWords();
        
    console.log(hardWordsDictionary.mainName); // Сложные слова
    hardWordsDictionary.mainName = 'Новый Словарь';
    console.log(hardWordsDictionary.mainName); // Новый Словарь
    console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
    // дилетант и квант
}

const carServices = () => {
    class CarService {
        static DefaultWorkingHours = {
            from: '9:00', 	
            till: '20:00',
          }
        constructor(name, { from, till }) {
            this.name = name;
            this.workingHours = {
                from,
                till,
            } || CarService.DefaultWorkingHours
        }
        repairCar(carName) {
            if(!carName) {
                console.error('Вам необходимо указать название машины, чтобы ее отремонтировать.')
                return;
            }
            const hours = new Date().getHours()
            const minHours = this.workingHours.from.slice(0, this.workingHours.from.indexOf(':'))
            const maxHours = this.workingHours.till.slice(0, this.workingHours.till.indexOf(':'))
            if(hours > minHours && hours < maxHours) {
                alert('К сожалению, мы сейчас закрыты. Приходите завтра')
            } else {
                alert(`Сейчас отремонтируем вашу машину ${carName} ! Ожидайте пожалуйста`)
            }
        }
    }
    
    const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
    carService.repairCar('BMW');
}