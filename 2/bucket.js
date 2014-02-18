var person = {};

person = 
{
	name: 'eleanor',
	distance_travelled: 0,
	say_name: function()  {
		console.log(this.name)},
	say_something: function(data){
		console.log(data);
	},
	food: 'basil',
	color: 'purple',
	location:
	{
		city: 'Seattle',
		state: 'WA',
		zipcode: '98011'
	},
	walk: function(){
		console.log(this.name + ' is walking');
		this.distance_travelled += 3;
	},
	run: function(){
		console.log(this.name + ' is running');
		this.distance_travelled += 10;
	},
	crawl: function(){
		console.log(this.name + ' is crawling');
		this.distance_travelled += 1;
	},
	fly: function(){
		var i = this.getRandomInt(1, 3);
		if (i<2) {
			console.log('I am flying');
		}
		else
		{
			console.log('not flying');
		}

	},
	getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	
	do_something: function(){
		var i = this.getRandomInt(1, 3);
		console.log(i);
		if (i == 1) {
			return this.walk();			
		}
		else if (i == 2){
			return this.crawl();
		}
		else
		{
			return this.run();
		}
	}
}


person.say_name();
person.say_something(person.color);
person.walk();
for (var i = 5; i >= 0; i--)
{
	person.do_something();
};