
import React from 'react'

const Menu = () => {
    const menuData =[
        { id: 1, name: 'pizza 1', price: 1200, description: 'Veggie pizza', image: '/pizza.jpg' },
        { id: 2, name: 'pizza 2', price: 1500, description: 'Chicken Tikka', image: '/pizza 5.jpg' },
        { id: 3, name: 'burger 3', price: 1800, description: 'Patty burger', image: '/burger .png' },
        { id: 4, name: 'burger 4', price: 1400, description: 'Grilled burger', image: '/burger1.png' },
        { id: 5, name: 'shawwarma 5', price: 1300, description: 'Chicken roll', image: '/shawwarma 1.jpg' },
        { id: 6, name: 'shawwarma 6', price: 1500, description: 'Kabab roll', image: '/shawwarma 2.jpg' },
    ]
    return (
        <div>
           <div className='menu'>
            {menuData.map((menu) => (
                <div key={menu.id} className='menu-card'>
                  <img src={menu.image} alt={menu.name}/>
                  <h3>{menu.name}</h3>
                  <p>{menu.description}</p>
                  <div className='price'>${menu.price}</div>
                  <button>Add to Cart</button>
                </div>
            ))}
            </div> 
        </div>
    )
}
export default Menu