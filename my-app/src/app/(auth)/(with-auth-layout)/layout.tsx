export default function WithAuth({ children }: { children: React.ReactNode }) {
    return <>
    <p>Inner Group Layout</p>
        {children}

        </>
}