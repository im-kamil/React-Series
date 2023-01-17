import React, { Component, PureComponent } from 'react'
import './App.css'
import Kamil2 from './components/Kamil2'
import ParentComp from './components/ParentComp'
import FocusInput from './components/FocusInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'


class App extends Component {
  render() {
    return (
      <div className="App">
         {/* <br /> */}
        {/* <Kamil2 />
        <ParentComp /> */}
        {/* <FocusInput /> */}
        {/* <PortalDemo /> */}
        {/* <Hero heroName="Batman" />
        <Hero heroName="Superman"/>
        <Hero heroName="Kamil weds refath"/> */}
        <ClickCounter name='Kamil'/>
        <HoverCounter />
        
      </div>
    )
  }
}

export default App