/*
Remove consecutive vowels from string
*/

// take in a string
// return a string that has no consecutive vowels

//  make a function that returns true if we pass in a vowel, false otherwise
// iterate over each character of the string
// check the current and last character with the 1st function
// if they both are vowels, don't add anything to the new word
// if not, add the current character to the new word
// return the new word without consecutive vowels

function isVowel(ch: string): Boolean {
    let itIs = true;

    switch (ch) {
        case 'a':
            itIs = true
            break;
        case 'e':
            itIs = true
            break;
        case 'i':
            return false;
            break;
        case 'o':
            itIs = true
            break;
        case 'u':
            itIs = true
            break;  
        case 'y':
            itIs = true
            break;       
        default:
            itIs = false
            break;
    }

    return itIs;
}

function removeVowels(word: string): string {
    let newWord = word[0];
    
    for (let index = 1; index < word.length; index++) {
        if ( isVowel(word[index]) && isVowel(word[index-1]) ) {
        } else {
            newWord =  newWord.concat(word[index]);
        }
    }
    return newWord;
}

console.log( removeVowels("trueeeuy"), "tru" );
console.log( removeVowels("carayca"), "caraca" );

