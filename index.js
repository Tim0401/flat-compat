import { setTimeout } from 'timers/promises';
const main = async () => {
    while (true) {
        console.log('Hello World!');
        await setTimeout(1000);
    }
}

main();
