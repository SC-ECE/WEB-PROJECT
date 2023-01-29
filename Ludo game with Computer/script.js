//</script><script type="text/babel">

const CreatorCopyRight = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "20px",
        fontFamily: "Arial Helvetica sans-serif",
        fontWeight: "bold",
        margin: "5px 0 5px 0",
      }}
    >
      {props.value}
    </div>
  );
};

// the CardList Component
const CardList = (props) => {
  // the profiles will be received from the parent which is the App component.
  // map the array of objects into Card elements. map every profile object into a card element,
  // the conversion is done like this: [<Card />, <Card />, <Card />, <Card />, etc]

  // it is necessary to use a key for every card element. in this case I used the html_url as a key, since it is unique
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.html_url} {...profile} />
      ))}
    </div>
  );
};

// The Card component
class Card extends React.Component {
  render() {
    // the prop through which there will be passed information from the parent which is the CardList component
    // the prop will be composed of 5 properties.
    const profile = this.props;

    return (
      <div
        className="github-profile"
        style={{
          margin: "5% 0 0 5%",
          display: "block",
          background: "#5B8FB9",
          width: "300px",
          color: "white",
          padding: "10px",
        }}
      >
        <img
          src={profile.avatar_url}
          width="100px"
          height="100px"
          style={{ display: "inline-block", margin: "5px 0 0 0" }}
          alt="missing"
        />
        <div
          className="info"
          style={{ display: "inline-block", margin: "0 0 0 5%" }}
        >
          <div className="public repos" style={{ fontSize: "90%" }}>
            public repositories: {profile.public_repos}
          </div>
          <span>link: </span>
          <a
            className="link"
            href={profile.html_url}
            style={{ fontSize: "90%" }}
          >
            {profile.html_url}
          </a>
          <div className="created-at" style={{ fontSize: "100%" }}>
            created at: {profile.created_at}
          </div>
          <div className="type" style={{ fontSize: "90%" }}>
            type: {profile.type}
          </div>
        </div>
      </div>
    );
  }
}

// the Form component
class Form extends React.Component {
  // create a state without constructor, using class attributes
  state = {
    userName: "",
  };

  // the submit button event listener which uses axios library to fetch data from the API
  handleSubmit = async (event) => {
    // need to use preventDefault, otherwise the page will refresh after clicking the button when working with forms
    event.preventDefault();

    try {
      // resp awaits for axios to retrieve data from github using the given url
      const resp = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );

      // pass the response data to the submitAction prop. the addNewProfile function will take it as parameter in
      //  the App Component and will setState based on the previous State
      this.props.onSubmitAction(resp.data);
    } catch (error) {
      alert(`${this.state.userName} does not exist, Please try a real user`);
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ textAlign: "center", margin: "10px 0 0 0" }}
      >
        <input
          type="text"
          placeholder="Insert user name"
          value={this.state.userName} // the value is the username state
          // using onChange to add user and setState of userName based on the value
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add User</button>
      </form>
    );
  }
}

class App extends React.Component {
  // define the states as class attribute (no need for constructor anymore)
  state = {
    profiles: [],
  };

  // access previous state, spread the existing profile using ...prevState.profile, and append the new profileData
  // basically a concatenation on the profiles state array
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  // pass the state as props to the CardList child
  // when the Form button is clicked, the state will be updated
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "Arial Helvetica sans-serif",
            fontWeight: "bold",
          }}
        >
          {this.props.title}
        </div>
        <CreatorCopyRight value={"Ⓒ 2022 Created by Ankit Kumar"} />
        <Form onSubmitAction={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

ReactDOM.render(
  <App title="Github users details" />,
  document.getElementById("root")
);

//</script>
const w = window.innerWidth;
const h = window.innerHeight;
const grid = Math.floor(w / 15);
const diceValue = [1,2,3,4,5,6];
let moveForAI, moveForP;
let playable = false;


let aval = [];
let initposArr2 = [];
let aplayers = [];
let aiMove = 0;
let amove1 = 0;
let amove2 = 0;
let amove3 = 0;
let amove4 = 0;
let aiTurn = false;
let allow1 = true;
let allow2 = false;
let allow3 = false;
let allow4 = false;
let a1 = true;
let a2 = false;
let a3 = false;
let a4 = false;




let players = [];
let val = [];
let initposArr = [];
let playerMove = 0;
let move1 = 0;
let move2 = 0;
let move3 = 0;
let move4 = 0;
let playerTurn = false;
let turn = true;
let turn1 = true;






/****************************************/
/********** Board Map (0,2,3) ***********/
/****************************************/





let boardMap = [

[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,3,3,3,0,6,0,0,6,0],
[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,3,3,3,0,6,0,0,6,0],
[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[3,3,3,3,3,3,2,2,2,3,3,3,3,3,3],
[3,3,3,3,3,3,2,2,2,3,3,3,3,3,3],
[3,3,3,3,3,3,2,2,2,3,3,3,3,3,3],
[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[0,5,0,0,5,0,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0],
[0,5,0,0,5,0,3,3,3,0,0,0,0,0,0],
[0,0,0,0,0,0,3,3,3,0,0,0,0,0,0]

];



let gap_height = (h - (boardMap.length * grid)) / 2;
let topX = h - ((gap_height * 0.5) + grid / 2);
let topY = (gap_height * 0.5) - grid / 2;




/****************************************/
/*********** Available Moves ************/
/****************************************/



let moves = [];
for (let i = 0; i < boardMap.length; i++){
    for (let j = 0; j < boardMap[0].length; j++){
        if (boardMap[i][j] == 3){
            let rc = {
                r : i + 1,
                c : j + 1
            }
            
            moves.push(rc);
        }
    }
}



/*console.log('Avialable moves');
for (let i = 0; i < moves.length; i++){
    console.log('r : ' + moves[i].r);
    console.log('c : ' + moves[i].c);
    console.log('-------');
}*/




/****************************************/
/********** Moves for Players ***********/
/****************************************/


// Moves for Player

let movesForPlayer1 = [66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 2, 5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 67, 64, 61, 58, 55];



// Moves for Computer

let movesForPlayer2 = [5, 8, 11, 14, 17, 24, 25, 26, 27, 28, 29, 41, 53, 52, 51, 50, 49, 48, 56, 59, 62, 65, 68, 71, 70, 69, 66, 63, 60, 57, 54, 47, 46, 45, 44, 43, 42, 30, 18, 19, 20, 21, 22, 23, 15, 12, 9, 6, 3, 0, 1, 4, 7, 10, 13, 16, 25];




let stand = [5, movesForPlayer2[13], 66, movesForPlayer1[13]];





/****************************************/
/************ Canvas SetUp **************/
/****************************************/




function setup(){
    createCanvas(w, h);
    
    
    // Create Players
    
    let body = document.querySelector('body');
    
    
    
   for (let i = 0; i < 4; i++){
                let div = document.createElement('div');
                div.classList.add('ai');
                div.style.height = grid + 'px';
                div.style.width = (grid - 2) + 'px';
                div.style.left = 22 + (i * (grid + 5)) + 'px';
                div.style.top = (gap_height * 0.5) - (grid / 2) + 'px';
                aplayers.push(div);
                body.appendChild(div);
    }
    
    
    for (let i = 0; i < 4; i++){
                let div = document.createElement('div');
                div.classList.add('player');
                div.style.height = grid + 'px';
                div.style.width = (grid - 2) + 'px';
                  div.style.left = (w - (grid * 4) - 30) + ((i * (grid + 5))) + 'px';
                div.style.top = h - ((gap_height * 0.5) + grid / 2) + 'px';
                players.push(div);
                body.appendChild(div);
    }
    
    
    dice1.style.height = (gap_height * 0.5) + 'px';
    dice1.style.width = (gap_height * 0.5) + 'px';
    dice2.style.height = (gap_height * 0.5) + 'px';
    dice2.style.width = (gap_height * 0.5) + 'px';
    
    dice1.style.left = w / 2 + 'px';
    dice1.style.top = (h - gap_height) + (gap_height * 0.5 / 2) + 'px';
    
    dice2.style.left = w / 2 + 'px';
    dice2.style.top = gap_height * 0.5 / 2 + 'px';
    
    
    status1.style.left = w - 100 + 'px';
    status1.style.top = gap_height * 0.5 / 2 + 'px';
    
    status2.style.left = 50 + 'px';
    status2.style.top = (h - gap_height) + (gap_height * 0.5 / 2) + 'px';
    
    for (let i = 0; i < players.length; i++){
        
        let lt = {
            l : players[i].style.left,
            t : players[i].style.top
        }
        
        initposArr.push(lt);
    }
    
    for (let i = 0; i < aplayers.length; i++){
        let lt = {
            l : aplayers[i].style.left,
            t : aplayers[i].style.top
        }
        
        initposArr2.push(lt);
    }
    //console.log(initposArr[0].t)
    
    
    loadingScreen();
    
}




/****************************************/
/************ Draw Function *************/
/****************************************/




function draw(){

    // Canvas background

    background('#eee');
    
    
    // Draw The Ludo Board
    
    drawBoard();
    
    // Player Won
    
    if (move1 >= 56 && move2 >= 56 && move3 >= 56 && move4 >= 56){
        console.log('Player Won!');
        noLoop();
    }
    
    
    // AI Won!
    
    
    
    if (amove1 >= 56 && amove2 >= 56 && amove3 >= 56 && amove4 >= 56){
        console.log('AI Won!');
        noLoop();
    }
    
    
    // Initialize the AI
    
    Initialize_AI();
    
    // Player Dice
    
    dice1.addEventListener('click', roll);
    
    
    
    
    
    
    
    
    
}


/****************************************/
/*************** Player *****************/
/****************************************/



function roll(){
    

    if (playerTurn == true){
    
    playerTurn = false;

    setText(status2, 'Rolling...');
    
    
    let ran = randoms(diceValue);
    
    let move = diceValue[ran];
    
    
    
    
    setTimeout(() => {
    
        // Change the dice
        
        dice1.src = redDice[move - 1];
        
        
        // Set Status
        
        let m = "It's a <b>" + move + '</b>.';
        
        setText(status2, m);
        
        
                 
        
        setTimeout(() => {
                
            
            if (move !== 6){
                
                if (lr(0).top < topX || lr(1).top < topX || lr(2).top < topX || lr(3).top < topX){
                
                    
                    
                    turn1 = true;
                    playerTurn = false;
                    val.push(move);
                    
              
                    
                    for (let i = 0; i < players.length; i++){
                           if (lr(i).top < topX){
                            
                
                setBorder(players[i], '2px', 'red');
                
                if (move4 >= 56){
                        borderNone(players[3]);
                        
                    }
                    if (move3 >= 56){
                        borderNone(players[2]);
                        
                    }
                    if (move2 >= 56){
                        borderNone(players[1]);
                        
                    }
                    if (move1 >= 56){
                        borderNone(players[0]);
                    }
                            
                            
                            
                            
      players[i].addEventListener('click', e => {    
          
         
          
          if (turn1 == true){
              
              
              for (let j = 0; j < players.length; j++){
                  
                  borderNone(players[j]);
              }
              
              
              if (i == 0){
                
                
                
                
                move1 += val[val.length - 1];
                
                
                setPosition(move1, movesForPlayer1, i, players);
                
                setAIDie(move1);
                
                  
              }
              
              
              else if (i == 1){
                  
                
                move2 += val[val.length - 1];
                
                setPosition(move2, movesForPlayer1, i, players);
                
                setAIDie(move2);
                
              }
              
              else if (i == 2){
                
                move3 += val[val.length - 1];
                setPosition(move3, movesForPlayer1, i, players);
                
                setAIDie(move3);
                  
              }
              
              else if (i == 3){
                
                move4 += val[val.length - 1];
                setPosition(move4, movesForPlayer1, i, players);
                
                setAIDie(move4);
                
              }
              
              
              
              
              
              //playerTurn = true;
              aiTurn = true;
              setText(status1, 'Rolling...');
              setBorder(dice2, '3px', 'blue');
              borderNone(dice1);
              
              
              
          }
          
          
          turn1 = false;
          
          
      });
                        
                            
        
        
        
                        
                    }
                    
                    
                    }
                    
                    
                    
                
                    
                    
                    
                }
                
                else
                
                {
                    
                    
                    playerTurn = false;
                    aiTurn = true;
                    setText(status1, 'Rolling...');
                    setBorder(dice2, '3px', 'blue');
                    borderNone(dice1);
                    
                    
                }
                
            }
            
            else
            
            {
               
               turn = true;
               playerTurn = false;
               for (let i = 0; i < players.length; i++){
                   
                  
                  if (lr(i).top > topX - (grid + 5)){
                      setBorder(players[i], '2px', 'blue');
                  }
                  else
                  {
                      
                      
                setBorder(players[i], '2px', 'red');
                if (move4 >= 56){
                        borderNone(players[3]);
                        
                    }
                    if (move3 >= 56){
                        borderNone(players[2]);
                        
                    }
                    if (move2 >= 56){
                        borderNone(players[1]);
                        
                    }
                    if (move1 >= 56){
                        borderNone(players[0]);
                    }
                
                      
                  }
                  
                   players[i].addEventListener('click', e => {
                   
                   
                       if (lr(i).top > topX - (grid + 5)){
                           
                           if (turn == true){
                           
                           setPos2(5, i, i, players);
                           
                           
                           for (let j = 0; j < players.length; j++){
                               players[j].style.border = 'none';
                           }
                           
                           setText(status2, 'Roll Again.');
                           
                           
                           }
                           
                           
                           
                       }
                       else 
                       {
                           if (turn == true){
                               //console.log('Hi');
                               for (let j = 0; j < players.length; j++){
                                   
                                   
                 borderNone(players[j]);   
                    
                               }
                               setText(status2, 'Roll Again.');
                               
                               
            
            if (i == 0){
                
                move1 += move;
                setPosition(move1, movesForPlayer1, i, players);
                
                setAIDie(move1);
                
                
            }
            
            if (i == 1){
                
                move2 += move;
                setPosition(move2, movesForPlayer1, i, players);
                
                setAIDie(move2);
                
            }
            
            
            if (i == 2){
                
                move3 += move;
                setPosition(move3, movesForPlayer1, i, players);
                
                setAIDie(move3);
            }
            
            
            
            if (i == 3){
                
                move4 += move;
                setPosition(move4, movesForPlayer1, i, players);
                
                setAIDie(move4);
                
                
            }
            
            
                               
                           }
                       }
                       
                       
                       
                       turn = false;
                       playerTurn = true;
                       
                       
                       
                   });
                   
               }  
                
                
            }
        
            
            
        }, 1000); // Timeout
        
        
        
        
    }, 1000);
    
    
    }
    
}







/****************************************/
/***************** AI *******************/
/****************************************/



function Initialize_AI(){
    
    // Random value to get dice value
    
    //playerTurn = false;
    
    let ran = randoms(diceValue);
    
    // Dice Value
    
    let move = diceValue[ran];
    
    // Move the AI wrt dice value
    
    moveForAI = movesForPlayer2[aiMove];
    
    // Add the dice value next time
    
    
    
    if (aiTurn == true){
    
    
    aiTurn = false;
    playerTurn = false;
    
    setTimeout(() => {
        
        
        
        dice2.src = whiteDice[move - 1];
        
        // Set Status
        
        
        
        let m = "It's a <b>" + move + '</b>.';
        
        setText(status1, m);
        
        
        
        
        setTimeout(() => {
        
            
            // Save the dice value
            
            aval.push(move);
            
            // If dice value is not a six
            
            if (move !== 6){
                
            
            
            for (let i = 0; i < aplayers.length; i++){
               if (jn(i).top > topY){
               
                // Set red border
                    
                    setBorder(aplayers[i], '2px', 'red');
                    if (amove4 >= 56){
                        borderNone(aplayers[0]);
                        
                    }
                    if (amove3 >= 56){
                        borderNone(aplayers[1]);
                        
                    }
                    if (amove2 >= 56){
                        borderNone(aplayers[2]);
                        
                    }
                    if (amove1 >= 56){
                        borderNone(aplayers[3]);
                    }
                    
                    
                        
                        
                        
                        } 
            }
            
            setTimeout(() => {
                
            
            
            for (let i = 0; i < aplayers.length; i++){
            
            
                borderNone(aplayers[i]);
                
                
                setDie(move1, move);
                setDie(move2, move);
                setDie(move3, move);
                setDie(move4, move);
                
                cond();
                
                setMove(1, move);
                setMove(2, move);
                setMove(3, move);
                setMove(4, move);
                setMove(5, move);
                
                
                if (a4 == true && i == 0){
        
        if (jn(i).top > topY){
            
            amove4 += aval[aval.length - 1];
            
            setPosition(amove4, movesForPlayer2, i, aplayers);
            
            setPlayerDie(amove4);
            
            goToPlayerOne();
            
        
                    }
                    else
                    {
            
            goToPlayerOne();
                
                    }
                }
                
                else if (a3 == true && i == 1){
                
        if (jn(i).top > topY){
            
            amove3 += aval[aval.length - 1];
            setPosition(amove3, movesForPlayer2, i, aplayers);
            
            setPlayerDie(amove3);
            
            goToPlayerOne();
            
        
                    }
                    else
                    {
            
            goToPlayerOne();
                
                    }
        
            
                }
                
                else if (a2 == true && i == 2){
                    
        if (jn(i).top > topY){
            
            amove2 += aval[aval.length - 1];
            setPosition(amove2, movesForPlayer2, i, aplayers);
            
            setPlayerDie(amove2);
            
            goToPlayerOne();
            
        
                    }
                    else
                    {
            
            goToPlayerOne();
                
                    }
                    
                }
                
                else if (a1 == true && i == 3){
                    
        
        if (jn(i).top > topY){
            
            
            
            
            amove1 += aval[aval.length - 1];
            
            setPosition(amove1, movesForPlayer2, i, aplayers);
        
            setPlayerDie(amove1);
            
            goToPlayerOne();
            
        
                    }
                    else
                    {
            
            goToPlayerOne();
                
                    }
                
                    
                }
                
                else if (a1 == false && a2 == false && a3 == false && a4 == false){
                    goToPlayerOne();
                }
                
                
                
            }
            
            }, 200);
            
                
            }
            else
            {
                
                //aiTurn = true;
                //status1.innerText = 'Rolling...';
                //aval.push(move);
                
                for (let i = 0; i < aplayers.length; i++){
                    
                    if (jn(i).top < topY + grid + 10){
                        
                
                setBorder(aplayers[i], '2px', 'blue');
                
                        
                        
                        
                        
                        
                        
                    }
                    else
                    {
                    
                    setBorder(aplayers[i], '2px', 'red');
                    
                    
                if (amove4 >= 56){
                        borderNone(aplayers[0]);
                        
                    }
                    if (amove3 >= 56){
                        borderNone(aplayers[1]);
                        
                    }
                    if (amove2 >= 56){
                        borderNone(aplayers[2]);
                        
                    }
                    if (amove1 >= 56){
                        borderNone(aplayers[3]);
                    }
                    
                    
                        
                
                
                
                    }
                    
                }
                
                setText(status1, 'Choosing...');
                
                
                setTimeout(() => {
                    
                    
                    if (jn(3).top > topY && jn(2).top > topY && jn(1).top > topY && jn(0).top > topY){
                    
                        
                        
                        if (allow4 == true){
                            amove4 += move;
                            setPosition(amove4, movesForPlayer2, 0, aplayers);
                        }
                        
                        
                        else if (allow3 == true){
                            amove3 += move;
                            setPosition(amove3, movesForPlayer2, 1, aplayers);
                        }
                        
                        else if (allow2 == true){
                            
                            
                            
                        amove2 += move;
                        setPosition(amove2, movesForPlayer2, 2, aplayers);
                        
                        setPlayerDie(amove2);          
        
        
                        }
                        
                        
                        else if (allow1 == true){
                        
                         amove1 += move;
                         setPosition(amove1, movesForPlayer2, 3, aplayers);
                         setPlayerDie(amove1);
                            
                    }
                    
                    
                    
                    
                    
                    }
                    
                    
                    
                    if (jn(3).top > topY && jn(2).top > topY && jn(1).top > topY && jn(0).top < topY + grid + 10){
                        
                        Teach_Ai('If first three players are in board and if it is a six then move the last player in board');
                    }
                    
                    
                    
                    else if (jn(3).top > topY && jn(2).top > topY && jn(1).top < topY + grid + 10){
                        Teach_Ai('If first two players are in board and if it is a six then move the third player to board');
                        
                    }
                    
                    
                    else if (jn(3).top > topY && jn(2).top < topY + grid + 10){
                        
                        
                        Teach_Ai('If first player is in board and if it is a six then move the second player to board');
                        
                        
                    }
                    
                    
                    else if (jn(3).top < topY + grid + 10){
                        
                        
                        
                        Teach_Ai('If no player is in board then move the first player to board');
                        

                        
                
                
                    }
                    
                    
                    
                    
                    setText(status1, 'Moved!');
                    
                    for (let j = 0; j < aplayers.length; j++){
                        
                    borderNone(aplayers[j]);
                 
                    }
                    
                    
                    
                    
                    // If it's a six then restart
                    
                    
                    
                    aiTurn = true;
                    setText(status1, 'Rolling...');
                    
                    
                }, 200);
                
                
                
                
                
                
                
            }
            
            
            
            
            
        }, 1000);
        
        
        
        
        
    }, 1000);
    
    }
    
    
    
    
    
    
    
}



/****************************************/
/*************** Teach Ai ***************/
/****************************************/



function Teach_Ai(condition){
    switch(condition){
        
        case 'If no player is in board then move the first player to board':
        
        //console.log('Working!!');
       return setPos2(6, 0, 3, aplayers); 
        
        break;
        
        case 'If first player is in board and if it is a six then move the second player to board':
        
        return setPos2(6, 1, 2, aplayers);
        
        break;
        
        case 'If first two players are in board and if it is a six then move the third player to board':
        
        return setPos2(6, 2, 1, aplayers);
        
        break;
        
        case 'If first three players are in board and if it is a six then move the last player in board':
        
        return setPos2(6, 3, 0, aplayers);
        
        
        break;
        
        
    }
}




/****************************************/
/************ All Functions *************/
/****************************************/


// Get the x and y by r (row) and c (column)

function movePlayer(r, c){
    
    let x = 0;
    let y = 0;
    
    for (let i = 0; i < boardMap.length; i++){
        for (let j = 0; j < boardMap[i].length; j++){
            if (i == r - 1 && j == c - 1){
                x = j * grid;
                y = (h / 2 - (boardMap.length * grid) / 2) + (i * grid);
            }
        }
    }

    return {
        x : x,
        y : y
    }
}

/****************************************/
/************* Dice Images **************/
/****************************************/


let redDice = [
'https://i.ibb.co/mXyRZRk/dieRed1.png',
'https://i.ibb.co/JFLJvKj/dieRed2.png',
'https://i.ibb.co/BgvjjCy/dieRed3.png',
'https://i.ibb.co/cbxZkhX/dieRed4.png',
'https://i.ibb.co/rt14vk6/dieRed5.png',
'https://i.ibb.co/cxS86dk/dieRed6.png'
];

let whiteDice = [
'https://i.ibb.co/9ygVF5F/die-White1.png',
'https://i.ibb.co/j6MG30W/die-White2.png',
'https://i.ibb.co/dDv2SZc/die-White3.png',
'https://i.ibb.co/8P8wMtX/die-White4.png',
'https://i.ibb.co/7nk3BZw/die-White5.png',
'https://i.ibb.co/jzTcgDp/die-White6.png'
];


/****************************************/
/************** Functions ***************/
/****************************************/



// To get Random Value

function randoms(arr){
    return Math.floor(Math.random() * arr.length);
}


// To get left and top position of players

function lr(n){
    return {
        left : parseInt(players[n].style.left),
        top : parseInt(players[n].style.top)
    }
}


// To get left and top position of AI's players

function jn(n){
    return {
        left : parseInt(aplayers[n].style.left),
        top : parseInt(aplayers[n].style.top)
    }
}


// Get Initial position 

function getPos(k){

    let posArr = [];
    
    for (let i = 0; i < boardMap.length; i++){
        for (let j = 0; j < boardMap[0].length; j++){
            if (boardMap[i][j] == k){
                let val = {
                    r : i + 1,
                    c : j + 1
                }
                posArr.push(val);
            }
        }
    }
    
    return posArr;
}


// Set Position of players and AI


function setPosition(move, arr, p, ppl){

if (move < 56){
    
    let r = moves[arr[move]].r;
    let c = moves[arr[move]].c;
    let x = movePlayer(r, c).x;
    let y = movePlayer(r, c).y;
    ppl[p].style.left = x + 'px';
    ppl[p].style.top = y + 'px';
    
}

else
{
    if (ppl == aplayers){
    
    
        let r, c;
        
        if (p == 0){
            r = 8;
            c = 8;
        }
        
        else if (p == 1){
            r = 7;
            c = 9;
        }
        
        else if (p == 2){
            r = 7;
            c = 7;
        }
        
        else if (p == 3){
            r = 7;
            c = 8;
        }
    
    
        
        
        ppl[p].style.left = movePlayer(r,c).x + 'px';
        ppl[p].style.top = movePlayer(r,c).y + 'px';
        
        if (move == amove1 && amove1 >= 56){
            a2 = true;
            allow2 = true;
            
            
        }
        
        else if (move == amove2 && amove2 >= 56){
            a3 = true;
            allow3 = true;
        }
        
        else if (move == amove3 && amove3 >= 56){
            a4 = true;
            allow4 = true;
        }
        
        
    }
    
    else if (ppl == players){
        
        
        let r, c;
        
        if (p == 0){
            r = 9;
            c = 8;
        }
        
        else if (p == 1){
            r = 9;
            c = 7;
        }
        
        else if (p == 2){
            r = 9;
            c = 9;
        }
        
        else if (p == 3){
            r = 8;
            c = 8;
        }
    
    
    
    
            ppl[p].style.left = movePlayer(r, c).x + 'px';
            ppl[p].style.top = movePlayer(r, c).y + 'px';
    }
    
}
    
    
}

// Loading Screen

function loadingScreen(){
    setTimeout(() => {
        load1.style.top = '0';
        load2.style.top = '0';
        
        setTimeout(() =>{
            text1.style.opacity = '1';
            
            setTimeout(() => {
                document.querySelector('#l1').addEventListener('click', e => {
                
                    load1.style.top = '-100vh';
                    load2.style.top = '100vh';
                    text1.style.display = 'none';
                    
                    setTimeout(() => {
                        load1.style.display = 'none';
                        load2.style.display = 'none';
                        l1.style.display = 'none';
                        
                        setTimeout(() => {
                            aiTurn = true;
                            document.querySelector('canvas').style.opacity = '1';
                            
                            
                            for (let i = 0; i < 4; i++){
                                document.getElementsByClassName('player')[i].style.opacity = '1';
                                document.getElementsByClassName('player')[i].style.transition = '0.2s';
                                document.getElementsByClassName('ai')[i].style.opacity = '1';
                                                          document.getElementsByClassName('ai')[i].style.transition = '0.2s';
                            }
                            status1.style.opacity = '1';
                            status2.style.opacity = '1';
                            dice1.style.opacity = '1';
                            dice2.style.opacity = '1';
                            dice1.style.transition = '0.2s';
                            dice2.style.transition = '0.2s';
                        }, 1000);
                        
                        
                    }, 500);
                });
            }, 100);
            
        }, 1000);
    }, 1000);
}







// Set Position - 2


function setPos2(i, j, n, ppl){
    let r = getPos(i)[j].r;
    let c = getPos(i)[j].c;
    let x = movePlayer(r, c).x;
    let y = movePlayer(r, c).y;
    ppl[n].style.left = x + 'px';
    ppl[n].style.top = y + 'px';
}


// Set border none


function borderNone(ppl){
    ppl.style.border = 'none';
}


// Set border

function setBorder(ppl, px, color){
    ppl.style.border = px + ' solid ' + color;
}

// Set Text

function setText(ppl, text){
    ppl.innerHTML = text;
}

// Initialize Position

function initPos(n){
    players[n].style.left = initposArr[n].l;
    players[n].style.top = initposArr[n].t;
}

// Go to player

function goToPlayerOne(){
    borderNone(dice2);
    setBorder(dice1, '3px', 'blue');
    setText(status2, 'Now Roll Me.');
    playerTurn = true;
    
    /*aiTurn = true;
    setText(status1, 'Rolling...');*/
}

// Initialize Position - 2

function initPos2(n){
    aplayers[n].style.left = initposArr2[n].l;
    aplayers[n].style.top = initposArr2[n].t;
}


// Functionality for AI death


// Cond.

function cond(){
    if (a1 == false && jn(2).top < topY + grid + 10 && jn(1).top < topY + grid + 10 && jn(0).top < topY + grid + 10){
        a1 = true;
    }
}


function setAIDie(m){
    
    
    if (moves[movesForPlayer1[m]] !== moves[stand[0]] && moves[movesForPlayer1[m]] !== moves[stand[1]] && moves[movesForPlayer1[m]] !== moves[stand[2]] && moves[movesForPlayer1[m]] !== moves[stand[3]] && m < 56){
    
    let cond = movesForPlayer1[m];
    
    if (cond == movesForPlayer2[amove1] || cond == movesForPlayer2[amove2] || cond == movesForPlayer2[amove3] || cond == movesForPlayer2[amove4]){
        
        if (cond == movesForPlayer2[amove1]){
            initPos2(3);
            amove1 = 0;
            a1 = false;
            
            if (jn(2).top > topY || jn(1).top > topY || jn(0).top > topY){
                
                if (jn(2).top > topY){
                    a2 = true;
                    a3 = false;
                    a4 = false;
                }
                
                else if (jn(1).top > topY){
                    a3 = true;
                    a2 = false;
                    a4 = false;
                    
                    
                }
                
                else if (jn(0).top > topY){
                    a4 = true;
                    a3 = false;
                    a2 = false;
                }
                
            }
            
           
            
            
        }
        
        else if (cond == movesForPlayer2[amove2]){
            initPos2(2);
            amove2 = 0;
            //a3 = true;
            
            a2 = false;
            
            
            if (jn(3).top > topY || jn(1).top > topY || jn(0).top > topY){
                
                if (jn(3).top > topY){
                    a1 = true;
                    a3 = false;
                    a4 = false;
                }
                
                else if (jn(1).top > topY){
                    a3 = true;
                    a1 = false;
                    a4 = false;
                    
                    
                }
                
                else if (jn(0).top > topY){
                    a4 = true;
                    a1 = false;
                    a3 = false;
                }
                
            }
            
            
            
            
            
        }
        
        else if (cond == movesForPlayer2[amove3]){
            initPos2(1);
            amove3 = 0;
            
            a3 = false;
            
            if (jn(3).top > topY || jn(2).top > topY || jn(0).top > topY){
                
                if (jn(3).top > topY){
                    a1 = true;
                    a2 = false;
                    a4 = false;
                }
                
                else if (jn(2).top > topY){
                    a2 = true;
                    a1 = false;
                    a4 = false;
                    
                    
                }
                
                else if (jn(0).top > topY){
                    a4 = true;
                    a1 = false;
                    a2 = false;
                }
                
            }
            
            
            
            
            
        }
        
        else if (cond == movesForPlayer2[amove4]){
            initPos2(0);
            amove4 = 0;
            
            a4 = false;
            
            if (jn(3).top > topY || jn(2).top > topY || jn(1).top > topY){
                
                if (jn(3).top > topY){
                    a1 = true;
                    a2 = false;
                    a3 = false;
                }
                
                else if (jn(2).top > topY){
                    a2 = true;
                    a1 = false;
                    a3 = false;
                    
                    
                }
                
                else if (jn(1).top > topY){
                    a3 = true;
                    a1 = false;
                    a2 = false;
                }
                
            }
            
            
            
            
        }
        
        
    }
    
    }
    
}



// Functionality for Player death


function setPlayerDie(m){
    if (moves[movesForPlayer2[m]] !== moves[stand[0]] && moves[movesForPlayer2[m]] !== moves[stand[1]] && moves[movesForPlayer2[m]] !== moves[stand[2]] && moves[movesForPlayer2[m]] !== moves[stand[3]] && m < 56){
    
    
    let c = movesForPlayer2[m];
    let p = movesForPlayer1;
    
    
    
    
    if (c == p[move1] || c == p[move2] || c == p[move3] || c == p[move4]){
        
        
        if (c == p[move1]){
            initPos(0);
            move1 = 0;
        }
        
        else if (c == p[move2]){
            initPos(1);
            move2 = 0;
        }
        
        else if (c == p[move3]){
            initPos(2);
            move3 = 0;
        }
        
        else if (c == p[move4]){
            initPos(3);
            move4 = 0;
        }
        
        
    }
    
    
    
    }
}


function setMove(m, n){
    
    let c = movesForPlayer2[m];
    let p = movesForPlayer1; 
    
    if (jn(2).top > topY && amove2 == 0 && n == m){
       
        
        
        if (p[move1] == c || p[move2] == c || p[move3] == c || p[move4] == c){
            a2 = true;
            a1 = false;
            a3 = false;
            a4 = false;
        }
        
    }
    
    else if (jn(1).top > topY && amove3 == 0 && n == m){
    
        if (p[move1] == c || p[move2] == c || p[move3] == c || p[move4] == c){
            a3 = true;
            a1 = false;
            a2 = false;
            a4 = false;
        }
        
    }
    
    else if (jn(0).top > topY && amove4 == 0 && n == m){
    
        if (p[move1] == c || p[move2] == c || p[move3] == c || p[move4] == c){
            a4 = true;
            a1 = false;
            a2 = false;
            a3 = false;
        }
        
    }
    
    else if (jn(3).top > topY && amove1 == 0 && n == m){
    
        if (p[move1] == c || p[move2] == c || p[move3] == c || p[move4] == c){
            a1 = true;
            a2 = false;
            a3 = false;
            a4 = false;
        }
        
    }
    
    
}


function setDie(m, n){
    
    let p = movesForPlayer2[m - 26];
    let a = movesForPlayer2;
    //let c = p - a;
    
    
    
    if (jn(3).top > topY && amove1 > 0 && p - a[amove1] == n){
            a1 = true;
            a2 = false;
            a3 = false;
            a4 = false;
    }
    
    else if (jn(2).top > topY && amove2 > 0 && p - a[amove2] == n){
            a2 = true;
            a1 = false;
            a3 = false;
            a4 = false;
    }
    
    else if (jn(1).top > topY && amove3 > 0 && p - a[amove3] == n){
            a3 = true;
            a1 = false;
            a2 = false;
            a4 = false;
    }
    
    else if (jn(0).top > topY && amove4 > 0 && p - a[amove4] == n){
            a4 = true;
            a1 = false;
            a2 = false;
            a3 = false;
    }
    
}



// Function for board

function drawBoard(){
    for (let i = 0; i < boardMap.length; i++){
        for (let j = 0; j < boardMap[i].length; j++){
            if (boardMap[i][j] == 0 || boardMap[i][j] == 5 || boardMap[i][j] == 6){
                noStroke();
                fill('#4FC3F7');
                rect(0 + (j * grid), (h / 2 - ((boardMap.length * grid) / 2)) + (i * grid), grid, grid);
            }
            else if (boardMap[i][j] == 1){
                stroke(1.5);
                fill('white');
                rect(0 + (j * grid), (h / 2 - ((boardMap.length * grid) / 2)) + (i * grid), grid, grid);
            }
            else if (boardMap[i][j] == 2){
                noStroke();
                fill('#eee');
                //rect(0 + (j * grid), (h / 2 - ((boardMap.length * grid) / 2)) + (i * grid), grid, grid);
            }
            else if (boardMap[i][j] == 3){
                stroke(1.5);
                fill('white');
                rect(0 + (j * grid), (h / 2 - ((boardMap.length * grid) / 2)) + (i * grid), grid, grid);
            }
            else if (boardMap[i][j] == 4){
                fill('black');
                rect(0 + (j * grid), (h / 2 - ((boardMap.length * grid) / 2)) + (i * grid), grid, grid);
            }
            
        }
    }
    
    
    for (let i = 0; i < stand.length; i++){
        let r = moves[stand[i]].r;
        let c = moves[stand[i]].c;
        let x = movePlayer(r, c).x;
        let y = movePlayer(r, c).y;
        
        fill('lightblue');
        rect(x + (grid / 2 * 0.9) / 6, y + (grid / 2 * 0.9) / 6, grid * 0.9 , grid * 0.9);
        noStroke();
        
        
    }
    
}