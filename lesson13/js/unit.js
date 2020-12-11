class Unit {
    _attack = 3;
    _health = 10;
    constructor(name) {this._name = name}
    isAlive(){
        return this._health > 0;
    }
    attackOther(otherUnit) {
        //instanceof проверяет принадлежность объекта к указанному типу.
        //Возвращает true/false.
        //otherUnit instanceof Unit
        if (!(otherUnit instanceof Unit)) {
            throw new Error('Юнит не может атаковать данного персонажа');
        }
        if (!this.isAlive() || !otherUnit.isAlive()) {
            console.log("Атака недоступна");
            return;
        }

        otherUnit._health -= this._attack;
    }

    set attack (unitAttack) {
        if (unitAttack < 3) throw new Error("Атака не может быть меньше 3");
        this._attack = unitAttack;
    }

    get attack() {
        return this._attack;
    }

    set health (unitHealth) {
        if (unitHealth < 10) throw new Error("здоровоье не может быть меньше 10");
        this._health = unitHealth
    }

    get health () {
        return this._health;
    }



}

class Knight extends Unit {
    constructor(name, addAttack) {
        super(name); //  вызов конструктора родителя, в котором происходит установка значения свойства name
        this._additionalAttack = addAttack;
    }
    //переопределение метода родителя
    attackOther(otherUnit) {
        //1.полностью изменить реализацию метода
        //2. расширить функционал: super.attackOther(otherUnit); + дополнительный функционал.
        super.attackOther(otherUnit);
        if (!otherUnit.isAlive()) {
            this._attack += this._additionalAttack;
        }
    }
}

export {Unit, Knight};

