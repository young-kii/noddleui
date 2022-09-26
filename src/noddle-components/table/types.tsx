namespace _Table {
    export interface tableProps {
        dataSource: any[]
        columns: any[]
        titleAlign?: 'left' | 'right' | 'center'
        cellAlign?: 'left' | 'right' | 'center'
        wrap?: 'nowrap' | 'wrap'
        width?: 'max-content' | string | number
    }
}

export default _Table