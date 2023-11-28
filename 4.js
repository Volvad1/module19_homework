function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
}

ElectricDevice.prototype.turnOn = function () {
    if (!this.pluggedIn) {
        console.log(`${this.name} включен(а) в розетку.`);
        this.pluggedIn = true;
    } else {
        console.log(`${this.name} уже включен(а).`);
    }
};

ElectricDevice.prototype.turnOff = function () {
    if (this.pluggedIn) {
        console.log(`${this.name} выключен(а) из розетки.`);
        this.pluggedIn = false;
    } else {
        console.log(`${this.name} уже выключен(а).`);
    }
};


function DeskLamp(name, power, brightness) {
    ElectricDevice.call(this, name, power);
    this.brightness = brightness;
}


DeskLamp.prototype = Object.create(ElectricDevice.prototype);
DeskLamp.prototype.constructor = DeskLamp;


DeskLamp.prototype.adjustBrightness = function (level) {
    console.log(`${this.name}: Изменение яркости на ${level}.`);
    this.brightness = level;
};


function Computer(name, power, brand) {
    ElectricDevice.call(this, name, power);
    this.brand = brand;
}


Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;


Computer.prototype.runProgram = function (program) {
    console.log(`${this.brand} ${this.name}: Запуск программы - ${program}.`);
};


const deskLamp = new DeskLamp('Настольная лампа', 20, 5);
const computer = new Computer('Компьютер', 500, 'XYZ');


deskLamp.turnOn();
deskLamp.adjustBrightness(8);
deskLamp.turnOff();

computer.turnOn();
computer.runProgram('Text Editor');
computer.turnOff();