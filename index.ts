import { setTimeout } from 'timers/promises';
import { sub } from './sub';

const main = async () => {
    while (true) {
        console.log('Hello World!');
        sub();
        await setTimeout(1000);
    }
}

main();
