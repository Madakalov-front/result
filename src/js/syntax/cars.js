export const car = (carName, maxCarSpeed, carOwner) => {
  class Cars {
    constructor(carName, maxCarSpeed, carOwner) {
      const _carName = carName;
      this.maxCarSpeed = maxCarSpeed;
      this.carOwner = carOwner;
      this.getNameCar = function () {
        return _carName;
      };
    }
    setMaxSpeed(value) {
        this.maxCarSpeed = value
    }
    setCarOwner(owner) {
        this.carOwner = owner
    }
    getMaxSpeed() {
        return this.maxCarSpeed
    }
    getCarOwner() {
        return this.carOwner
    }
  }
  return new Cars(carName, maxCarSpeed, carOwner)
};
