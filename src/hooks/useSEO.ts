import { useEffect } from 'react'

export default function useSEO(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} — ReadyCrew Trades Placement`

    let meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    }

    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} — ReadyCrew Trades Placement`)
    }

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) {
      ogDesc.setAttribute('content', description)
    }
  }, [title, description])
}
