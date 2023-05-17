import { Links, Meta } from "@remix-run/react"
import styles from './styles/index.css'

export function meta () {
  return [
    {title: "GuitarStore - Remix"}
  ]
}

export function links () {
  return [
    {
      rel: "stylesheet",
      href: styles,
    }
  ]
}

export default function App () {
  return (
    <Document>
      <h1>My App</h1>
    </Document>
  )
}

function Document ({children}) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

