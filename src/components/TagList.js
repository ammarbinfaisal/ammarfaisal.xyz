import React from 'react'
import { Link } from 'gatsby'
import { kebabCase } from 'lodash'

const TagList = ({ tags }) => (
  <React.Fragment>
    <h1 className="title is-size-2 is-bold-light">Tags</h1>
    <ul className="taglist is-size-6">
      {tags.map(tag => (
        <li key={tag.fieldValue} className="tag-name">
          <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue} ({tag.totalCount})
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
)

export default TagList
