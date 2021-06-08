import React, { useEffect, useState } from 'react'
import { Form } from './styles'

interface Cadastro {
  disciplina: string;
  professor: string;
  diasemana: string;
  periodo: string;
  horario: string;
}


const New: React.FC = () => {
  const [professores, setProfessores] = useState<Cadastro[]>(() => {
    const storagedProfessores = localStorage.getItem(
      '@professores:cadastro'
    )

    if (storagedProfessores) {
      return JSON.parse(storagedProfessores) // converte string para objeto JS
    }
    return []
  })

  useEffect(() => {
    localStorage.setItem(
      '@professores:cadastro',
      JSON.stringify(professores) // converte um objeto JS para string
    )
  }, [professores])

  function handleAddProfessores(event: any) {
    event.preventDefault()

    const { target: form } = event

    const novoCadastro = {
      disciplina: form.disciplina.value,
      professor: form.professor.value,
      diasemana: form.diasemana.value,
      periodo: form.periodo.value,
      horario: form.horario.value,
    }
    setProfessores([...professores, novoCadastro]) // IMUTABILIDADE
    // console.log(novoCadastro)
    // console.log(professores)
    form.reset()
  }
  return (
    <Form onSubmit={handleAddProfessores}>
      <input type='text' name='disciplina' placeholder='Disciplina' />
      <input type='text' name='professor' placeholder='Professor' />
      <input type='text' name='diasemana' placeholder='Dia da semana' />
      <input type='text' name='periodo' placeholder='Periodo' />
      <input type='text' name='horario' placeholder='Horário' />
      <button type='submit'>Enviar</button>
    </Form>
  )
}

export default New
