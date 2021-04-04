import React from 'react'

function LoginLayout(props) {
    return (
        <div>
            <div className="mt-4 container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        {props.body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout
