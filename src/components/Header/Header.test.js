import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import React from "react";

describe("clickSpan", () => {
  it("onClick", () => {
    const { queryByclassName } = <Header></Header>;
    const spn = queryByclassName("header");
    expect(spn.innnerHTML).toBe("Movie Web");
    fireEvent.click(spn);
    expect(spn.innnerHTML).toBe("Movie Web");
  });
});
