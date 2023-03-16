const Check = ({ title, dataArr, state, stateChange }) => {
    return (
        <div className="flex place-items-center place-content-evenly">
            <input className="w-4 h-4 float-right" checked id={title} type="checkbox"/>
            <label for={title} className="w-fit bg-transparent text-white text-xl m-2">{title}</label>
        </div>
    )
}

export default Check;