const CartWidget = ({notificationCount }) => {
    return(
        <>
            <p>🛒</p>
            <p className="notification-badge"> {notificationCount}</p>       
        </>
        
    )
}

export default CartWidget