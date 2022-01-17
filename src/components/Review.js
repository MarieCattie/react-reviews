import React, { useContext} from 'react';

import Context from '../context';
function Review({review}) {
    const {removeReview} = useContext(Context);
    return ( 
        <div className='reviews__item'>
            <div>
                <p className='reviews__name'>{review.name}</p>
                <p className='reviews__send'>{review.send}</p> 
            </div>
            <p className='reviews__text'>{review.text}</p>
            <button className='reviews__remove' onClick={() => removeReview(review.id)}>x</button>
            <span className='reviews__number'>#{review.id}</span>
        </div>
     );
}

export default Review;