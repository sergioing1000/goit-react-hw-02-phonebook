import { customAlphabet } from 'nanoid';

const generateUniqueID = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&/()=+', 15);

const uniqueID = generateUniqueID();

export const Generador = () => {
  return (
    <>
      <h2>Generador</h2>
      <p>{ uniqueID}</p>
    </>

  )
}