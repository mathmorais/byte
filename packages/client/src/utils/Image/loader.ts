interface ILoaderProps {
  src: string
  width: number
  quality: number
}

interface Loader {
  (props: ILoaderProps): string
}

const unsplashLoader: Loader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality}`
}

export { unsplashLoader }
