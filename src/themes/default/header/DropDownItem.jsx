const DropDownItem = (props) => {
    return (
        <a href="#" className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            <span className="menu-item-text">{props.children}</span>
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    )
}
export default DropDownItem;