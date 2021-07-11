/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "../../src/components/App";
import sinon from "sinon";
import { shallow } from "enzyme";

afterEach(() => {
  sinon.restore();
});

describe("<App />", () => {
  it("should render", () => {
    const app = shallow(<App />)

    expect(app.contains(<div>Welcome to react</div>)).toEqual(true)
  })
});
