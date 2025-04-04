import { render, screen, act } from "@testing-library/react";
import Stopwatch from "./Stopwatch";
import userEvent from "@testing-library/user-event";

const flushPromises = () => new Promise((res) => process.nextTick(res));

jest.useFakeTimers();

describe("Stopwatch component", () => {
  test("Render default", () => {
    render(<Stopwatch />);
    expect(screen.getByText("0 d")).toBeInTheDocument();
    expect(screen.getByText("00 h")).toBeInTheDocument();
  });

  test("Start timer", () => {
    render(<Stopwatch />);
    const startButton = screen.getByRole("button", { name: "Start" });
    userEvent.click(startButton);
  });

  test("Stop timer", () => {
    render(<Stopwatch />);
    const startButton = screen.getByRole("button", { name: "Start" });
    userEvent.click(startButton);
    const stopButton = screen.getByRole("button", { name: "Stop" });
    userEvent.click(stopButton);
  });

  test("Reset timer", () => {
    render(<Stopwatch />);
    const resetButton = screen.getByRole("button", { name: "Reset" });
    userEvent.click(resetButton);
  });

  test("Start timer and wait", async () => {
    render(<Stopwatch />);
    const startButton = screen.getByRole("button", { name: "Start" });
    userEvent.click(startButton);
    act(() => {
      jest.advanceTimersByTime(60000);
    });
    // jest.advanceTimersByTime(90000);
    // await flushPromises();
    // const seconds = await screen.findByText("04 s", {}, { timeout: 5000 });
    // expect(seconds).toBeInTheDocument();
    // expect(setInterval).toHaveBeenCalledTimes(1);
    // expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 10);
  });
});
