import React from 'react'
import reactCSS, { hover } from 'reactcss'
import active from '../../helpers/active'

export const GithubSelectorEmoji = (props) => {
  const styles = reactCSS({
    'default': {
      wrap: {
        padding: '8px 0',
      },
      emoji: {
        width: '34px',
        textAlign: 'center',
        lineHeight: '29px',
        fontSize: '21px',
        fontFamily: '"Apple Color Emoji", "Segoe UI", "Segoe UI Emoji", "Segoe UI Symbol"',
        cursor: 'pointer',

        transform: 'scale(1)',
        transition: 'transform 0.15s cubic-bezier(0.2, 0, 0.13, 2)',
      },
    },
    'hover': {
      emoji: {
        transform: 'scale(1.2)',
      },
    },
    'active': {
      wrap: {
        backgroundColor: '#f2f8fa',
      },
    },
  }, props)

  return (
    <div style={ styles.wrap }>
      <div style={ styles.emoji }>
        { props.shortcode }
      </div>
    </div>
  )
}

export default hover(active(GithubSelectorEmoji))