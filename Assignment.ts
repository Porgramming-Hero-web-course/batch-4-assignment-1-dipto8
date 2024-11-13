    // problem 1
    const sumArray = (numbers: number[]) => {
        let sum = 0;
        for (const number of numbers) {
            sum = sum + number;

        }
        return sum;
    }
    const arr = sumArray([2, 2, 1, 5])
    //    console.log(arr)

    //Problem-2
    //Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (numbers: number[]): number[] => {
        const newArr: number[] = [];
        for (const number of numbers) {
            if (!newArr.includes(number)) {
                newArr.push(number);
            }
        }
        return newArr;
    }
    // const result = removeDuplicates([1, 1, 4, 4, 9, 5, 5, 10])
    // console.log(result)

    //Problem-3
    //Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    const countWordOccurrences = (sentence: string, word: string): number => {
        const newsentence = sentence.toLowerCase().split(' ');
        return newsentence.filter(sOfw => sOfw === word.toLowerCase()).length;

    }

    const result = countWordOccurrences("I love typescript typescript Typescript Dhaka love love", "typescript")
    // console.log(result)

    //Problem-4
    //Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: 'circle';
        radius: number;
    }
    type Rectangle = {
        shape: 'rectangle';
        length: number;
        width: number;
    }
    type Shape = Circle | Rectangle;

    const calculateShapeArea = (area: Shape): number => {
        if (area.shape == "circle") {
            return Math.PI * area.radius * area.radius;
        }
        else if (area.shape == "rectangle") {
            return area.length * area.width
        }

        return area;
    }
    const circle: Shape = { shape: 'circle', radius: 10 }
    const rectangle:Shape ={shape:'rectangle', length:10,width:10}
    // console.log(calculateShapeArea(circle))
    // console.log(calculateShapeArea(rectangle))

    //Problem -5
    /*Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.*/


    const getProperty = <T>(obj: T, property: keyof T): T[keyof T] => {
        return obj[property]

    }

    const car = {
        name: 'bmw',
        model: 2026
    }
    const ricksha = getProperty(car, "model")
    // console.log(ricksha)


//PROBLEM - 6
/* Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.*/

interface Profile {
    name: string;
    age: number;
    Email: string;
}

const updateProfile = (profile: Profile, updated: Partial<Profile>): Profile => {
    return { ...profile, ...updated };

}

const profile: Profile = {
    name: 'fahad',
    age: 26,
    Email: 'hk@shaw.ca'
}

const update = updateProfile(profile, { age: 20, name: 'kabir' });
// console.log(update)

//problem -7
/* Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.*/

class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
  
    }
    getCarAge(param:number):number{
        return param - this.year;
       
        
    }
}

const car1 = new Car('honda',"civic",2020) 
const res =car1.getCarAge(2024);
// console.log(res)

//Problem -8
/*Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false. */

const validateKeys =<T>(obj: T, keys: (keyof T)[]):boolean =>{
  return keys.every(key => key in obj)
   }



// Sample Input:
const person = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person, ["name", "age"]));


