import React, { useState } from 'react'
import { MuscleMapBack, MuscleMapFront } from './components/MuscleMap'

const App = () => {
  //const [ example, setExample ] = useState([])
  const [ hover, setHover ] = useState( false )
  // state= {
  //   //     hover: false,
  //   //   }


  const divStyle = {
    backgroundColor: 'white',
    fontSize: 24,
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    height: 857,
    width: 390,

    border: "3px solid black",
    borderRadius: 6
  }

  const titleStyle = {
    fontSize: 34,
    paddingLeft: 24,
    marginTop: 70
  }

  const h2Style = {
    fontSize: 24
  }

  const muscleMapStyle = {
    margin: '30px 0 22px'
  }

  const topPanelStyle = {
    backgroundColor: '#f4f4f4',
    height: '50%'
  }

  const bottomPanelStyle = {
    height: '50%',
    padding: '0 29px'
  }

  const descriptionStyle = {
    fontSize: 13
  }

  const getStartedButtonStyle = {
    // background-color: black;
    // color: white;

    // width: 130px;
    // height: 40px;

    // font-size: 16px;// Why is the box slightly misaligned with #workout on its left? Changing it to 14px works though?
    // border-radius: 4px;
    // border: solid 1px black;

    // &:hover {
    //     background-color: $sg-teal;
    //     border: solid 1px $sg-teal;
    // }

    // &:disabled {
    //     background-color: lightgray;
    //     border: solid 1px lightgray;
    // }


    backgroundColor: 'black',
    color: 'white',

    width: 320,
    height: 55,

    fontSize: 18,
    borderRadius: 4,
    border: 'solid 1px black',

    '&:hover': {
      backgroundColor: 'red !important',
      fontSize: 50
    }
  }

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <div style={divStyle}>
      <div style={topPanelStyle}>
        <h1 style={titleStyle}>Strength Gap</h1>
        <div style={muscleMapStyle}>
          <MuscleMapFront />
          <MuscleMapBack />
          <MuscleMapFront />
          <MuscleMapBack />
          <MuscleMapFront />
        </div>
        <div>
          <MuscleMapFront />
          <MuscleMapBack />
          <MuscleMapFront />
          <MuscleMapBack />
          <MuscleMapFront />
        </div>
      </div>
      <div style={bottomPanelStyle}>
        <h2 style={h2Style}>A Tool to Check<br></br>for Muscle Imbalance</h2>
        <p style={descriptionStyle}>
          A common struggle for people who have just started working out is to ensure that the program they follow will target all muscle groups.<br></br><br></br>
          Not doing so - for instance, including chest exercises but no back exercises - can lead to muscle imbalances that can be detrimental to your health in the long term.
        </p>
        <button style={getStartedButtonStyle} id="getStartedButton" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get started</button>
      </div>
    </div>
  )
}

export default App