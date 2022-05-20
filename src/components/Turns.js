

export function Turns({turn, onSelect})
{
    const turns=Array(turn).fill(null);
    
    return(
    <div className="Turns">
        <div onClick={() => onSelect(0)}>Start</div>
        {turns.map(( v, i) => <div className='Turns' key={i} onClick={() => onSelect(i+1)}>Turn {i+1}</div>)}
    </div>);
}
export default Turns;

