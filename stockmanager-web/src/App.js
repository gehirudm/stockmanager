//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

const NavbarControls = ({itemAdd}) => {
  const [textFieldValue, textFieldValueSet] = useState('');

  const handleChange = (event) => {
    textFieldValueSet(event.target.value);
  }

  const handleClick = () => {
    itemAdd(textFieldValue);
  };

  return <div>
    <input type="text" onChange={handleChange} value={textFieldValue}></input>
    <div className='Button Button-Blue' onClick={handleClick}>Add Item</div>
  </div>
}

const Button = ({itemAdd}) => {
  return <div className='Button Button-Blue' onClick={itemAdd}>Add Item</div>
}

const ItemCard = ({ itemName, itemAmount }) => {
  const [count, setCount] = useState(itemAmount);

  const handleClickUp = () => {
    setCount(count + 1)
  }

  const handleClickDown = () => {
    setCount(count - 1)
  }

  return <div className='Item-Card'>
    <h2>{itemName}</h2>
    <h3>Available : {count}</h3>
    <div className='Item-Card-Controls'>
      <span className='Item-Card-Controls-Increase' onClick={handleClickUp}>+</span>
      <span className='Item-Card-Controls-Decrease' onClick={handleClickDown}>-</span>
    </div>
  </div>
}

function App() {

  const [cards, setCards] = useState([]);
  //Generate the cards
  useEffect(() => {
    setCards([
      {
        Name: "pumpkin",
        Amount: 60
      },
      {
        Name: "carrot",
        Amount: 60
      },
      {
        Name: "beetroot",
        Amount: 60
      },
      {
        Name: "apple",
        Amount: 60
      },
    ])
  }, [])

  const handleItemAdd = (newItemName) => {
    setCards([... cards, {
      Name: newItemName,
      Amount: 0
    }])
  }

  return (
    <div className="App">
      <div className='Navbar'>
        <NavbarControls itemAdd={handleItemAdd}></NavbarControls>
      </div>
      <div className='Cards-Container'>
        {cards.map((card, index) => {
          return <ItemCard itemName={card.Name} itemAmount={card.Amount} key={index}></ItemCard>
        })}
      </div>
    </div>
  );
}

export default App;
