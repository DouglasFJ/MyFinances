import Routes from "../Routes/Routes";


export default function Layout({instance}){

    return (
        <>
            <header>Header da aplicação</header>
            <main>
                <Routes instance={instance} />
            </main>
            <footer>Footer da aplicação</footer>
        </>
    )
}