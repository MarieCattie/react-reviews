import React from 'react';
import Review from './Review';
import {CSSTransition} from 'react-transition-group';
function ReviewsList({revlist}) {
    return (
        <div className='reviews'> {
         revlist.map((rev, index) => {
            return (
             <Review key={rev.id} review={rev} index={index}  />   
            )
        }) }          
        </div>

        
     );
}

export default ReviewsList;