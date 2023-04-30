import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.Random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt); 

    return randomPrompt;
}