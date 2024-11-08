/* eslint-disable react/prop-types */


const DropDown = ({ title, options, func }) => {
    return (
        <div className="select">
            <select name="format" id="format" defaultValue="0" onChange={(func)}>
                <option value="0">
                    {title}
                </option>
                {options.map((o, i) => (
                    <option 
                        value={o} 
                        key={i}
                    >
                        {o.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default DropDown
