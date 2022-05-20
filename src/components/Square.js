
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Player from './Player'; 

export function Square({value, onClick,disabled})
{
    
    return(

        <button className='Square' disabled={disabled} onClick={onClick} >
            <Player value={value} />
        </button>
    );
}

Square.propTypes={
    value:PropTypes.node,
    onClick: PropTypes.func
};

export default Square;