import './App.css';
import {useState} from "react"
import {Configuration, OpenAIApi} from "openai"

function App() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')


  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
})
const openai = new OpenAIApi(configuration);

const generateImage  = async () => {
    const  response = await openai.createImage({
        prompt: prompt,
        n:1,
        size:"1024x1024"
    })
 setResult(response.data.data[0].url) 
  console.log(result);
}

  return (
    <div className='app-main'>
        <h3>Generate an Image using OpenAI API</h3>
        <input type="text"  
        className='app-input'
        onChange={(e) => setPrompt(e.target.value)}
        placeholder = "Write your image description..."/>
        <button onClick={generateImage}> Generate an Image</button>
        <img src= {result} alt="" className='result-image' />
    </div>
  );
}

export default App;
