//Ex: 1, Start
let word1 = "level";
let word2 = "shovel";
function check_palindrome( str )
  {
    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;//forward character
      
      let y = str[j-i];//backward character
      if( x != y)
      {
        // return false if given string is not matched
        return false;
      }
    }
    /// return true if given string is matched
    return true;
     
  }
 
  function is_palindrome( str )
  {
   
    let result = check_palindrome(str);
    
    if( result == true )
    {
      console.log("The string word1 is pallindrome");
    }
    else
    {
      console.log("The string word2 is not a pallindrome");
    }
  }
  
  is_palindrome(word1);
  is_palindrome(word2);

  //Ex: 1, End


  //Ex:2, Start

  let num = 2;
  let expo = 3;
  function cube(){
      return Math.pow(num,expo); // number to the power exponential number // 2^3

  }
  console.log(cube())

  //Ex:2, End


  //Ex:3, Start

  let providedArray = [{id: 1, fullName:'John Doe'}, {id: 2, fullName:'Jim Doe'}, {id: 3, fullName:'Jane Doe'}];

  // reduce all elments in the array into single object 
  console.log(providedArray.reduce((acc, i)=> ({...acc, [i.id]:  {fullName:  i.fullName}}), {})) //(acc,i) =>(accumulator,current value)
  //Ex:3, End


  //Ex:4, Start
  let providedObject = {1: { fullName:'John Doe'}, 2: {fullName:'Jim Doe'}, 3: {fullName:'Jane Doe'} };

  //Object.keys return the array of the given object 
let result = Object.keys(providedObject).map((key) => [Number(key), providedObject[key]]); 

console.log(result)

//Ex:4, End



  