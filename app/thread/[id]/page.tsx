import Link from "next/link";
import { notFound } from "next/navigation";
import { FaAt, FaClock } from "react-icons/fa6";
import Badge from "@/app/(components)/issues/subcomponents/Badge";
import { getThread } from "@/app/(database)/getThread";

export default async function ViewIssue({
  params: { id },
}: {
  params: { id: string };
}) {
  const threadData = await getThread(id);
  if (threadData == null) return notFound();

  return (
    <>
      <section className="py-2 px-4">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Issues</Link>
            </li>
              <li>Viewing Thread</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start gap-2">
          <section className="artboard bg-base-200 px-4 py-2 rounded-md lg:w-[60vw]">
            <h1 className="font-bold text-lg">{threadData.title}</h1>
            <div className="divider m-0" />
            <section className="flex flex-col gap-1">
              <p className="flex flex-row items-center gap-2">
                <FaClock /> {threadData.creationDate}
              </p>
              <p className="flex flex-row items-center gap-2">
                <FaAt /> {threadData.author.name}
              </p>
              <div className="flex flex-row gap-1 items-center py-2">
                <Badge type={"severity"} level={threadData.severity} />
                <Badge type={"status"} level={threadData.status} />
              </div>
            </section>
            <div className="divider m-0" />
            <section className="py-2">
              <h1>{threadData.description}</h1>
            </section>
          </section>
          <section className="artboard bg-base-200 px-4 py-2 rounded-md">
            <h1 className="font-bold text-lg">Comments</h1>
            <div className="divider m-0" />
            <section className="pt-2">
              <h1>Comments Section</h1>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
