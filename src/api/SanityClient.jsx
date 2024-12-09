import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";


export const client = createClient({
    projectId: "vnmkbnfo",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
});

export const builder = ImageUrlBuilder(client);