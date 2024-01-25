const element = (
  // Write your code here.
  <div className='congrats-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='congrats-card'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='card-image'
      />
      <h1 className='card-heading'>Kiran v</h1>
      <p className='card-para'>
        Vishnu Institute of Computer Education and Technology,Bhimavaram.
      </p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='card-image-2'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
