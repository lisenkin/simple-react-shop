import React from 'react'
import ProductListContainer from '../CardList/cardList'
import { withRouter } from 'react-router-dom'


const AllItems = ({history}) => {
return <ProductListContainer  showInfo={(id) => history.push(`/item/${id}`)}/>
}


export default withRouter(AllItems)
