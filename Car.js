function Car(make, model, year, color, seats, passengers){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = "manufacturer";
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner){
  this.previousOwners.push(this.owner);
  this.owner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(start){
  this.running = true;
};
Car.prototype.off = function(off){
  this.running = false;
};
Car.prototype.driveTo = function(location){
  if(this.running === true){
  return true;
  console.log("driving to " +location)}
  return false;
};
Car.prototype.park = function(){
  if(this.running === false){
  return true;
  console.log('Parked!!')}
  return false;
};
Car.prototype.pickUp = function(name){
  if(this.seats > this.passengers.length + 1 && this.running === true){
    console.log("driving to pickup " + name);
    this.passengers.push(name);
    return true;

  } else return false;
}
Car.prototype.dropOff = function(name){
  var check = this.passengers.indexOf(name)
  if(check !== -1 && this.running === true){
    console.log("driving to drop off " + name);
    this.passengers.splice(check,1);
    return true;

  } else return false;
}
Car.prototype.passengerCount = function(){
  return this.passengers.length;
}






// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
