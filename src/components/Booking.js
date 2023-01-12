import mario from '../images/MarioandAdrian.jpg'
const Booking = () => {
    return (
     <section class="bookingForm">
        <div class="location">
          <h3 class="location">Chicago</h3>
        </div>
        <div class="headText">
          <h3 class="headText">Find a Table for any Occasion</h3>
        </div>
        <div class="secImg">
          <div class="images">
            <img src={mario} alt="restarauntfood" />
          </div>
          <div class="images">
            <img src={mario} alt="chefs" />
          </div>
        </div>
        <div class="dateTime">
          <div class="dateD">
            <label for="date">Date:</label>
            <input class="date" type="date" name="date" id=""/>
          </div>
          <div class="dateT">
            <label for="time">Time:</label>
            <input class="time" type="time" name="time" list="avail"/>
            <datalist id="avail">
              <option value="11:00"></option>
              <option value="12:00"></option>
              <option value="13:00"></option>
              <option value="14:00"></option>
              <option value="15:00"></option>
              <option value="16:00"></option>
              <option value="17:00"></option>
              <option value="18:00"></option>
              <option value="19:00"></option>
            </datalist>
          </div>
        </div>
        <div class="diners">
          <input
            type="number"
            class="numDiners"
            placeholder="Number of Diners"
            name="diners"
            list="numDiners"
          />
          <datalist id="numDiners">
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
            <option value="6"></option>
            <option value="7"></option>
            <option value="8"></option>
            <option value="9"></option>
            <option value="10"></option>
          </datalist>
        </div>

        <div class="occasion">
          <input
            type="text"
            class="occasionType"
            placeholder="Occasion"
            name="occasionType"
            list="occasionType"
          />
          <datalist id="occasionType">
            <option value="Birthday"></option>
           <option value="Wedding"></option>
           <option value="Meeting"></option>
          </datalist>
        </div>

        <div class="seating">
          <h3>Seating Options</h3>
          <div class="options">
            <div class="standardOption">
            <label for="standard">Standard</label>
            <input type="checkbox" id="standard" name="standard" value="Standard" />
            </div>
            <br/>
            <div class="outsideOption">
              <label for="outside">Outside Garden</label>
            <input type="checkbox" id="outside" name="outside" value="Outside"/>
            </div>
          </div>
        </div>

        <div class="Submit">
          <button class="confirm">
            Proceed to Details
          </button>
        </div>
      </section>
    )
}

export default Booking;