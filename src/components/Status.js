import { Player } from "./Player";

export function Status({turn,winner,...props}) {

    if(Number.isInteger(winner))
    {
        return (<div className="Status">Winner is<Player value={turn-1}/></div>);
    }
    else if(turn == 9)
    {
        return (<div className="Status"> Tie <Player value={turn}/></div>);
    }
    else
    {
    return(
        <div className="Status">
            Player
            <Player value={turn}/>
        </div>
    );}
    
}
export default Status;