import { makeServer } from "./miraje";

export function startMirage() {
    if(process.env.NODE_ENV === "development") {
        makeServer({ environment: "development" })
      }
}