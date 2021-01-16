import React, { Component } from "react";
import Contact from "./Contact";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const contacts = [
  {
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.maleCheck = React.createRef();
    this.femaleCheck = React.createRef();
    this.neitherCheck = React.createRef();
    this.search = React.createRef();
  }

  state = {
    contacts: contacts,
  };

  updateSearch = (e) => {
    const genderContacts = contacts.filter(
      (contact) =>
        (this.maleCheck.current.checked === true &&
          contact.gender === "male") ||
        (this.femaleCheck.current.checked === true &&
          contact.gender === "female") ||
        (this.neitherCheck.current.checked === true &&
          typeof contact.gender === "undefined")
    );
    const filteredContacts = genderContacts.filter(
      (contact) =>
        (contact.firstName + " " + contact.lastName)
          .toLowerCase()
          .indexOf(this.search.current.value.toLowerCase()) >= 0 ||
        contact.phone.toLowerCase().indexOf(this.search.current.value) >= 0
    );
    console.log(filteredContacts);
    this.setState({ contacts: filteredContacts });
  };

  render() {
    return (
      <div className="wrapper" onChange={this.updateSearch}>
        <div>
          <input className="search-bar" type="text" ref={this.search}></input>
        </div>
        <div>
          <input
            type="checkbox"
            ref={this.maleCheck}
            id="male"
            defaultChecked
          />
          <label htmlFor="male">Ч</label>
          <input
            type="checkbox"
            ref={this.femaleCheck}
            id="female"
            defaultChecked
          />
          <label htmlFor="female">Ж</label>
          <input
            type="checkbox"
            ref={this.neitherCheck}
            id="neither"
            defaultChecked
          />
          <label htmlFor="neither">Не визначено</label>
        </div>
        {this.state.contacts.map((c, i) => (
          <Link to={`/contacts/${c.id}`}>
            <Contact
              firstName={c.firstName}
              lastName={c.lastName}
              number={c.phone}
              gender={c.gender}
              key={c.id}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Contacts;
