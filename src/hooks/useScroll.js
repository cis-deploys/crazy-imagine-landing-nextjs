import { useCallback, useState, useEffect } from "react"

const useScroll = () => {
  const [scroll, setScroll] = useState(true)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 40) {
      setScroll(false)
    } else {
      setScroll(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
  return { scroll }
}

export default useScroll
