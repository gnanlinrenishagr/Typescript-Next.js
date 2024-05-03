export default function riviewLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <>
            <header style={{
                backgroundColor: "red", padding: "1rem",
            }}>
                <p>Header in</p>
            </header>
            {children}
            <footer style={{
                backgroundColor: "orange", padding: "1rem",
            }}>
                <p>Footer in</p>
            </footer>
        </>


    )
}