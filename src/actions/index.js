export const EMAIL = 'EMAIL'; // etiqueta que vai para o reducer.

export const addEmail = (email) => ({ // action que vai para o componete.
  type: EMAIL,
  email,
});
