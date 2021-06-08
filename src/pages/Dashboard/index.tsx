import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { BiTrash } from 'react-icons/bi';


interface Cadastro {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
}

const Dashboard: React.FC = () => {
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
  let professorUnico = []
  professorUnico = Array.from(new Set(professores.map(prof => prof.professor))).sort()
  console.log(professorUnico)
  return (
    <Container>
      <ul>
        {professorUnico.map((professor, index) =>
          <li key={index.toString()}>
            <Link to={`/details/${professor}`}>{professor}</Link>
               <button type="button"
                  className="delete-button">
                  <BiTrash />
               </button>
          </li>
        )}
      </ul>
    </Container>
  )
};

export default Dashboard
