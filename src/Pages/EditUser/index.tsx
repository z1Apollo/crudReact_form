import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BtnSubmit } from "../../Components/ButtonSubmit/style"
import { DivForm, Form } from "../Home/style"
import { EditForm } from "./style"
import { InputForm } from "../../Components/InputsForm/style"

interface IDadosUsuario {
    id: string,
    nome: string,
    email: string,
    telefone: string,
    nascimento: string,
    cpf: string
}

export const EditUser = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [usuarios, setUsuarios] = useState<IDadosUsuario[]>(() => {
        const dados = localStorage.getItem("listaUsuarios")
        return dados ? JSON.parse(dados) : []
    })

    const usuarioEncontrado = usuarios.find(usuarios => usuarios.id === id)

    const [formulario, setFormulario] = useState<IDadosUsuario | null>(
        usuarioEncontrado || null
    )

    if (!formulario) {
        return <p>Usuario não encontrado</p>
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setFormulario(prev => 
            prev ? {...prev, [name]:value } : prev
        )
    }

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault()

            const listaAtualizada = usuarios.map(usuario =>
            usuario.id === formulario.id ? formulario : usuario
        )

        setUsuarios(listaAtualizada)
        localStorage.setItem("listaUsuarios", JSON.stringify(listaAtualizada))

        navigate("/results")
    }

    return (
        <>
            <EditForm>
                <Form onSubmit={handleSubmit}>
                    <h2>Editar usuário: {formulario.nome}</h2>

                    <DivForm>
                        <div>
                            <label>Nome:</label> <br />
                            <InputForm name="nome" value={formulario.nome} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Email:</label> <br />
                            <InputForm name="email" value={formulario.email} onChange={handleChange} />
                        </div>
                        <div>
                           <label>Telefone:</label> <br />
                            <InputForm name="telefone" value={formulario.telefone} onChange={handleChange} />
                        </div>
                        <div>
                            <label>CPF:</label> <br />
                            <InputForm name="cpf" value={formulario.cpf} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Nascimento:</label> <br />
                            <InputForm name="nascimento" value={formulario.nascimento} onChange={handleChange} />
                        </div>
                    </DivForm>

                    <BtnSubmit>salvar</BtnSubmit>
                </Form>
            </EditForm>
        </>
    )
}   