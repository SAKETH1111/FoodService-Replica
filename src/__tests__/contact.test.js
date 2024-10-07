
import Contact from "../components/Contact";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

test("Test Render of Contact us page",()=> {
    render(<Contact/>);
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument();
});