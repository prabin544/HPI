import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HPIFeedCell from "./HPIFeedCell";
import { useHistory } from 'react-router-dom';
import UserContext from '../Context/UserContext';
import Axios from "axios";


const FeedPage = () => {
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const { setUserData } = useContext(UserContext);
  // let token = localStorage.getItem('auth-token');
  const user = [userData.user]

  useEffect(() => {
    
    const loginCheck = async () => {
      let token = localStorage.getItem('auth-token');
      // console.log(token)
      if (!token) {
        localStorage.setItem('auth-token', "");
        token = "";
        history.push("/login")
      }
      
      const tokenRes = await Axios.post('/api/users/validToken', null,
        { headers: { 'x-auth-token': token } }
      );
      // console.log('token response', tokenRes)
      if (tokenRes.data) {
        const userRes = await Axios.get('/api/users/', {
          headers: { 'x-auth-token': token },
        });
        setUserData({
          token,
          user: userRes.data,
        }
        )
      }
    }
    loginCheck();
  }, []);





    return (
        <Container className="my-4">
            <Row>
              <Col sm={12}>
                  
                  <HPIFeedCell/>
              </Col>
            </Row>
        </Container>
      );
}

export default FeedPage;
