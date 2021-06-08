import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 580px;
margin: 0 auto;
padding: 0 30px;

background: #fff;
border: 1px solid #ddd;
margin-top: 30px;
`

export const Disciplinas = styled.div`
  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
  }

  .delete {
    font-size: 16px;
    border-radius: 4px;
    border: 0;
    padding: 10px 20px
  }
  .change {
    font-size: 16px;
    border-radius: 4px;
    border: 0;
    padding: 10px 20px;
  }
`
