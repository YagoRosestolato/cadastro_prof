import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Content } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Link to='/new'>
          <button>Novo Cadastro</button>
        </Link>
        <Link to='/'>
          <button>Listagem</button>
        </Link>
      </Content>
    </Container>
  )
}

export default Header
