import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Container, Disciplinas } from './styles'
import { BiTrash } from 'react-icons/bi'
import { FaExchangeAlt } from 'react-icons/fa'


interface ProfessoresParametros {
  professor: string
}

interface Cadastro {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<ProfessoresParametros>()
  const [professores, setProfessores] = useState<Cadastro[]>(() => {
    const storagedProfessores = localStorage.getItem(
      '@professores:cadastro'
    )
    if (storagedProfessores) {
      return JSON.parse(storagedProfessores)
    }
    return []
  })
  console.log(professores)
  let detalhesProfessor = []
  detalhesProfessor = professores.filter(prof => prof.professor === params.professor)
  console.log(detalhesProfessor)
  return (
    <Container>
      <Disciplinas>
        <ul>
          {detalhesProfessor.map((prof, index) =>
            <li key={index}>
              <span>Professor: {prof.professor}</span>
              <span>Disciplina: {prof.disciplina}</span>
              <span>Dia Semana: {prof.diasemana}</span>
              <span>Periodo: {prof.periodo}</span>
              <span>Horário: {prof.horario}</span>
              <button type="button"className="change"><FaExchangeAlt /></button>
              <button type="button" className="delete"><BiTrash /></button>
            </li>
          )}
        </ul>
      </Disciplinas>
    </Container>
  )
}

export default Details

// CRUD - CREATE / READ - UPDATE / DELETE
