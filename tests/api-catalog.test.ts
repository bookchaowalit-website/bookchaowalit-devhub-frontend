import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  API_CATALOG,
  allUrlsHttps,
  catalogIds,
} from "../src/lib/api-catalog.ts";

describe("devhub api catalog", () => {
  it("includes the core showcase APIs", () => {
    const ids = catalogIds();
    for (const id of ["portfolio", "techblog", "artblog", "techspace", "mcp"]) {
      assert.ok(ids.includes(id), `missing ${id}`);
    }
  });

  it("keeps only https MCP endpoints", () => {
    assert.equal(allUrlsHttps(), true);
    assert.ok(API_CATALOG.every((entry) => entry.endpoints > 0));
  });
});
