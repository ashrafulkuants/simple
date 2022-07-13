import React,{useState} from 'react'
import './MiniLibrary.css'
const MiniLibrary = () => {
  const [value, setValue] = useState('Machine Learning');
  const handleOptionChange=(e)=>{
    console.log(e.target.value);
    setValue(e.target.value)
  }
  return (
    <div className='mini-library'>
      <h2 className='main-heading-style'>Mini Library</h2>
      <div className='library-image'>
        <img src='/assets/libraryMain.svg' />
      </div>
      <div className="custom-select" >
        <select value={value} onChange={handleOptionChange}>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Lorem Ipsum">Lorem Ipsum</option>
          <option value="Lorem Ipsum">Ipsum Lorem</option>
        </select>

      </div>
      <div className='library_card-container'>
        <div className='library_card'>
          <h4 className='library_card-title'>Linear Regression</h4>
          <p className='library_card-para'>Its a predictive model that generates a linear equation out of the training datasets and then predicts the future points using the same 
          </p>
          <div className='thumbs-container'>
            <img src='/assets/thumbs-up.svg'/>
            <img src='/assets/thumbs-down.svg'/>
          </div>
        </div>
        <div className='library_card'>
          <h4 className='library_card-title'>Linear Regression</h4>
          <p className='library_card-para'>Its a predictive model that generates a linear equation out of the training datasets and then predicts the future points using the same 
          </p>
          <div className='thumbs-container'>
            <img src='/assets/thumbs-up.svg'/>
            <img src='/assets/thumbs-down.svg'/>
          </div>
        </div>
        <div className='library_card'>
          <h4 className='library_card-title'>Linear Regression</h4>
          <p className='library_card-para'>Its a predictive model that generates a linear equation out of the training datasets and then predicts the future points using the same 
          </p>
          <div className='thumbs-container'>
            <img src='/assets/thumbs-up.svg'/>
            <img src='/assets/thumbs-down.svg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiniLibrary