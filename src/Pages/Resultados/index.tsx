import { useState } from "react"
import { BtnResults, ContResults, DadosResults, Resultados } from "./style"
import { BtnRemove } from "../../Components/ButtonRemove/style"
import { BtnEdit } from "../../Components/ButtonEdit/style"
import { useNavigate } from "react-router-dom"

    interface IDadosUsuario {
        id: string,
        nome: string,
        email: string,
        telefone: string,
        nascimento: string,
        cpf: string
    }

    export const Results = () => {
        const navigate = useNavigate()

        const [usuarios, setUsuarios] = useState<IDadosUsuario[]>(() => {
            const dadosSalvos = localStorage.getItem("listaUsuarios")
            return dadosSalvos ? JSON.parse(dadosSalvos) : []
        })

        const removerUsuario = (id: string) => {
            const novaLista = usuarios.filter(usuarios => usuarios.id !== id)

            setUsuarios(novaLista)
            localStorage.setItem("listaUsuarios", JSON.stringify(novaLista))
        }

        return (
            <>
                <ContResults>
                    <h2>Lista de dados</h2>

                    <Resultados>
                        {usuarios.length === 0 ? (
                            <p>Nenhum usuário cadastrado</p>
                            ) : (
                            usuarios.map((usuario, index) => (
                                <DadosResults key={index}>
                                    <h3>{usuario.nome}</h3>
                                    <p>Email: {usuario.email}</p>
                                    <p>Telefone: {usuario.telefone}</p>
                                    <p>CPF: {usuario.cpf}</p>
                                    <p>Nascimento: {usuario.nascimento}</p>

                                    <BtnResults>
                                        <BtnRemove onClick={() => removerUsuario(usuario.id)}>
                                            Remover
                                        </BtnRemove>
                                        <BtnEdit onClick={() => navigate(`/edit/${usuario.id}`)}>Editar</BtnEdit>
                                    </BtnResults>
                                    
                                </DadosResults>
                            ))
                        )}
                    </Resultados>
                </ContResults>
            </>
        )
    }