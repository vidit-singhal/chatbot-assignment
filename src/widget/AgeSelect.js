import React from 'react'
import "../App.css"

const AgeSelect = (props) => {
    const ageSubmitAction = () => {
        const selectedAge = document.getElementById('Age').value; // Get the selected age from the dropdown
        props.actions.afterAgeMessage(selectedAge); // Pass the selected age to afterAgeMessage
        props.actions.afterAgeMessage();
        
        
    }
    

  return (
    <div>
        <form action="#">
            <select className='age-select' name="Age" id="Age">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">131</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="39">39</option>
                <option value="40">40</option>
            </select>
            <input type="submit"  className='Submit' onClick={() => ageSubmitAction()} />
        </form>
    </div>
  )
}

export default AgeSelect