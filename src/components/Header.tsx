import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from '@mui/material';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed='top' bg='dark' variant='dark'>
         <Container>
            <Navbar.Brand>
                React TypeScript Bootstrap
            </Navbar.Brand>
         </Container>
    </Navbar>
  );
};

export default Header;
