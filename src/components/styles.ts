import styled from 'styled-components'

export const Container = styled.header`
  background: #fff;
  height: 62px;
  border-bottom: 1px solid #DDD;
`

export const Content = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  height: 72px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    border-radius: 4px;
    border: 0;
    background: #7159c1;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`
