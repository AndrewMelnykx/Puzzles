import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import CustomModal from "@modals/Modal";
import "@testing-library/jest-dom/extend-expect";

interface RootState {
  authorization: {
    loginState: boolean;
  };
}

const mockStore = configureStore<RootState>();

describe("CustomModal", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      authorization: {
        loginState: false,
      },
    });
  });

  const defaultProps = {
    modalTitle: "Test Modal",
    textTitle: "Please enter your email",
    textReminder: "Remember to submit",
    handleClosing: jest.fn(),
    handleOpening: jest.fn(),
    handleChange: jest.fn(),
    inputs: [
      {
        id: "email",
        name: "email",
        label: "Email",
        type: "email",
        value: "",
        onChange: jest.fn(),
      },
    ],
  };

  it("Renders the modal with correct content", () => {
    render(
      <Provider store={store}>
        <CustomModal {...defaultProps} />
      </Provider>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("Closes modal when buttons are clicked", () => {
    render(
      <Provider store={store}>
        <CustomModal {...defaultProps} />
      </Provider>
    );

    fireEvent.click(screen.getByText("Login"));
    expect(defaultProps.handleOpening).toHaveBeenCalled();

    fireEvent.click(screen.getByText("Cancel"));
    expect(defaultProps.handleClosing).toHaveBeenCalled();
  });

  it("Submits the form and logs the email", () => {
    render(
      <Provider store={store}>
        <CustomModal {...defaultProps} />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByText("Submit"));
    expect(defaultProps.handleClosing).toHaveBeenCalled();
  });
});
