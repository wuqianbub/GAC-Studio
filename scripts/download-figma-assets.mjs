import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const input =
  process.argv[2] ??
  path.join(
    // Default to current workspace's agent-tools output path.
    process.env.HOME,
    ".cursor",
    "projects",
    "Users-bytedance-Documents-4",
    "agent-tools",
    "11e77a82-32c3-4a25-851c-6d75d56771e1.txt",
  );

const outDir = path.join(repoRoot, "public", "figma", "assets");

if (!fs.existsSync(input)) {
  console.error(`Input not found: ${input}`);
  process.exit(1);
}

const text = fs.readFileSync(input, "utf8");
const urls = Array.from(
  new Set(
    [...text.matchAll(/http:\/\/localhost:3845\/assets\/[a-f0-9]+\.(?:png|svg)/g)].map(
      (m) => m[0],
    ),
  ),
);

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function download(url) {
  const filename = url.split("/").pop();
  const dest = path.join(outDir, filename);
  if (fs.existsSync(dest)) return { url, filename, skipped: true };

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status} ${res.statusText}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return { url, filename, skipped: false };
}

console.log(`Input: ${input}`);
console.log(`Output dir: ${outDir}`);
console.log(`Found ${urls.length} asset urls.`);
let ok = 0;
let skipped = 0;
for (const url of urls) {
  try {
    const r = await download(url);
    ok += 1;
    if (r.skipped) skipped += 1;
    process.stdout.write(r.skipped ? "." : "+");
  } catch (e) {
    console.error(`\n${e?.message ?? e}`);
  }
}
console.log(`\nDone. Downloaded ${ok - skipped}, skipped ${skipped}.`);

