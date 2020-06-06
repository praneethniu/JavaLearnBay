 

 const merge = (first, second) => {
    
    let i =0;
    let j =0;
    let k=0;
    const temp
    if(i < first.length && j< second.length){
        max
     temp[k] = second[j]
     temp[++k]= first[i]
     i++
     j++
    }
    if()

 }
 const mergeSort = (arr) => {

    const splitArray = (arr, start, end) => {
        if(start >= end){
            return arr
        }

        const first = splitArray(arr, start, (start+end)/2 -1)
        const second = splitArray(arr, (start+end)/2, end)
        const result = merge(first, second)
        return result
    }
 }
  
  
  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]])
  
  const x = [12, 34, 5, 78, 9, 1, 2, 74]
  
  console.log(mergeSort(x))
  