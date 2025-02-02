import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  // گرفتن لیست سفرها از فایل‌های Markdown یا JSON
  const tripsDir = path.join(process.cwd(), "content/trips");
  const tripFiles = fs.readdirSync(tripsDir);

  const trips = tripFiles.map((filename) => {
    const filePath = path.join(tripsDir, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      summary: data.summary,
      image: data.image,
    };
  });

  return (
    <main>
      <h1>سفرهای اخیر</h1>
      <div>
        {trips.map((trip) => (
          <div key={trip.slug}>
            <Link href={`/trip/${trip.slug}`}>
              <img src={trip.image} alt={trip.title} className="w-25 h-20 rounded-full " />
              <h2>{trip.title}</h2>
              <p>{trip.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
