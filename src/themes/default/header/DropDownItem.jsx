import { Link } from 'react-router-dom'
const DropDownItem = (props) => {
    return (
        <Link to={props.to ?? "#"} className="menu-item" onClick={() => props.goToMenu && props.setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            <span className="menu-item-text">{props.children}</span>
            <span className="icon-right">{props.rightIcon}</span>
        </Link>
    )
}
export default DropDownItem;