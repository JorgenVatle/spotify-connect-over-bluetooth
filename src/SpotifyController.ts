import { spawn } from 'child_process';

export default new class SpotifyController {

    /**
     * Librespot Journald logs.
     */
    protected readonly logStream = spawn('journalctl', ['-t librespot', '-f']);

    constructor() {
        this.start();
    }

    protected start() {
        this.logStream.stdout.setEncoding('utf8');
        this.logStream.stdout.on('data', (text) => this.handleLog(text));
        this.logStream.on('close', (code) => this.handleClose(code));
    }

    protected handleLog(line: string) {
        console.log('Got librespot line: %s', line);
        if (line.match(/ConnectionReset/)) {
            spawn('sudo systemctl restart raspotify');
        }
    }

    protected handleClose(code: number) {
        console.log('Librespot logs closed with code: %s', code);
    }

}