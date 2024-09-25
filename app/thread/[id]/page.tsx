import Link from "next/link";
import { notFound } from "next/navigation";

import Badge from "@/app/(root)/issues/subcomponents/Badge";
import ThreadPanel from "@/app/(root)/issues/subcomponents/Panel";

import { getThread } from "@/app/(database)/threads/getThread";

import { FaCalendar, FaImage, FaQuoteRight, FaUser } from "react-icons/fa";

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
          <div className="flex flex-col gap-2">
            <section className="artboard bg-base-200 rounded-md lg:w-[60vw] lg:max-w-xl">
              <h1 className="font-bold text-lg bg-base-300 rounded-t-md px-4 py-2 text-ellipsis overflow-hidden">
                {threadData.title}{" "}
              </h1>
              <section className="flex flex-col gap-1 px-4 py-2">
                <p className="flex flex-row items-center gap-2">
                  <FaCalendar /> {threadData.creationDate}
                </p>

                <p className="flex flex-row items-center gap-2">
                  <FaUser /> {threadData.author.name}
                </p>

                <div className="flex flex-row gap-1 items-center py-2">
                  <Badge type={"severity"} level={threadData.severity} />
                  <Badge type={"status"} level={threadData.status} />
                </div>

                {threadData.hidden && (
                  <div className="badge badge-error">
                    This topic has been hidden by an administrator.
                  </div>
                )}
              </section>
              <div className="divider m-0" />
              <section className="px-4 py-2">
                <div className="flex flex-row items-center gap-1 font-bold">
                  <FaQuoteRight /> Details
                </div>
                <div className="bg-base-300 px-2 py-1 rounded-md text-ellipsis overflow-hidden">
                  {threadData.description}
                </div>
              </section>
              {threadData.attachments && (
                <section className="px-4 py-2">
                  <div className="flex flex-row items-center gap-1 font-bold">
                    <FaImage /> Attachments
                  </div>
                  <div className="bg-base-300 px-2 py-1 rounded-md">
                    {threadData.attachments}
                  </div>
                </section>
              )}
            </section>

            <section className="artboard bg-base-200 rounded-md">
              <ThreadPanel id={id} data={threadData} />
            </section>
          </div>

          <section className="artboard bg-base-200 rounded-md">
            <h1 className="font-bold text-lg bg-base-300 px-4 py-2 rounded-md">
              Comments
            </h1>
            <section className="px-4 py-2">
              <h1>Comments Section (WIP)</h1>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}
