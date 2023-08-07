import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "jsjkrneb",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-03",
});

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}
