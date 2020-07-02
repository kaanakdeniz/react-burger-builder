import React from 'react';

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hopes it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                clicked={props.CheckoutCancelled}
                btnType="Danger">Cancel</Button>
            <Button
                clicked={props.CheckoutContinued}
                btnType="Success">Continue</Button>
        </div>
    )
};

export default checkoutSummary