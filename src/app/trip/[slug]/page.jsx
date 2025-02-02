import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tripsDir = path.join(process.cwd(), "content/trips");
  const tripFiles = fs.readdirSync(tripsDir);
  
  return tripFiles.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default function TripPage({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/trips", `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return (
    <main>
      <h1>{data.title}</h1>
      <img src={data.image} alt={data.title} width={400} />
      <p>{content}</p>
    </main>
  );
}
