import React from 'react'

const Newticket = () => {
  return (
    <div className='container p-5'>
        
        <form className='card my-5'>
            <input type="text" className='form-control my-3' value={"harry"} disabled />
            <input type="text" className='form-control my-3' value={"harry@gmail.com"} disabled />
            <select className='form-select my-3' required>
                <option value="iphone">iphone</option>
                <option value="ipod">ipod</option>
                <option value="iwatch">iwatch</option>
                <option value="imac">imac</option>
                <option value="ipad">ipad</option>
                <option value="macbook">macbook</option>
            </select>
            <textarea className='form-control' placeholder='please describe your issue' required></textarea>
            <button className='btn btn-success'>raise ticket</button>
        </form>
        
    </div>
  )
}
export default Newticket

