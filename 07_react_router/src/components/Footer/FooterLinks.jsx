import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterLinks({ LinkName, to}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:underline ${
          isActive ? "text-orange-700" : "text-gray-700"
        }`
      }
    >
      {LinkName}
    </NavLink>
  )
}

export default FooterLinks
