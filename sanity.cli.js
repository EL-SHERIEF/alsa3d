import { dataset, projectId } from "@/sanity/env"
import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({ api: { projectId, dataset } })