import React from 'react'

const Links = () => {
  const titles = [
    "Home",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ]
  return (
    <div className='links'>
      {titles.map(title => (
        <a href={`#${title}`} key = {title}>{title}</a>
      ))}
    </div>
  )
}

export default Links