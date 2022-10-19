import React from "react"

const Title = ({ children, type, customStyle }) => {
  const style = {
    color: type === "pink" ? "#901447" : "#380456",
    fontSize: "3rem",
    margin: "1rem 0 2.5rem 0",
    fontWeight: "600",
    ...customStyle,
  }

  return <h2 style={style}>{children}</h2>
}

export default Title
