import { useState, useEffect } from "react"

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const current = element.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting)
          observer.unobserve(current)
        }
      },
      { rootMargin }
    )

    element.current && observer.observe(current)

    return () => observer.unobserve(current)
  }, [element, rootMargin])

  return isVisible
}
