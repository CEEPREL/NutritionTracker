import React from 'react'
import { FaPlus } from 'react-icons/fa';
function Main() {
    return (
        <div className="main-content">
            <div className="row">
                <div className="col-left">
                    <div className="wrapper-card">
                        <div className="foodList">

                            <h1>Food list</h1><br></br>
                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="card">
                                <h2>Chicken</h2>
                                <h5>1 serving, 200g</h5>
                                <p>Protein: 10g</p>
                            </div>

                            <div className="new-card">
                                <h3>Add food </h3><br></br>
                                <h1><FaPlus/></h1>
                                
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