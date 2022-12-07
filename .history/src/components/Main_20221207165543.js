import React from 'react'

function Main() {
    return (
        <div className="main-content">
            <div className="row">
                <div className="col-left">
                    <div className="wrapper-card">
                        <div className="foodList">


                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>TITLE HEADING</h2>
                                <h5>Title description, Dec 7, 2017</h5>
                                <p>Some text.. Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>

                            <div className="card">
                                <h2>TITLE HEADING</h2>
                                <h5>Title description, Dec 7, 2017</h5>
                                <p>Some text.. Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-right">
                    <div className="wrapper-card">
                        <h2>Total Nutrients</h2>
                        <h5>Target: 2440 Cal, Dec 7, 2022</h5>
                        <br></br>
                        <p>Calories: 2440</p>
                        <p>Protein: 120</p>
                        <p>Fat: 120</p>

                    </div>


                </div>
            </div>


        </div>
    )
}

export default Main