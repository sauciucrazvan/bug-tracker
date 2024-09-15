import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Severity } from "../(types)/Severities";
import { getUsername } from "./getUsername";
import { User } from "@firebase/auth";

export async function insertThread(
  title: string,
  description: string,
  attachments: string,
  severity: Severity,
  user: User
) {
  await addDoc(collection(db, "threads"), {
    title: title,
    description: description,
    attachments: attachments,
    severity: severity,
    status: "open",
    author: { id: user?.uid, name: getUsername(user) },
    creationDate: new Date().toLocaleString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }),
  });
}
