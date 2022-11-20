import React from 'react';
import "./signup.css"

function Signup() {

  return (
    <div class="form_wrapper">
        <div class="form_container">
            <div class="title_container">
                <h2>Sign up</h2>
            </div>
            <div class="row clearfix">
                <div>
                    <form>
                        <div class="input_field">
                            <input type="email" name="email" placeholder="Email" required />
                        </div>
                        <div class="input_field">
                            <input type="password" name="password" placeholder="Password" required />
                        </div>
                        <div class="input_field">
                            <input type="password" name="password" placeholder="Re-type Password" required />
                        </div>
                        <div class="row clearfix">
                            <div class="col_half">
                                <div class="input_field">
                                    <input type="text" name="name" placeholder="First Name" />
                                </div>
                            </div>
                            <div class="col_half">
                                <div class="input_field">
                                    <input type="text" name="name" placeholder="Last Name" required />
                                </div>
                            </div>
                        </div>
            	        <div class="radio_option">
                            <input type="radio" name="radiogroup1" id="rd1"/>
                            <label>Male</label>
                            <input type="radio" name="radiogroup1" id="rd2"/>
                            <label>Female</label>
                        </div>  

                        <div class="checkbox_option">
                            <input type="checkbox" id="cb1"/>
                            <label for="cb1">I agree with terms and conditions</label>
                        </div>
                        <div class="checkbox_option">
                            <input type="checkbox" id="cb2"/>
                            <label for="cb2">I want to receive the newsletter</label>
                        </div>
                        <input class="button" type="submit" value="Register" />
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
  }

  export default Signup;