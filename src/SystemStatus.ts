import SystemInformation from 'systeminformation'
import { EventEmitter } from "events";

export default new class SystemStatus extends EventEmitter {

    /**
     * System Status constructor.
     */
    constructor() {
        super();
        this.start();
    }

    /**
     * Fetch and emit current system information.
     */
    protected async poll() {
        this.emit('cpu', await SystemInformation.cpu());
    }

    /**
     * Start polling for system information.
     */
    protected start() {
        setInterval(() => this.poll(), 1000);
    }
}