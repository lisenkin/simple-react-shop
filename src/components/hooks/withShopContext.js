import React, {useContext} from 'react'

export const ShopServicesContext = React.createContext()

export const withShopServices = () => (Component) => {
    return (props) => {
        const shopService = useContext(ShopServicesContext)

        return (
            <Component  {...props} shopService={shopService}/>
        )
    }
}
