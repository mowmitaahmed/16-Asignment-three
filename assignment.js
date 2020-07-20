// feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;   //1 Mile = 5280 feet;
    return mile;
}
var resultFeetToMile = feetToMile(200);
console.log("Mile: ", resultFeetToMile, "mile");

// woodCalculator
function woodCalculator(bedNo, tableNo, chairNo) {
    var bedFeet = 5;
    var chairFeet = 1;
    var tableFeet = 3;
    var totalPrice = bedNo*5 + tableNo*3 + chairNo*1;
    return totalPrice;
}
var resultWoodCalculator = woodCalculator(5, 3, 1);
console.log("Total wood need: ", resultWoodCalculator, "Qubic Feet");


// brickCalculator
function brickCalculator(floorNo) {
    var feet = 1000;
    // 1st 10 floor = 15feet;
    // 11-20 tola floor = 12 feet;
    // 20 Upper = 10 feet;
    if((floorNo => 1) && (floorNo <= 10)){
         var totalBrick = floorNo * 15 * 1000;
         return totalBrick; 
    }
    else if(floorNo <= 20){
        var firstTen = 10 * 15 * 1000;
        var secondTen = (floorNo - 10);
        var secondTenBrick = secondTen * 12 * 1000;
        var totalTwentyBrick = firstTen + secondTenBrick;
        return totalTwentyBrick;
    }
    else{
        var firstTenElse = 10 * 15 * 1000;
        var secondTenElse = (floorNo - 10);
        var secondTenBrick = secondTenElse * 12 * 1000;
        var everyThingElse = floorNo - secondTenElse - 10;
        var everyThingElseBrick = everyThingElse * 10 * 1000;

        var totalElseBreak = firstTenElse + secondTenBrick + everyThingElseBrick;

        return totalElseBreak;
    }
}

var resultBrickCalculator = brickCalculator(26);
console.log("Total Bricks need: ", resultBrickCalculator);

// tinyFriend

var friendNameList = ["APPLE", "Happy", "Anik", "Mow"];

function tinyFriend(friends) {
    var smallest = friends[0].length;
    for (let i = 0; i < friends.length; i++) {
        var element = friends[i].length;
        if (element < smallest) {
            smallest = friends[i].length;  
            var finalSmallest = friends[i];
        }
    }
    return finalSmallest;
}
var smallestNumber = tinyFriend(friendNameList);
console.log("Tiny Friends Name: ", smallestNumber);