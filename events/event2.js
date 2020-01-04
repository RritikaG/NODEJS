var events =require('events');
var util=require('util');

var Person = function(name)
{
    this.name=name;
};


// first id object to nherit somthing, second is eventemittor

util.inherits(Person,events.EventEmitter);

var James=new Person('James');
var Ritika =new Person('Ritika');

var Jini=new Person('Jini');

var people=[James,Ritika,Jini];

people.forEach(function (person) {
   person.on('speak', function(msg){
       console.log(person.name + ' said ' + msg);
   }) ;
});

James.emit('speak',"heyyy youuu");
