import { mkdir, copyFile } from "node:fs/promises";

await mkdir("public", { recursive: true });
await copyFile("PARTIA-v6.1.html", "public/index.html");
