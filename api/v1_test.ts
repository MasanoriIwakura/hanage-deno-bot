import api from "./v1.ts";
import { assertEquals } from "https://deno.land/std@0.147.0/testing/asserts.ts";

Deno.test("Hello World", async () => {
  const res = await api.request("/stations");
  assertEquals(res.status, 200);
  assertEquals(await res.text(), "Hello Deno!");
  assertEquals(res.headers.get("x-param"), "foo");
  assertEquals(res.headers.get("x-query"), "bar");
});
