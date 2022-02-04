import { useState } from "react"

export default function PreviewBox() {

    const [topLeftBorderNum, setTopLeftBorderNum] = useState("");
    const [bottomLeftBorderNum, setBottomLeftBorderNum] = useState("");
    const [topRightBorderNum, setTopRightBorderNum] = useState("");
    const [bottomRightBorderNum, setBottomRightBorderNum] = useState("");

    function handleTopLeftChange(event: any) {
        setTopLeftBorderNum(event.target.value);
    }

    function handleBottomLeftChange(event: any) {
        setBottomLeftBorderNum(event.target.value);
    }

    function handleTopRightChange(event: any) {
        setTopRightBorderNum(event.target.value);
    }

    function handleBottomRightChange(event: any) {
        setBottomRightBorderNum(event.target.value);
    }

    return (
        <div className='box-container'>

            <div className='left-boxes'>

                <input
                    id="left-up-box"
                    className="small-box"
                    type="text"
                    placeholder="0"
                    onChange={handleTopLeftChange}
                    value={topLeftBorderNum}
                />
                <input
                    id="left-down-box"
                    className="small-box"
                    type="text"
                    placeholder="0"
                    onChange={handleBottomLeftChange}
                    value={bottomLeftBorderNum}
                />

            </div>

            <div className='main-box' style={
                {
                    borderTopLeftRadius: topLeftBorderNum + 'px',
                    borderBottomLeftRadius: bottomLeftBorderNum + 'px',
                    borderTopRightRadius: topRightBorderNum + 'px',
                    borderBottomRightRadius: bottomRightBorderNum + 'px'
                }
            }>
                <div className='inner-main-box'></div>
            </div>

            <div className='right-boxes'>

                <input
                    id="right-up-box"
                    className="small-box"
                    type="text"
                    placeholder="0"
                    onChange={handleTopRightChange}
                    value={topRightBorderNum}
                />
                <input
                    id="right-down-box"
                    className="small-box"
                    type="text"
                    placeholder="0"
                    onChange={handleBottomRightChange}
                    value={bottomRightBorderNum}
                />

            </div>

        </div>
    )
}