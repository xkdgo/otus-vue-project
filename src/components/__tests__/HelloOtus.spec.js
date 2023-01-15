import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloOtus from "../HelloOtus.vue";

describe("HelloOtus", () => {
    it("renders properly", () => {
        const wrapper = mount(HelloOtus);
        expect(wrapper.text()).toContain("Hello OTUS!");
    });
});