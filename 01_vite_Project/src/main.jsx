import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>custom App</h1>
    </div>
  )
}

// const ReactElement = {
//     type : 'a',
//     props: {
//         href : 'https://google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// const anotherUser = "chai aur react"

// const ReactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'click me to visit google',
//   anotherUser
// )

createRoot(document.getElementById('root')).render(
   <App/>
)
