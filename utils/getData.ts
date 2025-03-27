"use server";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseConfig";

async function getAllProjects(limitNum?: number): Promise<ProjectType[]> {
  const collectionRef = collection(db, "projects");
  const data = limitNum
    ? query(collectionRef, orderBy("createdAt", "desc"), limit(limitNum))
    : query(collectionRef, orderBy("createdAt", "desc"));

  const projectSnapshots = await getDocs(data);
  const projects = projectSnapshots.docs.map((doc) => ({
    data: doc.data() as IProject,
    id: doc.id,
  }));
  return projects;
}
async function getAllSkills() {
  const collectionRef = collection(db, "skills");
  const data = query(collectionRef);
  const skillsSnapshots = await getDocs(data);
  const skills = skillsSnapshots.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
  return skills.sort((a, b) => a.data.createdAt - b.data.createdAt);
}

export { getAllProjects, getAllSkills };
