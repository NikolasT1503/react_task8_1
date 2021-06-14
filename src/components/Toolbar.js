import React from 'react';
import Button from '@material-ui/core/Button';
import ColorContext from './ColorContext';

const Toolbar = () => {
    return <ColorButton/>
}

export class ColorButton extends React.Component{
    static contextType = ColorContext;
    render(){
        return <Button variant="contained" color={this.context.color}>Нажми</Button>
    }
}

export default Toolbar;