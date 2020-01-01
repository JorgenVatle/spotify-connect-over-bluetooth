import SystemInformation from 'systeminformation'
import { EventEmitter } from "events";

export default class SystemStatus extends EventEmitter {

    /**
     * Fetch and emit current system information.
     */
    protected async poll() {
        this.emit('cpu', await SystemInformation.cpu());
    }

    /**
     * Start polling for system information.
     */
    start() {
        setInterval(() => this.poll(), 1000);
    }
}