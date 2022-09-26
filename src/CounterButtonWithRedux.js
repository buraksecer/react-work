import {useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {getNumberOfClicks} from "./redux/selectors";
import {counterButtonClicked} from "./redux/actions";

export const CounterButtonWithRedux = () => {
    const numberOfClicks = useSelector(getNumberOfClicks)
    const dispatch = useDispatch()
    const [incrementBy, setIncrementBy] = useState(1);
    return(
        <>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <label>
                Increment By:
                <input
                value={incrementBy}
                onChange={e => setIncrementBy(Number(e.target.value))}
                type={"number"}/>
            </label>
            <button onClick={()=>dispatch(counterButtonClicked(incrementBy))}>Click</button>
        </>
    )
}
