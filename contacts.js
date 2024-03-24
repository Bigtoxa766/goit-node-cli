import  {nanoid}  from 'nanoid';

import { promises as fs } from "fs"
import path from 'path';

const contactsPath = path.resolve('db', 'contacts.json')

async function listContacts() {
  // ...твій код. Повертає масив контактів.
try {
  const respRead = await fs.readFile(contactsPath)
  const contactsArr = JSON.parse(respRead);

  console.table(contactsArr)
} catch (err) {
  console.log(err.message)
}
};

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. 
  // Повертає null, якщо контакт з таким id не знайдений.
try {
  const respRead = await fs.readFile(contactsPath);
  const contactsArr = JSON.parse(respRead);

  const foundContact = contactsArr.find(contact =>
    contactId === contact.id);

  if (foundContact) {
    console.log(foundContact)
  } else {
    console.log(null)
  }
} catch (error) {
   error.message
}
};


async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. 
  // Повертає null, якщо контакт з таким id не знайдений.
try {
  const respRead = await fs.readFile(contactsPath);
  const contactsArr = JSON.parse(respRead);
  
  //  const filtredContacts = contactsArr.filter(contact =>
  //    contact.id !== contactId);

  const deletedContact = contactsArr.find(contact =>
    contact.id === contactId);
  
  if (deletedContact) {
    console.log(deletedContact)
  } else {
    console.log(null)
  }

} catch (error) {
  error.message
}
};


async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
  try {
    const respRead = await fs.readFile(contactsPath);
    const contactsArr = JSON.parse(respRead);

    const newContact = {
      id: nanoid(),
      name: name,
      email: email,
      phone: phone,
    }

    contactsArr.push(newContact)

    await fs.writeFile(contactsPath,
      JSON.stringify(contactsArr));

  console.log(newContact)
} catch (err) {
  console.log(err.message)
}
}

export { addContact, removeContact, getContactById, listContacts }