import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ExerciseCreator from '../client/components/ExerciseCreator';
import HistoryDisplay from '../client/components/HistoryDisplay';

configure({ adapter: new Adapter() });

describe('Test Exercise Creator', ()=>{
  it('should render an h3 tag', ()=>{
    const wapper = shallow(<ExerciseCreator />);
    expect(wapper.find('h3').text()).toEqual('Create a new Exercise:');
  });
});

describe('Test History Display', ()=>{
  it('should show history display', ()=>{
    const wapper = shallow(<HistoryDisplay />);
    expect(wapper.find('h1').text()).toEqual('Drill History:');
  });
});
