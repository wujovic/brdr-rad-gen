import { useState } from "react"

export default function PreviewBox() {

    const [border, setBorder] = useState();

    return (
        <div className='box-container'>

            <div className='left-boxes'>

                <input id="left-up-box" className="small-box" />
                <input id="left-down-box" className="small-box" />

            </div>

            <div className='main-box'>
                <div className='inner-main-box'>

                </div>
            </div>

            <div className='right-boxes'>

                <input id="right-up-box" className="small-box" />
                <input id="right-down-box" className="small-box" />

            </div>

        </div>
    )
}