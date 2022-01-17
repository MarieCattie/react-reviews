import React, {useState} from 'react';
import ReviewsList from './components/ReviewsList';
import reviews from './reviews';
import Context from './context';
import AddReview from './components/AddReview';
import './css/App.css';
function App() {
  let [review, setReview] = useState(reviews);
  function removeReview(id) {
    setReview(
      review.filter(item => item.id !== id)
    )
  }
  function sendForm(name, comment) {
    let now = new Date().toLocaleDateString();
    let last = review[review.length - 1];
    let lastId = last.id;
    setReview(
      review.concat([{
        id: lastId + 1,
        isAccepted: 1, 
        text: comment,
        name: name,
        send: now
      }])
    )
  }
  return (
    <Context.Provider value={{removeReview}}>
    <div className="App">
      <AddReview onAddition={sendForm}/>
      {review.length ? <ReviewsList revlist={review} /> : <p>Напишите отзыв первыми!</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
