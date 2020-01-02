import { spawn } from 'child_process';

export default new class SpotifyController {

    /**
     * Librespot Journald logs.
     */
    protected readonly logStream = spawn('journalctl -t librespot -f');

    constructor() {
        this.start();
    }

    protected start() {
        this.logStream.stdout.setEncoding('utf8');
        this.logStream.stdout.on('data', (text) => this.handleLog(text));
    }

    protected handleLog(line: string) {
        if (line.match(/ConnectionReset/)) {
            spawn('sudo systemctl restart raspotify');
        }
    }

}