function Person(fullName, favColor){
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function(){
        console.log('"Hello my name is ' + this.name + ' and my favotie color is ' + this.favoriteColor);
        
    }
}

module.exports = Person;