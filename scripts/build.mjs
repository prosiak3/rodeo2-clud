import { mkdir, copyFile } from "node:fs/promises";

await mkdir("public", { recursive: true });
await copyFile("PARTIA-v3.html", "public/index.html");
