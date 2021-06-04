import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;

  background: rgb(79,77,124);
  background: linear-gradient(90deg, rgba(79,77,124,1) 0%, rgba(135,135,208,1) 35%, rgba(0,212,255,1) 100%);
`;

export const FormContent = styled.div`
  background-color: #fff;
  padding: 50px 60px;
  margin-top: 10px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 10px 13px -7px rgba(0,0,0,0.1), 5px 5px 15px 5px rgba(0,0,0,0); 
  box-shadow: 0px 10px 13px -7px rgba(0,0,0,0.1), 5px 5px 15px 5px rgba(0,0,0,0);
`;

export const Title = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 1.5rem;
  padding: 10px 0;
`;