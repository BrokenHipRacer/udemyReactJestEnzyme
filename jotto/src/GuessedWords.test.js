import React from 'react';
import {shallow} from 'enzyme';
import {findByAttr, checkProps} from "./test/testUtils";
import GuessedWords from "./GussedWords";

const defaultProps = {
    guessedWords: 'foo'
};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>);
}

test('does not throw warning with expected props', () =>{
    checkProps(GuessedWords,defaultProps);
});

describe('if there are no words guessed', () => {

    let wrapper;

    beforeEach(() => {
       wrapper = setup({ guessedWords: [] });
    });

    test('renders without error', () => {
        const component = findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });

});

describe('if there are words guessed', () => {

    let wrapper;
    const guessedWords = [
        { guessedWord: 'train', letterMatchedCount: 3},
        { guessedWord: 'agile', letterMatchedCount: 1},
        { guessedWord: 'party', letterMatchedCount: 5}
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test('renders without error', () => {
        const component = findByAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders guessed words section', () => {
        const guessedWordsNode = findByAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });

});