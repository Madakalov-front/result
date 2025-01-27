class Castle {
    constructor(archer, footSoldier, cavalry, artillery) {
        this.archer = archer;
        this.footSoldier = footSoldier;
        this.cavalry = cavalry;
        this.artillery = artillery;
    }
}

class Attacker extends Castle {
    constructor(archer, footSoldier, cavalry, artillery) {
        super(archer, footSoldier, cavalry, artillery);
    }
    checkChancesToWin(defenderObject) {
        const keysDefender = Object.keys(defenderObject)
        const chance = [];
        let taking = 0;
        for (const unit of keysDefender) {
            if (this[unit] > defenderObject[unit]) {
                taking++;
            }
        }
        chance.push(taking, keysDefender.length)
        return chance[0] * 25
    }
    improveArmy() {
        for (const unit in this) {
            this[unit] += 5;
        }
    }
    attack(defender) {
        const percent = this.checkChancesToWin(defender);
        if (percent < 70) {
            this.improveArmy();
            alert(`Наши шансы равны ${percent}%. Необходимо укрепление!`)
        } else {
            alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
        }
    }
}
class Defender extends Castle {
    constructor(archer, footSoldier, cavalry, artillery) {
        super(archer, footSoldier, cavalry, artillery);
    }
}

const attacker = new Attacker(30, 55, 10, 3);
const defender = new Defender(33, 50, 40, 10);

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!