import { render, screen } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { RobotCard, RobotCardProps } from "./RobotCard";
import "@testing-library/jest-dom/extend-expect";

describe("Given a robotCard component", () => {
  describe("When it receives some robot properties", () => {
    test("It should render four spans and one image", () => {
      const robot: RobotCardProps = {
        robot: {
          _id: 1,
          name: "patato",
          image: "string;",
          speed: 9,
          endurance: 1,
          creationDate: "dad",
        },
      };

      render(
        <Wrapper>
          <RobotCard robot={robot.robot} />
        </Wrapper>
      );

      const robotTitle = screen.getByRole("heading", { name: "patato" });

      expect(robotTitle).toBeInTheDocument();
    });
  });
});
