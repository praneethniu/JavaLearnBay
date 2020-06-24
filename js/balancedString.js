function balancedString(string) {
    let upperCaseChars = {};
    let charFrequency = {}

    // The following logic is to return early if the string is not balanced
    for (let s of string) {
        s = s.toLowerCase();
        charFrequency[s] = (charFrequency[s] || 0) + 1 ;
    }

    for (let value of Object.values(charFrequency)) {
        if (value === 1) {
            return - 1;
        }
    }

    // Using sliding window technique:
    
    let winStart = null;
    let shortest = string.length;
    let lastChar = '';

    for (let winEnd = 0; winEnd < string.length; winEnd++) {
        const char = string[winEnd];

        if (char.toUpperCase() === char) {
            upperCaseChars[char.toLowerCase()] = true;
            lastChar = char.toLowerCase();

            if (winStart === null) {
                winStart = winEnd;
            }
        }

        if (char in upperCaseChars && lastChar === char) {
            shortest = Math.min(shortest, winEnd - winStart + 1);
        }
    }

    return shortest;
}

const shortestSize = balancedString('azABaabza');

console.log(shortestSize); 