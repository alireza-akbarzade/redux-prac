import { useDispatch } from "react-redux"
import { decrement } from "../../store/slices/counterSlice"


export default function DecreaseButton() {
    const dispatch =useDispatch()
    const decreaseHandler = () => {
        dispatch(decrement())
    }

    return (
        <button onClick={decreaseHandler}>decrease</button>
    )
}