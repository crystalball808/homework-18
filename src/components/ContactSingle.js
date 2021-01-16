import React from "react";

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


function ContactSingle (props) {
    
    const contact = contacts.find((c)=>c.id.toString() === props.match.params.id)

    return <div className = "single-contact">
        <h1>Ім'я: {contact.firstName}</h1>
        <h1>Прізвище: {contact.lastName}</h1>
        <h1>Номер телефону: {contact.phone}</h1>
        <h1>Стать: {contact.gender || "Невизначена"}</h1>
    </div>
}

export default ContactSingle;