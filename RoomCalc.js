// Initialize variables for length, width, height, perimeter, area,
// volume, paint amount, carpet amount, wall area, and keepgoing
let length = 0;
let width = 0;
let height = 0;
let perimeter = 0;
let area = 0;
let volume = 0;
let amountOfPaint = 0;
let amountOfCarpet = 0;
let wallArea = 0;
let keepGoing = true;

//Create a while loop to decide if you want to keepo measuring multiple rooms
function CalculateRoom(){
    while (keepGoing)
    {
        // Ask user to input a room width and set it to width
        width = prompt("Please enter the width of the room you are measuring: ");

        // Ask user to input a room length and set it to length 
        length = prompt("Please enter the length of the room you are measuring: ");

        // Ask user to input a room height and set it to height
        height = prompt("Please enter the height of the room you are measuring: ");

        // Use formula to calculate perimeter of room ( 2(L+W) )
        perimeter = 2 * (length + width);
        // Use formula to calculate area of room ( L x W )
        area = length * width;
        // Use fumula to calculate volume of the room (L x W x H )
        volume = length * width * height;

        // Display room perimeter
        console.log("The perimeter of the room is : " + perimeter);
        // Display room area
        console.log("The area of the room is : " + area);
        // Display room volume
        console.log("The volume of the room is : " + volume);

        // Calculate the amount of paint cans needed
        wallArea = (2 * (length * height)) + (2 * (width * height)) + area;
        amountOfPaint = wallArea / 5;

        // Calculate the amount of carpet needed for the room
        amountOfCarpet = area / 5;

        // Tell the user how much paint and carpet they will need
        console.log("You will need "+ amountOfPaint +" cans of paint (whole walls)");
        console.log((perimeter / 5) + "cans of paint (just floor perimeter),")
        console.log("and "+ amountOfCarpet + "squares of carpet.");

        // Update boolean varriable depending on answer
        let invalidAnswer = true;

        do
        {
            // Ask user if they would like to continue measuring rooms
            let userAnswer = prompt("Would you like to measure another room? (y/n)");

            if (userAnswer.toLowerCase() === "y")
            {
                invalidAnswer = false;
            }
            else if (userAnswer.toLowerCase() === "n")
            {
                invalidAnswer = false;
                keepGoing = false;
            }
            else
            {
                console.log("Please enter wither Y or N to continue.");
            }

        } while (invalidAnswer);


    }
}

