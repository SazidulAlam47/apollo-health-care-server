/* eslint-disable no-console */
import { Server } from 'http';
import app from './app';
import config from './app/config';
import seedSuperAdmin from './app/DB/seedSuperAdmin';

const port = Number(config.port);

async function main() {
    try {
        seedSuperAdmin();

        const server: Server = app.listen(port, () => {
            console.log('Apollo Health Care Server is listening on port', port);
        });

        const exitHandler = () => {
            if (server) {
                server.close(() => {
                    console.info('Server closed!');
                });
            }
            process.exit(1);
        };

        process.on('uncaughtException', (error) => {
            console.log(error);
            exitHandler();
        });

        process.on('unhandledRejection', (error) => {
            console.log(error);
            exitHandler();
        });
    } catch (error) {
        console.log(error);
    }
}

main();
