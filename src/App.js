import './App.css';
import Passwords from './PasswordUI/ThePassword';
function App() {

  const passGenerator = () =>{
    const capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", 
                            "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
                            "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const smallLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
                          "t", "u", "v", "w", "x", "y", "z"];
    const numbers = ['0','1','2','3','4','5','6','7','8','9'];
    const specialChar = ['@','#','$','%','&','*','+','/','-','[',']','?'];
    
    const lens = 10;
    let myPassword = '';

    /*for(let i = 0; i <= lens; i++){
      myPassword += capitalLetters[Math.floor(Math.random() * capitalLetters.length)]
      +specialChar[Math.floor(Math.random() * specialChar.length)]
      +numbers[Math.floor(Math.random() * numbers.length)]
      +smallLetter[Math.floor(Math.random() * smallLetter.length)];
    }*/
    while(myPassword.length < lens){
      myPassword += capitalLetters[Math.floor(Math.random() * capitalLetters.length)]
      +specialChar[Math.floor(Math.random() * specialChar.length)]
      +numbers[Math.floor(Math.random() * numbers.length)]
      +smallLetter[Math.floor(Math.random() * smallLetter.length)];
    }
    return myPassword;
    
  }
  return (
    <div className="App">
      <Passwords passGenerator={passGenerator} />
    </div>
  );
}

export default App;
