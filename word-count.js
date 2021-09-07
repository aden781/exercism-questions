// Word count
// Assume we are given a valid string, do a count of all vals
 const countWords = (str) => {

    //map to store values
    let wordCount = {}

     
    
    // Take string, make lowercase, replace nonalphanumeric,
    // split by space chars, remove null/empty & return as array
    const strArr = str.toLowerCase().replace(/[^a-z0-9]/g, " ").split(" ").filter(x => x)

    // Loop through array and store/count in map
    for (let i = 0; i < strArr.length; i++) {
        if (wordCount[strArr[i]]) {
            wordCount[strArr[i]]++
        } else {
            wordCount[strArr[i]] = 1
        }
    } 
    return wordCount    
};

let x = countWords(" \"Thats the password: 'PASSWORD 123'!\", cried the Special Agent.\nSo I fled.")
console.log(x)
