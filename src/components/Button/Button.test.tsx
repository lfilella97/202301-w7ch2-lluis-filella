import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

describe("Given a Button component", () => {
  describe("When rendered with the class 'primary__button', with the text 'Primary' and with the action 'action'", () => {
    test("It should render a button with the class 'primary__button', the text 'Primary', and the function 'action'", () => {
      const action = jest.fn;

      render(
        <Button
          disabled={false}
          className="primary__button"
          text={"hello"}
          action={action}
        />
      );

      const genericButton = screen.getByRole("button", {
        name: "hello",
      });

      expect(genericButton).toHaveClass("primary__button");

      expect(genericButton).toHaveTextContent("hello");
    });
  });

  describe("When it receives a function and the user clicks on the button", () => {
    test("Then the action should have been called", () => {
      const action = jest.fn();

      render(
        <Button
          disabled={false}
          className="primary__button"
          text={"Secondary"}
          action={action}
        />
      );

      const genericButton = screen.getByRole("button", {
        name: "Secondary",
      });

      userEvent.click(genericButton);
      expect(action).toHaveBeenCalled();
    });
  });
});
