import { db, getDocs, collection } from "./firebase_config.js";

export async function obtenerPersonajes() {
  const personajesCol = collection(db, "personajes");
  const personajeSnapshot = await getDocs(personajesCol);
  const personajesList = personajeSnapshot.docs.map((doc) => doc.data());
  return  personajesList
}
