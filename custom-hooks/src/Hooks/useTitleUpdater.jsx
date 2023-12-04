import { useEffect } from "react"


const useTitleUpdater = (count) => {
    useEffect(() => {
        count > 0 ? document.title = `Chats (${count})` : document.title = "Chats ";
    }, [count])
}

export default useTitleUpdater;