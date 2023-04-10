import styled from 'styled-components';

export const StatWrap = styled.div`
 width:400px;
  border-radius: 0px;
  background : #f0efef;
  box-shadow:32px 32px 64px #afaeae, -32px -32px 64 #ffffff;
  display:flex;
  margin:0 auto;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  `;

export const Btn = styled.button`
  background-color: blue;
  border-radius: 5px;
  border-style: none;
  color: #ffffff;
   cursor: pointer;
  display: block;
   list-style: none;
  margin-top: 10px;
  outline: none;
  padding: 5px 12px;
  position: relative;
  text-align: center;
  text-decoration: none;
`;

export const Form = styled.form`
  padding: 10px;
`;