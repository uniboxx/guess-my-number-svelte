function createState(){
  let state=$state({isNew:true,highscore:null,secretNumberText:'?',secretNumber:Math.ceil(Math.random() * 20),guessNumber:'',msg:'Start guessing...',score:20})

  return {
    get state(){
      return state;
    }
  }
}

export const {state}= createState();