import { collection, getDocs } from "firebase/firestore/lite";
import { Firestore } from "../firebase/config";

export const loadnotes = async (uid = "") => {
  const collectionRef = collection(Firestore, `${uid}/journal/notes`);

  const docs = await getDocs(collectionRef);
  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });
  console.log(notes);
  return notes;
};
