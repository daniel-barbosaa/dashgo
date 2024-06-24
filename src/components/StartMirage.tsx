"use client";
import { makeServer } from "@/services/miraje"

export default function StartMirage() {
    if(process.env.NODE_ENV === "development") {
        makeServer({ environment: "development" })
      }

      return (
        <>
        </>
      )
}