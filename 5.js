
class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.pluggedIn = false;
    }

    turnOn() {
        if (!this.pluggedIn) {
            console.log(`${this.name} включен(а) в розетку.`);
            this.pluggedIn = true;
        } else {
            console.log(`${this.name} уже включен(а).`);
        }
    }

    turnOff() {
        if (this.pluggedIn) {
            console.log(`${this.name} выключен(а) из розетки.`);
            this.pluggedIn = false;
        } else {
            console.log(`${this.name} уже выключен(а).`);
        }
    }
}


class DeskLamp extends ElectricDevice {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    adjustBrightness(level) {
        console.log(`${this.name}: Изменение яркости на ${level}.`);
        this.brightness = level;
    }
}


class Computer extends ElectricDevice {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    runProgram(program) {
        console.log(`${this.brand} ${this.name}: Запуск программы - ${program}.`);
    }
}


const deskLamp = new DeskLamp('Настольная лампа', 20, 5);
const computer = new Computer('Компьютер', 500, 'XYZ');


deskLamp.turnOn();
deskLamp.adjustBrightness(8);
deskLamp.turnOff();

computer.turnOn();
computer.runProgram('Text Editor');
computer.turnOff();