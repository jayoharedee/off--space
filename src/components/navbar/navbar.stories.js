import React from 'react'

export default { title: 'Navbar' }

export const withText = () => <h1>Hello</h1>

export const withEmoji = () => (
  <button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
)
