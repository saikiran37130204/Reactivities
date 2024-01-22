import { Button, Container, Menu } from 'semantic-ui-react';
import logo from 'D:/Projects/Reactivities/client-app/public/assets/logo.png';
import { useStore } from '../stores/store';

export default function NavBar() {
  const {activityStore}=useStore();
  return (
    <Menu inverted fixed="top">
      <Container>
         <Menu.Item header>
              <img src={logo} alt="logo" style={{marginRight:'10px'}}/>
              Reactivities
         </Menu.Item>
         <Menu.Item name='Activities'/>
         <Menu.Item>
             <Button onClick={()=>activityStore.openForm()} positive content='Create Activity'/>
         </Menu.Item>
      </Container>
    </Menu>
  )
}