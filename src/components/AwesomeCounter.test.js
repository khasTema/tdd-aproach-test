import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";


test('the conter should have correct an initial value when it is set to 7', () => {
    render(<AwesomeCounter initialValue={7} />)
    const count = screen.queryByText(7)
    expect(count).toBeVisible()
});

test('the conter should have default an initial 0', () => {
    render(<AwesomeCounter />)
    const count = screen.queryByText(0)
    expect(count).toBeVisible()
});

test('it should increase the value correctly when it is clicked ADD once', async () => {
    render(<AwesomeCounter initialValue={1} />)
    const addButton = screen.getByText('Add')
    await userEvent.click(addButton)
    const count = screen.queryByText(2)
    expect(count).toBeVisible()
});

test('it should increase the value correctly when it is clicked ADD twice', async () => {
    render(<AwesomeCounter initialValue={1} />)
    const addButton = screen.getByText('Add')
    await userEvent.click(addButton)
    await userEvent.click(addButton)
    const count = screen.queryByText(3)
    expect(count).toBeVisible()
});

test('it should decrease the value correctly when it is clicked REMOVE once', async () => {
    render(<AwesomeCounter initialValue={5} />)
    const removeButton = screen.getByText('Remove')
    await userEvent.click(removeButton)
    const count = screen.queryByText(4)
    expect(count).toBeVisible()
});

test('it should decrease the value correctly when it is clicked REMOVE twice', async () => {
    render(<AwesomeCounter initialValue={5} />)
    const removeButton = screen.getByText('Remove')
    await userEvent.click(removeButton)
    await userEvent.click(removeButton)
    const count = screen.queryByText(3)
    expect(count).toBeVisible()
});

test('negative numbers not allowed when value is 0 and Remove is clicked', async () => {
    render(<AwesomeCounter initialValue={0} />)
    const removeButton = screen.getByText('Remove')
    await userEvent.click(removeButton)
    const count = screen.queryByText(0)
    expect(count).toBeVisible() 
});

test('negative numbers not allowed when value is 2 and Remove is clicked 4 times', async () => {
    render(<AwesomeCounter initialValue={2} />)
    const removeButton = screen.getByText('Remove')
    await userEvent.click(removeButton)
    await userEvent.click(removeButton)
    await userEvent.click(removeButton)
    await userEvent.click(removeButton)
    const count = screen.queryByText(0 )
    expect(count).toBeVisible() 
});