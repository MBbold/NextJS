import { useRouter } from "next/router"

const Haha = () => {
    const router = useRouter()
    return (
        <>
            <div>haha</div>
            <button onClick={() => {
                router.push("/")
            }}>go to home</button>
        </>
    )
}

export default Haha