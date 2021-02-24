import React, { useState, useRef, useEffect } from 'react'

import './dropdown.sass'

const DropDown = ({ items, selectedUser, setSelectedUser }) => {
  const [open, setOpen] = useState(false)

  const dropdown = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', onOutsideClick)
    return () => {
      document.removeEventListener('mousedown', onOutsideClick)
    }
  }, [])

  const onOutsideClick = (e) => {
    if (!dropdown.current.contains(e.target)) {
      setOpen(false)
    }
  }

  const onItemSelectHandler = (e) => {
    setOpen(false)
    setSelectedUser(e.target.textContent)
  }

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper" ref={dropdown}>
        <div className="dropdown__container" onClick={() => setOpen(!open)}>
          <p className="container__title unselectable">{selectedUser}</p>
          <p className={open ? 'container__arrow--rotated unselectable' : 'container__arrow unselectable'}>&#9660;</p>
        </div>
        {open && (
          <ul className="dropdown__list">
            {!items.message ? (
              items.map((item, index) => (
                <li key={index} className="list__item unselectable" onClick={onItemSelectHandler}>
                  {item.name}
                </li>
              ))
            ) : (
              <li className="list__item unselectable">No items found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default DropDown
