import { useState, useEffect } from 'react'
import { mobileSize } from 'src/styles/theme'

const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const init = () => {
      if (mobileSize > window.innerWidth) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    init()
    window.addEventListener('resize', init)
    return () => window.removeEventListener('resize', init)
  }, [])

  return { isMobile }
}

export default useMobile
