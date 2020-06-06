var reverseString = function(s) {
    let start = 0
    let end = s.length -1

    while(start < end){
        let x = s[start]
        s[start] =s[end]
        s[end]= x
        start++
        end--
    }
};

const s = ["h","e","l","l","o"]
reverseString(s)
console.log(s)