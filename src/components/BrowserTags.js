import React from 'react'
import { Link } from 'gatsby'
import TagIcon from './TagIcon'

const BrowseTags = () => (
  <Link
    to="/tags"
    className="is-size-6"
    style={{
      position: 'fixed',
      bottom: '5%',
      right: '12px',
      backgroundColor: '#0e0e0e',
      padding: 'calc(6px + .2vw)',
      borderRadius: '18px',
      display: 'Flex',
      alignItems: 'center',
    }}
  >
    <TagIcon margin="4px" width="24px" /> Browse all tags
  </Link>
)

export default BrowseTags
