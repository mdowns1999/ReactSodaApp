import Rating from '@mui/material/Rating';
import { useState } from 'react';

const Star = (props) => {
    // An Excellent library from mui.com for creating rating stars: https://mui.com/material-ui/react-rating/
    const [value, setValue] = useState(props.value);
    let stars = <Rating name="no-value" value={null} />;

    if(!props.readOnly){
        stars = <Rating 
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        size="large"/>
    }else{
        stars = <Rating 
        value={value}
        readOnly
        size="small"
        />
    }

    return <>{stars}</>
}

export default Star;