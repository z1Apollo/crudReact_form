import { Outlet } from "react-router-dom"
import { Header, Links, Title, Ul } from "./style"

export const Layout = () => {
    return (
        <>
            <Header>
                <Title>Form Crud</Title>

                <Ul>
                    <li>
                        <Links to="/">Home</Links>
                    </li>
                    <li>
                        <Links to="/results">Resultados</Links>
                    </li>
                </Ul>
            </Header>
            <main>
                <Outlet />
            </main>
        </>
    )

}

