interface Props {
    inputType: string;
}
const Input = (props: Props) => {
    const { inputType } = props;
    return (
        <div>
            <input type={inputType} />
        </div>
    );
};

export default Input;
