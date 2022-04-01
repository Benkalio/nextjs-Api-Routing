import { useRef } from 'react';

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  //FOR FORM SUBMISSION
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    fetch(); //{email: 'test@test.com', text: 'some feedback text'}
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your email address:</label>
          <input type='email' id='email' ref={emailInputRef}/>
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id='feedback' rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send feedback</button>
      </form>
    </div>
  );
}

export default HomePage;
