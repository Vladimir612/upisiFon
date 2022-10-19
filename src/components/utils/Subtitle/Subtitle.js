import React from "react"

const Subtitle = ({ children, type, customStyle }) => {
  const style = {
    color: type === "pink" ? "#901447" : "#380456",
    fontSize: "1.5rem",
    fontWeight: "300",
    margin: "0.5rem 0 2.5rem 0",
    ...customStyle,
  }

  return <h3 style={style}>{children}</h3>
}

export default Subtitle
