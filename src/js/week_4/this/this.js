const thisLearn = () => {
    const student = {
        stack: ['HTML'],
        level: 1,
        improveLevel() {
            this.level++;
            if (this.level > 5) {
                console.log('Студент выучил все технологии!')
                return this;
            }
            switch (this.level) {
                case 2:
                    this.stack.push('CSS');
                    console.log(this.stack)
                    return this;
                case 3:
                    this.stack.push('JavaScript');
                    console.log(this.stack)
                    return this;
                case 4:
                    this.stack.push('React');
                    console.log(this.stack)
                    return this;
                case 5:
                    this.stack.push('NodeJS');
                    console.log(this.stack)
                    return this;
                default: return this;

            }


        }
    }


    
    const dog = {
        name: 'Чарли',
        type: 'Собака',
        makeSound() {
            return 'Гав-Гав';
        }
    }

    const bird = {
        name: 'Петя',
        type: 'Воробей',
        makeSound() {
            return 'Чик-чирик';
        }
    }

    function makeDomestic(isDomestic) {
        console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
        return {
            ...this,
            isDomestic,
        }
    }



    const newDog = makeDomestic.bind(dog, true);
    console.log(newDog())
    const newBird_v1 = makeDomestic.call(bird, false);
    console.log(newBird_v1)
    const newBird_v2 = makeDomestic.apply(bird, [false])
    console.log(newBird_v2)

    const footballer = {
        fullName: 'Cristiano Ronaldo',
        attack() {
            console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
        },
        scoreGoal(sound) {
            console.log(`${this.fullName} забил гол! Вот это да!`);
            this.celebrate(sound);
        },
        celebrate(sound) {
            console.log(sound);
        },
        goToSubstitution: function (newPlayer) {
            console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
        }
    };

    const attack = footballer.attack.bind(footballer);
    const score = footballer.scoreGoal.call(footballer, 'Сиииии');
    const substitute = footballer.goToSubstitution.apply(footballer, ['Paulo Dibala']);
    attack();
}