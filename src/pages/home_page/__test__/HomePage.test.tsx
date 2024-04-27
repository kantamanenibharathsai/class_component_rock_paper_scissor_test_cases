import { fireEvent, render, screen, act } from "@testing-library/react";
import HomePage from "../HomePage";
import { BrowserRouter } from "react-router-dom";
import { leftImages, rightImages } from "../../../typescript/data";


function renderComponent() {
    return (
        <BrowserRouter>
            <HomePage />
        </BrowserRouter>
    );
}

beforeEach(() => {
    jest.useFakeTimers();
});

afterAll(() => {
    jest.useRealTimers();
});


describe('HomePage', () => {
    test("when user changed theme", () => {
        render(renderComponent());
        const themeBtn = screen.getByTestId("change-theme-btn");
        fireEvent.click(themeBtn);
        expect(themeBtn).toBeInTheDocument();
    });

    test("when user clicks on restart button", () => {
        render(renderComponent());
        const restartBtn = screen.getByTestId("restart-button");
        fireEvent.click(restartBtn);
        expect(restartBtn).toBeInTheDocument();
    });


    let mockedRandomValue: number;

    beforeEach(() => {
        mockedRandomValue = 0;
        jest.spyOn(global.Math, 'random').mockReturnValue(mockedRandomValue);
    });

    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })


    test('when user and computer selects same rock image', () => {
        render(renderComponent());
        const rockBtn = screen.queryAllByTestId("front-image-button")[0];
        fireEvent.click(rockBtn);
        expect(rockBtn).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute("src", "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();
        const computerSelection = screen.getByTestId("computer-right-img");
        expect(computerSelection).toHaveAttribute("src", rightImages[mockedRandomValue].rightImage);
        expect(computerSelection).toBeInTheDocument();
    });

    // let mockedRandomValueOne: number;
    // beforeEach(() => {
    //     mockedRandomValueOne = 1;
    //     jest.spyOn(global.Math, 'random').mockReturnValue(mockedRandomValueOne);
    // });

    // afterEach(() => {
    //     jest.spyOn(global.Math, 'random').mockRestore();
    // })


    test('when user and computer selects same paper image', () => {
        render(renderComponent());
        const paperBtn = screen.queryAllByTestId("front-image-button")[1];
        fireEvent.click(paperBtn);
        expect(paperBtn).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();
        const computerSelection = screen.getByTestId("computer-right-img");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });


    test('when user and computer selects same scissor image', () => {
        render(renderComponent());
        const paperBtn = screen.queryAllByTestId("front-image-button")[2];
        fireEvent.click(paperBtn);
        expect(paperBtn).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();
        const computerSelection = screen.getByTestId("computer-right-img");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });

    test("when user selects paper and computer selects rock", () => {
        render(<HomePage />);

        // Simulate user selecting paper (leftImgId = 2)
        const paperBtn = screen.queryAllByTestId("front-image-button")[1];
        fireEvent.click(paperBtn);
        expect(paperBtn).toBeInTheDocument();

        // Trigger the setTimeout callback by advancing the timers
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();

        // Assert that the computer's selection is displayed
        const computerSelection = screen.getByTestId("computer-right-img");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });


    test("when user selects paper and computer selects scissor", () => {
        render(<HomePage />);

        // Simulate user selecting paper (leftImgId = 2)
        const paperBtn = screen.queryAllByTestId("front-image-button")[1];
        fireEvent.click(paperBtn);
        expect(paperBtn).toBeInTheDocument();

        // Trigger the setTimeout callback by advancing the timers
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();

        // Assert that the computer's selection is displayed
        const computerSelection = screen.getByTestId("computer-right-img");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });

    test("when user selects scissor and computer selects paper", () => {
        render(<HomePage />);
        const scissorBtn = screen.queryAllByTestId("front-image-button")[2];
        fireEvent.click(scissorBtn);
        expect(scissorBtn).toBeInTheDocument();

        // Trigger the setTimeout callback by advancing the timers
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();

        // Assert that the computer's selection is displayed
        const computerSelection = screen.getByAltText("right-image");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });


    test("when user selects scissor and computer selects rock", () => {
        render(<HomePage />);
        const scissorBtn = screen.queryAllByTestId("front-image-button")[2];
        fireEvent.click(scissorBtn);
        expect(scissorBtn).toBeInTheDocument();

        // Trigger the setTimeout callback by advancing the timers
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();

        // Assert that the computer's selection is displayed
        const computerSelection = screen.getByAltText("right-image");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });

    test("when user selects rock and computer selects scissor", () => {
        render(<HomePage />);
        const rockBtn = screen.queryAllByTestId("front-image-button")[0];
        fireEvent.click(rockBtn);
        expect(rockBtn).toBeInTheDocument();

        // Trigger the setTimeout callback by advancing the timers
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();

        // Assert that the computer's selection is displayed
        const computerSelection = screen.getByAltText("right-image");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });


    test("when user selects rock and computer selects paper", () => {
        render(<HomePage />);
        const rockBtn = screen.queryAllByTestId("front-image-button")[0];
        fireEvent.click(rockBtn);
        expect(rockBtn).toBeInTheDocument();

        // Trigger the setTimeout callback by advancing the timers
        act(() => {
            jest.advanceTimersByTime(1000);
        });

        const userSlecetion = screen.getByTestId("user-left-img");
        expect(userSlecetion).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock2.png&w=256&q=100");
        expect(userSlecetion).toBeInTheDocument();

        // Assert that the computer's selection is displayed
        const computerSelection = screen.getByAltText("right-image");
        expect(computerSelection).toHaveAttribute('src', "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper1.png&w=256&q=100");
        expect(computerSelection).toBeInTheDocument();
    });

});