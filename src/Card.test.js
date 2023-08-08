import React from "react";
import {render, fireEvent} from '@testing-library/react';
import Card from "./Card";


// Smoke Test 
it('should render without crashing',()=>{
    render(<Card />)
})


//Snapshot Test 
it('matches snapshot', ()=>{
    const {asFragment} = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  })