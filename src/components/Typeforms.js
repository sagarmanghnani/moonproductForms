import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import React from 'react';

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];
function Typeforms(props)
{
    
    if(props.type == 1)
    {
        return(
            // <DropdownButton title="check1" id = {1}>
            //     <MenuItem>List 1</MenuItem>
            //     <MenuItem>List 2</MenuItem>
            //     <MenuItem>List 3</MenuItem> 
            // </DropdownButton>

            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        )
    }
    else
    {
        return (<div>Hello world</div>)
    }
}

export default Typeforms;
