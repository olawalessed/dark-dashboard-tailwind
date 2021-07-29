import {useState} from 'react'
import {Menu, Input} from 'semantic-ui-react'

const Header = () => {
    const [activeItem, setActiveItem] = useState('home')
  
    const handleItemClick = (e, { name }) => {
        setActiveItem(name)
    }
  
  
      return (
        <Menu secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='About'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='login'
              color='blue'
              active={activeItem === 'login'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )
    }
  
export default Header