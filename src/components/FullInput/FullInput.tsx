import {type ChangeEvent, useState} from "react";

type FullInputPropsType = {
    callBack: (value: string) => void
}

export const FullInput = ({callBack}: FullInputPropsType) => {

    const [value, setValue] = useState<string>('');

    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    const buttonOnClickHandler = () => {
        callBack(value);
        setValue('');
    }

    return (
        <div>
            <input type="text" value={value} onChange={inputOnChangeHandler}/>
            <button onClick={buttonOnClickHandler}>+</button>
        </div>
    );
};