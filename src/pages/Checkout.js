// The Checkout component represents the structure of a checkout page.
const Checkout = () => {
    return (
        <>
            {/* Checkout Title Section */}
            <div className="checkout-title text-center">
                <p><i className="fa-solid fa-cart-shopping fa-xl" style={{color: "#000000"}}></i> Checkout</p>
            </div>

            {/* Main Checkout Container with Two Main Boxes */}
            <div className="checkout-container container d-lg-flex">
                {/* Box 1: User Details and Item Selection */}
                <div className="box-1 user">
                    <div className="box-inner-1 pb-3 mb-3 ">
                        {/* Sub-Total Display */}
                        <div className="d-flex justify-content-between mb-3 userdetails">
                            <p className="fw-bold">Sub-Total</p>
                            <p className="fw-lighter"><span className="fas fa-dollar-sign"></span>3000.00+</p>
                        </div>
                        
                        {/* List of Available Items with Radio Buttons (for selection) */}
                        <div className="radiobtn">
                            {/* Hidden checkboxes that are used for selection logic */}
                            <input type="checkbox" name="box" id="one" style={{display: "none"}}/>
                            <input type="checkbox" name="box" id="two" style={{display: "none"}}/>
                            <input type="checkbox" name="box" id="three" style={{display: "none"}}/>
                            
                            {/* Label for Item 1 */}
                            <label htmlFor="one" className="box py-2 first">
                                <div className="d-flex align-items-start">
                                    <span className="circle"></span>
                                    <div className="course">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="fw-bold">
                                                Food Item
                                            </span>
                                            <span className="fas fa-dollar-sign">1000.00</span>
                                        </div>
                                        <span>Brief Description</span>
                                    </div>
                                </div>
                            </label>

                            {/* Label for Item 2 */}
                            <label htmlFor="two" className="box py-2 second">
                                <div className="d-flex">
                                    <span className="circle"></span>
                                    <div className="course">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="fw-bold">
                                                Food Item
                                            </span>
                                            <span className="fas fa-dollar-sign">1300.00</span>
                                        </div>
                                        <span>Brief Description</span>
                                    </div>
                                </div>
                            </label>

                            {/* Label for Item 3 */}
                            <label htmlFor="three" className="box py-2 third">
                                <div className="d-flex">
                                    <span className="circle"></span>
                                    <div className="course">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <span className="fw-bold">
                                                Food Item
                                            </span>
                                            <span className="fas fa-dollar-sign">700.00</span>
                                        </div>
                                        <span>Brief Description</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Box 2: Payment Details Section */}
                <div className="box-2">
                    <div className="box-inner-2">
                        {/* Payment Section Header */}
                        <div>
                            <p className="fw-bold">Payment Details</p>
                            <p className="dis mb-3">Complete your purchase by providing your payment details</p>
                        </div>

                        {/* Payment Form */}
                        <form action="">
                            {/* Email Address Input */}
                            <div className="mb-3">
                                <p className="dis fw-bold mb-2">Email address</p>
                                <input className="form-control" type="email" placeholder="example@gmail.com"/>
                            </div>

                            {/* Card Details Input Section */}
                            <div>
                                <p className="dis fw-bold mb-2">Card details And Expiry Date </p>
                                <div className="d-flex align-items-center justify-content-between card-atm border rounded">
                                    <div className="fab fa-cc-visa ps-3"></div>
                                    <input type="number" className="form-control" placeholder="Card Details"/>
                                    <div className="d-flex w-50">
                                        <input type="month" className="form-control px-0" placeholder="MM/YY"/>
                                    </div>
                                </div>

                                {/* CCV (Security code) Input */}
                                <div className="my-3 cardname">
                                    <p className="dis fw-bold mb-2">CCV</p>
                                    <input type="number" maxLength={3} className="form-control px-2" placeholder="123"/>
                                </div>

                                {/* Cardholder Name Input */}
                                <div className="my-3 cardname">
                                    <p className="dis fw-bold mb-2">Cardholder name</p>
                                    <input className="form-control" type="text" placeholder="John Brown"/>
                                </div>

                                {/* Billing Address Section */}
                                <div className="address">
                                    <p className="dis fw-bold mb-3">Billing address</p>
                                    <select className="form-select" aria-label="Default select example">
                                        {/* Dropdown with country selection */}
                                        <option value="0">Select Your Country</option>
                                        <option value="1">Jamaica</option>
                                        <option value="2">United States Of America</option>
                                        <option value="3">Canada</option>
                                        <option value="4">United Kingdom</option>
                                        <option value="5">Other</option>
                                    </select>
                                    <div className="d-flex">
                                        <input className="form-control zip" type="text" placeholder="ZIP"/>
                                        <input className="form-control state" type="text" placeholder="State"/>
                                    </div>
                                    
                                    <br/>

                                    {/* Price Breakdown: Subtotal, Tax, and Total */}
                                    <div className="d-flex flex-column dis">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <p>Subtotal</p>
                                            <p><span className="fas fa-dollar-sign"></span>3000.00</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <p>Tax<span>(5%)</span></p>
                                            <p><span className="fas fa-dollar-sign"></span>200.80</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <p className="fw-bold">Total</p>
                                            <p className="fw-bold"><span className="fas fa-dollar-sign"></span>3200.80</p>
                                        </div>

                                        {/* Pay Button with Total Price */}
                                        <div className="btn btn-primary mt-2">Pay <span className="fas fa-dollar-sign px-1"></span>3200.80</div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

// Export the Checkout component for use in other parts of the application
export default Checkout;