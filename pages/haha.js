import { useRouter } from "next/router"

const haha = () => {
    const route = useRouter()
    return (
        <>
            <div>haha</div>
            <button onClick={() => {
                route.push("/")
            }}>go to home</button>
        </>
    )
}

export default haha