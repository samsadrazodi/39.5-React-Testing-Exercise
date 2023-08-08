import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

//Smoke Test
it('Should render without crashing', ()=>{
  render(<Carousel />);
})

//Snapshot Test 
it('matches snapshot', ()=>{
  const {asFragment} = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
})


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("works when you click on the left arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);


  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

    // move backward in the carousel
    const leftArrow = queryByTestId("left-arrow");
    fireEvent.click(leftArrow);


  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});


test('if left arrow button hides on first image',()=>{
  const {queryByTestId} = render(<Carousel />)
  const leftArrow = queryByTestId("left-arrow");
  expect(leftArrow).not.toBeInTheDocument();
})


test('if right arrow button hides on last image',()=>{
  const {queryByTestId} = render(<Carousel />)
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  
  expect(rightArrow).not.toBeInTheDocument();
})