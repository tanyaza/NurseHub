import React from 'react'


export default function SubmitOrder() {
    return (
        
    <section className="req-section">
        <form className="req-box">
            <div className='req-form-row'>
                <div className='req-input'>
                      <label for="order">نام</label>
                      <input type="text"/>
                </div>
                <div className='req-input'>

                     <label for="order">ﻧﺎم ﺧﺎﻧﻮادﮔﯽ</label>
                     <input type="text"/>
                </div>
          
            </div>
            <div className='req-form-row'>
                <div className='req-input'>
                    <label for="order">ﺷﻤﺎره ﺗﻤﺎس</label>
                    <input type="text"/>
                </div>
                <div className='req-input'>

                    <label for="order">ﮐﺪ ﻣﻠﯽ</label>
                    <input type="text"/>
                </div>


            </div>
            <div className='req-form-row'>
                 <div className='req-input'>

                    <label for="order">ﺗﺎرﯾﺦ درﯾﺎﻓﺖ ﺧﺪﻣﺎت</label>
                    <input type="text"/>
                </div>
                 <div className='req-input'>
                    <label for="order">ساعت </label>
                    <input type="text"/>
                </div>
            

            
            </div>
            <div className='req-form-row flex-column'>

                    <label for="order" >آدرس</label>
                    <input type="text"/>
            </div>
            <div className='req-form-row flex-column '>

                    <label for="order" >توضیحات</label>
                    <textarea type="text"/>
            </div>


            <button className="submitOrder-button" type="submit">ثبت درخواست</button>
        </form>
    </section>
        
    )
}
