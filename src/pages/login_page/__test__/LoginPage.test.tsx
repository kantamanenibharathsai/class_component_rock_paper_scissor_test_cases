import { fireEvent, render, screen } from "@testing-library/react"
import LoginPage from "../LoginPage"
import { BrowserRouter } from "react-router-dom"

describe('LoginPage', () => {
    test('should check it navigate or not', () => {
        render(
            <BrowserRouter>
                <LoginPage />
            </BrowserRouter>

        )
        const clickmeToStart = screen.getByTestId('click-me-btn')
        fireEvent.click(clickmeToStart)
        expect(clickmeToStart).toBeInTheDocument()
        expect(window.location.pathname).toBe("/")
    })
})