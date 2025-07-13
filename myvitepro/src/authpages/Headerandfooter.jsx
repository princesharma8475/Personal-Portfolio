import React from 'react'

function Headerandfooter(props) {
    let data={
        background: props.bcolor,
        padding: props.pd,
        fontsize: props.fsize,
        color:props.col,
        textAlign: "center "
    }
  return (
    <div style={data}>{props.name}</div>
  )
}

export default Headerandfooter
