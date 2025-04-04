import { render, screen } from "@testing-library/react";
import Todos from "./todos";
import userEvent from "@testing-library/user-event";

const basicFetch = window.fetch;

describe("Todos", () => {
  beforeEach(() => {
    window.fetch = basicFetch;
  });

  test("renders learn react link", () => {
    render(<Todos />);
    const outerDiv = screen.getByTestId("outer-div");
    expect(outerDiv).toBeInTheDocument();
  });

  test("renders list", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "new" }],
    });
    render(<Todos />);
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });

  test("click a checkbox", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [{ id: 1, title: "new" }],
    });
    render(<Todos />);
    const cbItems = await screen.findAllByRole("checkbox");
    expect(cbItems[0]).not.toBeChecked();
    userEvent.click(cbItems[0]);
    expect(cbItems[0]).toBeChecked();
  });
});
