
import React, {useState} from "react";
import './footer.css'

function Footer(props) {

    const [value, setValue] =  useState(props.val);
    const handleValue = (event, newValue) => { setValue(newValue); }
    
    return (
        <footer class = "footer">
            <div class = "footerWrap">
                <div>
                    <div>
                        <h5>NOTBAEKJUN INC.</h5>
                        <div>
                            <div class="firstList">
                                <ul>
                                    <li><a href="">Product</a></li>
                                    <li><a href="">Benefits</a></li>
                                    <li><a href="">Partners</a></li>
                                    <li><a href="">Team</a></li>
                                </ul>
                            </div>
                            <div class="secondList">
                                <ul>
                                    <li><a href="">Documentation</a></li>
                                    <li><a href="">Support</a></li>
                                    <li><a href="">Legal Terms</a></li>
                                    <li><a href="">About</a></li>
                                </ul>
                            </div>
                        </div>
                        <br />
                    </div>
                    <div class="col-md-2">
                        <h5 class="text-md-right">Contact Us</h5>
                        <hr />
                    </div>
                    <div class="col-md-5">
                        <form>
                            <fieldset class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                            </fieldset>
                            <fieldset class="form-group text-xs-right">
                                <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
  }

  export default Footer;