
const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (<span className='flex relative w-3 h-3'>
                <span className='btn-ping'></span>
                <span className='btn-ping_dot'></span>
            </span>)}
            {name}
        </button>
    )
}

export default Button