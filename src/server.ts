/* eslint-disable no-console */
import { Server } from 'http';
import app from './app';
import config from './app/config';

const port = Number(config.port);

async function main() {
    const server: Server = app.listen(port, () => {
        console.log('Apollo Health Care Server is listening on port', port);
    });
}

main();
