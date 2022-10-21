import { PropsWithChildren, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Link = {
  name: string;
  url: string;
}
const links = [{ name: "Twitter", url: "https://twitter.com/tk_onl" }, { name: "Github", url: "https://github.com/Yurai-Kitadate" }]

function App() {
  return (
    <div className="App">
      <Introduction></Introduction>
      <Interest></Interest>
      <Urls></Urls>

    </div >
  )
}
const Introduction: React.FC = () => {
  return <div style={{ color: "white" }}>
    <h2>Who I am</h2>
    <ul>
      <li>University of Aizu 29th</li>
      <li> Mobile Application Engineer</li>
    </ul>
  </div>
}
const Interest: React.FC = () => {
  return <div style={{ color: "white" }}>
    <h2>Interest</h2>
    <ul>
      <li>Number Theory💌</li>
      <li>Cryptography</li>
      <li>Algorithm</li>
    </ul>
  </div>
}
const Links: React.FC<{ link: Link }> = ({ link }) => {
  return <div className="card">
    <a href={link.url}>
      <p>{link.name}</p>
    </a>
  </div >
}
const Urls: React.FC = () => {
  return <div style={{ color: "white" }}>
    <h2>Links</h2>
    <div className="horizontal-list">
      {links.map((link) => <Links link={link}></Links>)}
    </div>
  </div>

}
export default App