import Hero from "../../hero/Hero";
// import { fireEvent } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";

describe("Hero", () => {
  const defaultProps = {
    imageLink: "justLink",
    title: "justTitle",
    text: "justText",
    cName: "justCName",
    buttonWrapperClassName: "justButtonWrapperClassName",
  };
  it("Renders Hero with correct content", () => {
    render(<Hero {...defaultProps} />);
    const image = screen.getByRole("img");
    expect(image.src).toBe(defaultProps.imageLink);
    expect(screen.getByText(/justTitle /i)).toBeInTheDocument();
    expect(screen.getByText(/justText/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    const heroContainer = screen.getByTestId("hero-container");
    const buttonWrapper = screen.getByTestId("button-wrapper");

    expect(heroContainer).toHaveClass(defaultProps.cName);
    expect(buttonWrapper).toHaveClass(defaultProps.buttonWrapperClassName);
  });
});
