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



  