import { useEffect, useState } from 'react'
import axios from 'axios'

export const useHook = () => {
  const [stories, setStories] = useState()

  const handleFetchStories = async () => {
    try {
      const data = await axios.get('http://localhost:3001/stories/')

      console.log(data.data)
      if (data.data) {
        setStories(data.data)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    handleFetchStories().catch((e) => console.error(e))
  }, [])

  return {
    stories,
  }
}
