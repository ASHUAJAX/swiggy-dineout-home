
interface SwiggyInputTextProps {
    data: {
        placeholder: string,
        name: string,
        value: string,
    }
    ,
    setData: any
}
function SwiggyInputText({ data, setData }: SwiggyInputTextProps) {
    const onChangeFunc = (ev: any): void => {
        const { value } = ev.target;
        setData((prev:any) => ({ ...prev, value }));
    }
    return (
        <>
            <input type={'text'} autoComplete="off" placeholder={data.placeholder} onChange={onChangeFunc} name={data.name} value={data.value} />
        </>
    )
}

export default SwiggyInputText;