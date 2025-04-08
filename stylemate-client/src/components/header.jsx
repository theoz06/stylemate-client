import React from 'react'

const Header = ({title}) => {
  return (
    <header className="header_container fixed z-40 top-0 w-full p-3 flex items-center justify-center text-[#f1efec] bg-[#123458]">
    <div className="header_content flex items-center">
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  </header>
  )
}

export default Header;