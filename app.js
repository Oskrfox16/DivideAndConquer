function binarySearch(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      // find the middle value
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal < val) {
        // middleVal is too small, look at the right half
        leftIdx = middleIdx + 1;
      } else if (middleVal > val) {
        // middleVal is too large, look at the left half
        rightIdx = middleIdx - 1;
      } else {
        // we found our value!
        return middleIdx;
      }
    }
    
    // left and right pointers crossed, val isn't in arr
    return -1;
  }



  function countZeroes (arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === 0) 
        count++;
        
      }
    
      
      return count;
  }
  function sortedFrequency (arr, val){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
       
        if (arr[i] === val) 
        count++;
        
      }
    if(count === 0){
        return -1;
    }else{
      
      return count;
    }
  }


  function findRotatedIndex(arr, target){
    for (let i = 0; i< arr.length; i++){
      if(arr[i] === target) return i
    }
    return -1;
  }



 
 
 
 
 
 
 



