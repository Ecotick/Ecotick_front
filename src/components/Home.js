import React from 'react'
import './Component.css'

function Home() {

    return (
        <div>
            <h1 className='titreForm'>Login</h1>

            <section className="formulaire">

              <form id="login" className="visible">

                <div className="form">
                  <label for="email">eMail</label>
                  <input type="text" id="email" name="email" placeholder="Votre eMail..."></input> <br/>
                  <label for="pass">password</label>
                  <input type="password" id="pass" name="pass" placeholder="Votre password.."></input> <br/>
                  <button className="submmit">Submit</button>
                </div>

              </form>
              
              <h1 className='titreForm'>Register</h1>
              
              <form id="register">

                <div className="form">
                  <label for="email">eMail</label>
                  <input type="text" id="email" name="email" placeholder="Votre eMail..."></input> <br/>
                  <label for="pass">password</label>
                  <input type="password" id="pass" name="pass" placeholder="Votre password.."></input> <br/>
                  <label for="pass">confirm password</label>
                  <input type="password" id="pass" name="pass" placeholder="Votre password.."></input> <br/>
                  <button className="submmit">Submit</button>
                </div>

                </form>

            </section>
        </div>
    )
}

export default Home
