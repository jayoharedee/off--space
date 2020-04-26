import React from 'react'

// export default { title: 'Button' }

export const withText = () => <span>Hello span</span>

export const withEmoji = () => (
  <span>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </span>
)
