import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './menu_header.css'
import { getAllCategory } from '../../actions/category.actions'
const MenuHeader = () => {

  const category = useSelector(state => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategory())
  }, [])

  const renderCategories = (categories) => {
    let myCategories = []
    for (let category of categories) {
      myCategories.push(
        <li key={Math.random()}>
          {
            category.parentId ? <a href={category.slug}>{category.name}</a> :
              <span>{category.name}</span>
          }

          {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
        </li>
      )
    }
    return myCategories;
  }


  return (<>
    <div className="menuHeader">
      <ul>
        {category.categories.length > 0 ? renderCategories(category.categories) : null}
      </ul>
    </div>

  </>);
};

export default MenuHeader;
