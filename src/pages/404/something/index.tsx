interface props {
    render: (menu:any) => any,
    value: string[]
}
export default (props:props) => {
    const {render,value} = props
    let resValue = value.length
    return (
        <div>render:
            {render(resValue)}
        </div>
    )
}