import React from 'react';
import './App.scss';
import Header from './Header';
import Main from './Main';
import Container from '@material-ui/core/Container';

const users = [
  {name: 'Vadim Sereda', job: 'Webmaster', email: 'vadim.sereda@dataart.com', date: '10/01/2020', id: 1},
  {name: 'Ihor Viter', job: 'Java dev', email: 'ihor.viter@gmail.com', date: '25/12/2019', id: 2},
  {name: 'Taras Sykhenko', job: 'PM', email: 'Taras.Sykhenko@gmail.com', date: '20/01/2020', id: 3}
];

const App = () => {
    return (
        <div className="App">
            <Container maxWidth="lg">
                <Header />

                <Main usersInfo={users} />
            </Container>
        </div>
    );
}

export default App;
