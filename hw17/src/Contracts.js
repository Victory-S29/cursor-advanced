import './Contracts.css';
import { Fragment, useState, useEffect } from 'react';

const contacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];

function Contact(props, key) {
  let img;
  if (props.gender === "male") {
    img = "https://static.thenounproject.com/png/2709857-200.png";
  } else if (props.gender === "female") {
    img = "https://cdn-icons-png.flaticon.com/512/65/65581.png";
  } else {
    img = "https://cdn-icons-png.flaticon.com/512/1/1247.png";
  }
  return (
    <div className='contact' key={key}>
      <img src={img} alt='avatar'></img>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <p>{props.phone}</p>
    </div>
  )
}

function Contacts() {
  const [newContacts, setContact] = useState(contacts);
  const [search, setSearch] = useState("");
  const [checkBox, setCheckbox] = useState([true, true, true])
  let updateChecks = [true, true, true]
  // змінюється тіки після оновлення змінної
  // щоб затримки на 1 не було
  useEffect(
    () => {
      const sortByInput = contacts.filter(contact => {
        const values = Object.values(contact);
        for (let i = 0; i < values.length; i++) {
          if (typeof values[i] === "string" && values[i].includes(search)) {
            return true
          }
        }
        return false
      })
      const sortByGender = contacts.filter((contact) => {
        if ((checkBox[0] && contact.gender === "male") ||
          (checkBox[1] && contact.gender === "female") ||
          (checkBox[2] && !contact.gender))
          return true;
          return false;
      })
      const finalArr = sortByInput.filter(element => sortByGender.includes(element));
      setContact(finalArr);
    },
    [search, checkBox]
  )

  
  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  function checkBoxCheck(id) {
    updateChecks = checkBox.map((el, i) => {
      if (i === id) { return !checkBox[i] }
      else return checkBox[i];

    });
    setCheckbox(updateChecks);

  }

  return (
    <Fragment>
      <div className='contacts--div'>
        <form>
        <div className='checkBox--section'> 
          <div className='checkBox-div'>
            <label className='checkBox-label' htmlFor="male"> Male
              <input className='checkBox' id="male" type="checkbox" defaultChecked
                onChange={() => { checkBoxCheck(0) }} />
            </label>
          </div>
          <div className='checkBox-div'>
            <label className='checkBox-label' htmlFor="female"> Female
              <input className='checkBox' id="female" type="checkbox" defaultChecked
                onChange={() => { checkBoxCheck(1) }}
              />
            </label>
          </div>
          <div className='checkBox-div'>
            <label className='checkBox-label' htmlFor="no"> Not specified
              <input className='checkBox' id="no" type="checkbox" defaultChecked
                onChange={() => { checkBoxCheck(2) }}
              />
            </label>
          </div>
          </div>
          <input placeholder='Enter name...' value={search} onChange={e => { handleSearchChange(e) }}></input>
        
        </form>
        {newContacts.map((contact, id) => <Contact key={id} {...contact} />)}
      </div>
    </Fragment>
  )
}


export default Contacts;
