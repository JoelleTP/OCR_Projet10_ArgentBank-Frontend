function Button({ onClick, className, title }) {
    return(
        <button onClick={onClick} type="submit" className={className}>{title}</button>
    )
}

export default Button