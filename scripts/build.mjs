import { mkdir, copyFile } from "node:fs/promises";

await mkdir("public", { recursive: true });
await copyFile("PARTIA-v5.5.html", "public/index.html");
