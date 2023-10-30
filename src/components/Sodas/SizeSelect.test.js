import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import SizeSelect from "./SizeSelect";

describe('SizeSelect Component', () => {
    test('Renders Three radio button boxes', () => {
        //Set up
        render(<form><SizeSelect/></form>);

        //Exercise
        //...Nothing

        //Assert
        expect(screen.getByText("8 oz")).toBeInTheDocument();
        expect(screen.getByText("16 oz")).toBeInTheDocument();
        expect(screen.getByText("32 oz")).toBeInTheDocument();
        
    });
    
    test('renders that one button is checked', () => {
        //Set up
        render(<form><SizeSelect/></form>);
        const smallBtn  = screen.getByRole('radio', { name: "8 oz" })
        const mediumBtn  = screen.getByRole('radio', { name: "16 oz" })
        const largeBtn  = screen.getByRole('radio', { name: "32 oz" })
        //Exercise
        fireEvent.click(smallBtn , {target: {value:"8"}});

        //Assert
        expect(smallBtn.value).toEqual("8");
        expect(smallBtn).toBeChecked();
        expect(mediumBtn).not.toBeChecked();
        expect(largeBtn).not.toBeChecked();
    })
    
})

