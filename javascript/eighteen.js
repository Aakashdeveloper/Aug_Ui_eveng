var person = {
    fullName: function(city,country,pop){
        return this.firstName+" "+this.lastName+" "+city+" "+country+" "+pop;
    }
}

var john ={
    firstName:'John',
    lastName:'Doe'
}

var sarah ={
    firstName:'Sarah',
    lastName:'Joe'
}

person.fullName.call(john,'London','England')
person.fullName.apply(john,['London','England'])


