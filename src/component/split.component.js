import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CREATE_SPLITING } from '../../src/core/actions/actions-type'



const SplitComponent = (props) => {
    
    const [splitData, setSpliData] = useState(null);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        const originalValue = Object.assign({}, splitData, { [name]: value });
        setSpliData(originalValue)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSplitMethod(splitData)
    }

    const handleKeypress = (e) => {
        const characterCode = e.key
        if (characterCode === 'Backspace') return

        const characterNumber = Number(characterCode)
        if (characterNumber >= 0 && characterNumber <= 9) {
            if (e.currentTarget.value && e.currentTarget.value.length) {
                return
            } else if (characterNumber === 0) {
                e.preventDefault()
            }
        } else {
            e.preventDefault()
        }
    }

    useEffect(() => {
    }, [props?.splits?.split])

    var elements = [];
    if(props?.splits?.split) {
        for (var i = 1; i <= props?.splits?.split?.totalPerson; i++) {
            elements.push(<div class="alert alert-primary" role="alert">
            {`Person ${i} Split Amount: ${props?.splits?.split?.splittedAmount || 'N/A'}`}
          </div>);
        }
    }
   


    return (
        <>
            <div className="container">
                {
                    props?.splits?.split ?
                        <>
                            <div className="row mt-5">
                                <div className="col">
                                    <div>
                                        <div className="card">
                                            <div className="card-body">
                                                <div>
                                                    <p>Total Amount: {props?.splits?.split?.totalAmount || 'N/A'} </p>
                                                    <p>Total Person: {props?.splits?.split?.totalPerson || 'N/A'}</p>
                                                    <p>Splitted Amount: {props?.splits?.split?.splittedAmount || 'N/A'} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="jumbotron">
                                        {
                                           elements

                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <h6>select the payment options</h6>
                                    <div className="card">
                                        <div className="card-body">
                                            <div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="debit" value="" />
                                                    <label className="form-check-label">
                                                        Debit Card
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="debit" value="" />
                                                    <label className="form-check-label">
                                                        Credit card
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="debit" value="" />
                                                    <label className="form-check-label">
                                                        Phone pay
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </>
                        : <div className="row d-flex justify-content-center mt-5">
                            <div className="col-6">
                                <form>
                                    <div className="form-group">
                                        <label >Total Customer</label>
                                        <input type="number" onChange={handleChange} onKeyDown={handleKeypress} min="1" className="form-control" name="totalPerson" id="customer" placeholder="Enter Total Customer" />
                                    </div>
                                    <div className="form-group">
                                        <label >Total Amount</label>
                                        <input type="number" onChange={handleChange} onKeyDown={handleKeypress} min="1" className="form-control" name="totalAmount" id="amount" placeholder="Enter Total Amount" />
                                    </div>
                                    <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                }
            </div>
        </>

    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        createSplitMethod: (data) => dispatch({ type: CREATE_SPLITING, url: 'http://localhost:8000/split', payload: data }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SplitComponent);