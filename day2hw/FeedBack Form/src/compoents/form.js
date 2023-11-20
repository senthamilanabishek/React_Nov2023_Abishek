const Form=()=>
{  
    return(
        <div className="fi">
            <div>
        <h1>FeedBack Form!</h1>
        </div>
    <div className="f">
        <div>
        <form>

            <fieldset>
        <table>
            <tr>
            <td><label for="n"><b>Name: </b>  </label></td>
            <td><input id="n" type="text" placeholder="Enter your Name"></input></td>
            <br></br>
            <br></br>
        </tr>
        <tr>
            <td><label for="e"><b>Email:</b>  </label></td>
        <td><input id="e" type="email" placeholder="Enter your Email"></input></td>
        <br></br>
        <br></br>
        </tr>
        <tr>
            <td><label for="m"><b>FeedBack:</b></label></td>
        <td><textarea>

        </textarea></td>
        </tr>
        
            
            
        
        </table>
        </fieldset>
        </form>
                <button>Submit</button>

        </div>
    </div>
    </div>);
}
export default Form;