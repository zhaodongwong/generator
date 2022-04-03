import './index.css'
import { Icon } from '@iconify/react';
import React,{ useState ,useEffect } from 'react';
import copy from 'copy-to-clipboard';
import 'animate.css';


function App() {
  const[passwordLength, setPasswordLength] = useState(8);
  const[password, setPassword] = useState("");

  const[copied,setCopied] = useState(false);

  const[containUppercase,setContainUppercase] = useState(true);
  const[containLowercase,setContainLowercase] = useState(true);
  const[containNumber,setContainNumber] = useState(true);
  const[containSymbol,setContainSymbol] = useState(true);

  const generatePassword = () => {
    const lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseCharacters = lowerCaseCharacters.toUpperCase();
    const numberCharacters = "1234567890";
    const symbolCharacters = "!@#$%^&*()_+-=[]{};':,./<>?|`~"

    let newPassword = "";

    for (let i = 0; i < passwordLength; i++){
      let characterCandidates = "";
      if(containUppercase) characterCandidates += uppercaseCharacters;
      if(containLowercase) characterCandidates += lowerCaseCharacters;
      if(containNumber) characterCandidates += numberCharacters;
      if(containSymbol) characterCandidates += symbolCharacters;
      const char = characterCandidates.charAt(Math.floor(Math.random() * characterCandidates.length));
      newPassword+=char
    }
    setPassword (newPassword);
  }
  useEffect(() => {
    generatePassword();
  },[passwordLength,containLowercase,containNumber,containSymbol,containUppercase]);

  return (
    <div className='bg-gradient-to-br from-lime-300 to-green-300'>
    <div className="w-full h-screen flex flex-col items-center justify-center">
     <h1 className='text-4xl text-center animate__animated animate__backInDown sm'>Password Generator</h1>
     <p className='px-12 animate__animated animate__backInLeft animate__delay-1s	'>dhaduashdukasdkashdkjasda</p>
     <div className='border-2 border-black rounded p-4 text-2xl mt-12 flex items-center whitespace-nowrap min-w-[50%] max-w-[90%] overflow-x-auto overflow-y-hidden justify-between animate__animated animate__backInRight animate__delay-1s	'>
       {password}
       <div className='flex items-center gap-3'>
         <button onClick={() => {
          copy(password);
          setCopied(true);
          setTimeout(() =>{
            setCopied(false)
          },1000)
         }}>
         <Icon icon={copied? "uil:check":"fad:copy"} width="30"/>
         </button>
         <button onClick={generatePassword}>
         <Icon icon="codicon:debug-restart" />
         </button>
       </div>
     </div>
     <div class="slidecontainer mt-8 w-1/2  animate__animated animate__bounceInDown animate__delay-2s">
       <h5 className='text-lg'>Password Length:</h5>
       <input type="range" class="slider" id="myRange" value={passwordLength} min="8" max="80"  onChange={(e) => setPasswordLength(e.target.value)}/>
       <div>{passwordLength}</div>
     </div>
      <div className='flex flex-col mt-6 flex-wrap lg:text-md'>
       <div className='w-full flex items-center gap-4'>
         <div className='w-1/2 items-center justify-between flex-shrink-0'>
           <div className='animate__animated animate__lightSpeedInRight animate__delay-3s'>
           <h6 className='text-lg'>UppercaseCharacter</h6>
            <label class="relative flex justify-between items-center overflow-hidden">
              <input type="checkbox" class="sr-only peer" onClick={() => setContainUppercase(!containUppercase)} checked={containUppercase}/>
              <span class="w-10 h-6 flex items-center flex-shrink-0 p-0.5 border-2 border-black rounded duration-300 ease-in-out after:w-4 after:h-4 after:bg-black after:rounded after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
            </label>
            </div>
            </div>
         <div className='animate__animated animate__lightSpeedInLeft animate__delay-3s'>
         <h6 className='text-lg lg:text-md'>LowercaseCharacter</h6>
            <label class="relative flex justify-between items-center overflow-hidden">
              <input type="checkbox" class="sr-only peer" onClick={() => setContainLowercase(!containLowercase)} checked={containLowercase}/>
              <span class="w-10 h-6 flex items-center flex-shrink-0 p-0.5 border-2 border-black rounded duration-300 ease-in-out after:w-4 after:h-4 after:rounded after:bg-black after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
            </label>
         </div>
         </div>
         <div className='w-full flex items-center gap-4 mt-3'>
         <div className='w-1/2 items-center justify-between flex-shrink-0'>
           <div className='animate__animated animate__lightSpeedInRight animate__delay-3s'>
           <h6 className='text-lg'>Symbol</h6>
            <label class="relative flex justify-between items-center overflow-hidden">
              <input type="checkbox" class="sr-only peer" onClick={() => setContainSymbol(!containSymbol)} checked={containSymbol}/>
              <span class="w-10 h-6 flex items-center flex-shrink-0 p-0.5 border-2 border-black rounded duration-300 ease-in-out after:w-4 after:h-4 after:rounded after:bg-black after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
            </label>
            </div>
            </div>
            <div className='w-1/2 items-center justify-between flex-shrink-0'>
           <div className='animate__animated animate__lightSpeedInLeft animate__delay-3s'>
           <h6 className='text-lg'>Number</h6>
            <label class="relative flex justify-between items-center overflow-hidden">
              <input type="checkbox" class="sr-only peer" onClick={() => setContainNumber(!containNumber)} checked={containNumber}/>
              <span class="w-10 h-6 flex items-center flex-shrink-0 p-0.5 border-2 border-black rounded duration-300 ease-in-out after:w-4 after:h-4 after:rounded after:bg-black after:shadow-md after:duration-300 peer-checked:after:translate-x-4"></span>
            </label>
            </div>
            </div>
       </div>
     </div>
     <div className="absolute -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
      <Icon icon="simple-icons:foodpanda"  className="w-full h-full text-black opacity-[5%] animate-spin [animation-duration:12s]" />
    </div>
    </div>    
    </div>
    
  )
}

export default App
