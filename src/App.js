import './App.css';
import React, {useState} from 'react';
import Toolbar from './components/Toolbar';
import Button from '@material-ui/core/Button';
import ColorContext from './components/ColorContext';
import UserForm from './components/UserForm';
import ReactHookForm from './components/ReactHookForm';

function App() {
  const [color, setColor] = useState({value: {color: 'primary'}});
  return (
    <div className="App">
{/*       <ColorContext.Provider value={color.value}>
        <Toolbar/>
        <Button onClick={()=>setColor(color.value.color==='primary' ? {value: {color: 'secondary'}} : {value: {color: 'secondary'}})}>Изменить цвет</Button>
      </ColorContext.Provider>
      <hr/>
      <UserForm name="Nikolas" age={0}/>
      <hr/> */}
      <ReactHookForm/>
    </div>
  );
}

/* const Toolbar = () => {
  return <ColorButton/>
}

class ColorButton extends React.Component{
  static contextType = ColorContext;
  render(){
      return <Button variant="contained" color={this.context}>Нажми</Button>
  }
} */

export default App;
