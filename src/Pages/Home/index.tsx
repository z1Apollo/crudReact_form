import { useNavigate } from "react-router-dom"
import { Cont, DivForm, Form } from "./style"
import React, { useState } from "react"
import { MaskCPF, MaskDate, MaskPhone } from "../../Components/Formatação Form"
import { BtnSubmit } from "../../Components/ButtonSubmit/style"

interface IDadosUsuario {
    id: string,
    nome: string,
    email: string,
    telefone: string,
    nascimento: string,
    cpf: string
}

export const Home = () => {
    const navigate = useNavigate()

    const [formulario, setFormulario] = useState<Omit<IDadosUsuario, "id">>({
        nome: "",
        email: "",
        telefone: "",
        cpf: "",
        nascimento: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        let valorFormatado = value

        if (name === "telefone") valorFormatado = MaskPhone(value)
        if (name === "nascimento") valorFormatado = MaskDate(value)
        if (name === "cpf") valorFormatado = MaskCPF(value)
        if (name === "nome") valorFormatado = value.replace(/[0-9]/g, "")

        setFormulario((prev) => ({
            ...prev,
            [name]: valorFormatado
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const usuariosSalvos = localStorage.getItem("listaUsuarios")

        const lista: IDadosUsuario[] = usuariosSalvos
            ?  JSON.parse(usuariosSalvos)
            : []

        const novoUsuario: IDadosUsuario = {
            ...formulario,
            id: crypto.randomUUID()
        }

        lista.push(novoUsuario)

        localStorage.setItem("listaUsuarios", JSON.stringify(lista))

        navigate("/results")
    }

    return (
        <>
            <Cont>
                <h2>Formulario</h2>

                <Form onSubmit={handleSubmit}>
                    <DivForm>
                        <div>
                            <label>Nome: </label> <br />
                            <input 
                            type="text" 
                            name="nome"
                            value={formulario.nome}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div>
                            <label>Telefone: </label> <br />
                            <input 
                            type="text" 
                            name="telefone"
                            placeholder="(85) 94002-8922"
                            value={formulario.telefone}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div>

                            <label>CPF: </label> <br />
                            <input 
                            type="text" 
                            name="cpf"
                            placeholder="123.456.789-00"
                            value={formulario.cpf}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div>
                            <label>Email: </label> <br />
                            <input 
                            type="email" 
                            name="email"
                            value={formulario.email}
                            onChange={handleChange}
                            required
                            />
                        </div>

                        <div>
                            <label>Nascimento: </label> <br />
                            <input 
                            type="text" 
                            name="nascimento"
                            placeholder="DD/MM/AAAA"
                            value={formulario.nascimento}
                            onChange={handleChange}
                            required
                            />
                        </div>
                    </DivForm>

                    <BtnSubmit>enviar</BtnSubmit>
                </Form>
            </Cont>
        </>
    )
}