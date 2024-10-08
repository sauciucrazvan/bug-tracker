import { doc, getDoc } from "firebase/firestore";
import { db } from "@/app/(database)/firebase";

export async function getThread(thread: string) {
  return (await getDoc(doc(db, "threads", thread))).data();
}
