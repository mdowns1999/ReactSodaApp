import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import QuantitySelect from "./QuantitySelect";

describe('SizeSelect Component', () => {
    test('Render input box with no input', () => {
        //Set up
        render(<form><QuantitySelect/></form>);
        // const input = screen.getByLabelText("Quantity:").

        // //Exercise
        // fireEvent.change(input, {target: {value:"1"}});

        // //Assert
        // expect(input.value).toBe(1)
        const input = screen.getByLabelText("Quantity:")

fireEvent.change(input, { target: { value: '1' } })
expect(input.value).toBe("1")
    });
    
})

