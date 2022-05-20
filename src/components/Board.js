import Row from './Row';
import { Square } from './Square';
import PropTypes from 'prop-types';


function sliceArray(array, size){
    const res = [];
    for (let i=0; i<array.length; i+=size) {
      res.push(array.slice(i, i+size));
    }
    return res;
  }
export function Board({board , onplay, disabled})
{
    const squares= board.map((square,i) => <Square disabled={disabled} key={i} value={square} onClick={() => onplay(i)} />);
    const rows= sliceArray(squares, 3)
    return(
        <div className="Board">
            {rows.map((row,i)=> <Row key={i}>{row}</Row>)}
            
        </div>
    );
}

Board.proptype={
    board: PropTypes.array,
    onplay: PropTypes.func,
}
export default Board; 

const rows = (squares , 3) => {
    
}