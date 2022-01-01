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
    
    let lens = 10;
    let arr = [capitalLetters, smallLetter, numbers, specialChar];
    let myPassword = '';
    while(lens > 0){
      let randomArray = Math.floor(Math.random()*arr.length);
      myPassword += arr[randomArray][Math.floor(Math.random() * arr[randomArray].length)];
      lens -= 1;
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
