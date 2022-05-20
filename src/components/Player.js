import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Player({ value }) {
    //const icon1 = <FontAwesomeIcon icon={faTimes} size="2x" />;
    //const icon2 =  <FontAwesomeIcon icon={faCircle} size="2x" />;
    if(!Number.isInteger(value))
    {
        return null;
    }
    return <FontAwesomeIcon icon={(value % 2 ===0 ) ? faTimes: faCircle} size="2x" />
    }
    export default Player;