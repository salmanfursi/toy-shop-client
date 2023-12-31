import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Avengers | ${title}`;

    }, [title])
};
export default useTitle;