import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Thread } from "../(types)/Topics";

export async function getThreads() {
  const querySnapshot = await getDocs(collection(db, "threads"));
  const issuesData: Thread[] = [];
  querySnapshot.forEach((doc) => {
    const issueData = doc.data();
    issuesData.push({
      id: doc.id,
      title: issueData.title,
      status: issueData.status,
      severity: issueData.severity,
      author: issueData.author,
    });
  });

  return issuesData;
}
