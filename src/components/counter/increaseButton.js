import { useDispatch } from "react-redux"
import { increment } from "../../store/slices/counterSlice"

export default function IncreaseButton() {
    const dispach =useDispatch()
    const increaseHandler = () => {
       dispach(increment())
    }

    return (
        <button onClick={increaseHandler}>increase</button>
    )
}