import React, { useEffect, useState } from 'react'
import './cardList.css'
import CardListItem from '../CardListItem/cardListItem'
import { connect } from 'react-redux'
import { withShopServices } from '../hooks/withShopContext'

import { itemLoaded, itemsLoading } from '../../actions/actions'
import Loading from '../loading/loading'

const CardListContainer = (props) => {
    const { shopService, items,
            itemLoaded, itemsLoading, 
            filtred = (data) => data,
            showInfo } = props

    useEffect(() => {
        itemsLoading()
        shopService.getAll().then(data => itemLoaded(data))
    }, [itemLoaded, itemsLoading, shopService])

    if(items.loading) {
        return <Loading/>
    }

    return <CardList showInfo={showInfo}
                     items={filtred(items.allItem)} />
}
const CardList = ({ items, showInfo }) => {
    return (
        <main >
            <div className="item-container">
                {items.map((item) => {
                    return (
                        <CardListItem key={item.id} item={item} showInfo={showInfo}  />
                    )
                })}
            </div>
        </main>
    )
}
const mapStateToProps = ({ items }) => {
    return {
        items
    }
}
const mapDispatchToProps = {
    itemLoaded,
    itemsLoading
}

export default  connect(mapStateToProps, mapDispatchToProps)(withShopServices()(CardListContainer))