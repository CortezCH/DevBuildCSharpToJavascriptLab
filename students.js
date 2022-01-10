let studentDB = [
    {firstName:"The", lastName:"Oracle", age:50, homeTown:"Kitchen", favFood:"The Future"},
    {firstName:"Mr.", lastName:"Smith", age:51, homeTown:"The Matrix", favFood:"Inevitability"},
    {firstName:"Mr.", lastName:"Anderson", age:52, homeTown:"Zion", favFood:"The Future"},
    {firstName:"John", lastName:"Wick", age:53, homeTown:"Wherever bad guys are", favFood:"Tears of his enemies"},
    {firstName:"Keanu", lastName:"Reeves", age:54, homeTown:"Another Plane of Existence", favFood:"Being cool"},
];

function StudentSearchMain(){
    //Create a while loop to keep program going
    let choice;
    let keepGoing = true;

    while (keepGoing)
    {

        DisplayClass(studentDB);

        //ask the user how they would like to search
        choice = NameOrNumber();

        if (choice === "name")
        {
            //if they answer by name, ask them to enter the name
            //  search through the list of names for a match
            //  If no match is found, send them back to search criteria menu
            let studentName = prompt("Please enter the student's full name: ");
            index = SearchByName(studentDB, studentName);
        }
        else if (choice === "number")
        {
            let studentNum = prompt("Please enter the student's ID: ");
            //let num = parseInt(studentNum, 10);
            index = SearchByNumber(studentDB, studentNum);
            //if they answer by number, ask them for the student number.
            //  make sure the student number isn't greater than the amount of students in class
            //  if number is in range, search for the index that the student is in.
            // try
            // {
            //     let studentNum = prompt("Please enter the student's ID: ");
            //     //let num = parseInt(studentNum, 10);
            //     index = SearchByNumber(studentDB, studentNum);
            // }
            // catch
            // {
            //     console.log("Please only enter numbers.");
            //     break;
            // }
            
        }

        if(index !== -1)
        {
            Getinfo(studentDB[index], index);
        }
        else
        {
            console.log("That student doesn't exist. Please check your spelling and try again.");
        }

        //Call Continue method to decide if the loop stops or not
        keepGoing = Continue();
    }
}

function Getinfo(student, index)
{
    console.log("Student "
     + (index + 1) 
     + " is " 
     + student.firstName + " " + student.lastName + ".");
     
    let answer = prompt("What would you like to know about " + student.firstName + "? (1) Hometown (2) Favorite Food: ");

    switch (answer)
    {
        case "1":
            PrintHometown(student);
            break;
        case "2":
            PrintFavFood(student);
            break;
        default:
            console.log("That input is invalid please try again.");
            Getinfo(index);
            break;

    }
}

function PrintHometown(student)
{
    console.log( student.firstName + " is from " + student.homeTown );
}

function PrintFavFood(student)
{
    console.log( student.firstName + "'s favorite food is " + student.favFood);
}


function NameOrNumber()
{
    let nameOrNum = prompt("Please enter what you would like to search a student by " +
            "(1) Name or (2)");

    switch (nameOrNum)
    {
        case "1":
            return "name";
        case "2":
            return "number";
        default:
            console.log("That input was not valid. Try again");
            return NameOrNumber();
    }
}

function SearchByName(roster, name)
{
    for(i = 0; i < roster.length; i++)
    {
        if (roster[i].firstName + " " + roster[i].lastName == name)
        {
            return i;
        }
    }

    return -1;
}

function SearchByNumber(roster, num)
{
    for (i = 0; i < roster.length; i++)
    {
        if (i == num)
        {
            return i;
        }
    }

    return -1;
}

function DisplayClass(studentArray)
{
    console.log("Student Number Student Name");
    console.log("-------------- ------------");
    for(i = 0; i < studentArray.length; i++ )
    {
        console.log( i + ") " + studentArray[i].firstName + " " + studentArray[i].lastName );
    }
}

function Continue()
{
    let answer = prompt("Would you like to know more? (y/n)");
    if(answer.toLocaleLowerCase() === "y"){
        return true;
    }else if(answer.toLocaleLowerCase() === "n"){
        return false;
    }else{
        console.log("GoodBye!");
        return Continue();
    }

}